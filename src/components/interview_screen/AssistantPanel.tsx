import React, { useState } from "react";
import ChatInput from "@/components/interview_screen/Assisstant_panel/chat_input.tsx";

type Candidate = {
  name?: string;
  role?: string;
  time?: string;
};

type Props = {
  candidate?: Candidate; // no longer required
  onSend?: (text: string) => void;
  defaultTab?: "assistant" | "notes" | "transcript";
};

export default function AssistantPanel({ candidate, onSend, defaultTab = "assistant" }: Props) {
  const [activeTab, setActiveTab] = useState<"assistant" | "notes" | "transcript">(defaultTab);
  const [text, setText] = useState("");

  function send() {
    const trimmed = text.trim();
    if (!trimmed) return;
    onSend?.(trimmed);
    setText("");
  }

  const firstName = candidate?.name?.split?.(" ")?.[0] ?? "there";
  const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="w-full max-w-[820px] mx-auto p-4 bg-[#f6f9fc] rounded-lg shadow-sm">
      {/* Tabs Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button onClick={() => setActiveTab("assistant")} className={`text-sm font-semibold pb-1 ${activeTab === "assistant" ? "text-sky-600 border-b-2 border-sky-600" : "text-slate-500"}`}>
            <span className="inline-flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#0ea5e9" strokeWidth="1.2" fill="#e6f6ff" />
                <path d="M12 7.5V12L14.5 13.5" stroke="#0ea5e9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              AI Assistant
            </span>
          </button>

          <button onClick={() => setActiveTab("notes")} className={`text-sm pb-1 ${activeTab === "notes" ? "text-sky-600 border-b-2 border-sky-600" : "text-slate-500"}`}>
            Notes
          </button>

          <button onClick={() => setActiveTab("transcript")} className={`text-sm pb-1 ${activeTab === "transcript" ? "text-sky-600 border-b-2 border-sky-600" : "text-slate-500"}`}>
            Live Transcript
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button title="Open in new window" className="p-2 rounded-md hover:bg-white/40">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 3h7v7" />
              <path d="M21 3L10 14" />
            </svg>
          </button>

          <button title="Close" className="p-2 rounded-md hover:bg-white/40" onClick={() => {}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* AI ASSISTANT TAB */}
      {activeTab === "assistant" && (
        <div className="bg-white rounded-xl p-4 border border-green-100 shadow-sm mb-6">
          <p className="text-green-700 text-sm leading-relaxed">
            <span className="text-green-900 font-semibold">Hi {firstName},</span>{" "}
            let’s get this interview started. Feel free to ask me any questions you have during the interview. I’ll also provide real-time feedback and evaluations for the candidate’s answers. You can use this space to take notes as well.
          </p>
        </div>
      )}

      {/* NOTES TAB */}
      {activeTab === "notes" && (
        <div className="bg-white rounded-xl p-4 border shadow-sm mb-6">
          <p className="text-sm text-slate-700">
            The candidate presents a well-structured resume that highlights strong academic background, relevant professional experience, and clearly demonstrated skills. Achievements are quantified, showcasing impact and results, while the overall format is clean, concise, and easy to follow.
          </p>
          <div className="text-xs text-slate-400 mt-2">9:40 AM</div>
        </div>
      )}

      {/* TRANSCRIPT TAB */}
      {activeTab === "transcript" && (
        <div className="bg-white rounded-xl p-4 border shadow-sm mb-6">
          {/* transcript content omitted for brevity (keep your existing transcript jsx) */}
        </div>
      )}

      {/* Input Box (always visible) */}
      <ChatInput
        text={text}
        setText={setText}
        send={send}
        onAttachFile={(f) => console.log("attached", f)}
        onUploadImage={(f) => console.log("image", f)}
      />
    </div>
  );
}
