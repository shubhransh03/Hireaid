type VideoColumnProps = {
  messages: string[];
  message: string;
  setMessage: (v: string) => void;
  sendMessage: () => void;
  activeTab: "assistant" | "notes" | "transcript";
  setActiveTab: (t: "assistant" | "notes" | "transcript") => void;
};

export default function VideoColumn(props: VideoColumnProps) {
  const { messages, message, setMessage, sendMessage, activeTab, setActiveTab } = props;

  return (
    <>
      <div className="bg-black rounded-2xl overflow-hidden h-[380px] relative flex items-center justify-center">
        <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 rounded text-xs text-slate-200">View</div>
        <div className="text-3xl font-semibold text-white drop-shadow-lg">Samuel Baker</div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
          <div className="flex items-center gap-3">Audio · Video · Participants · Chat</div>
          <div className="flex items-center gap-3">Share · More · End</div>
        </div>
      </div>

      <div className="mt-4 bg-white rounded-2xl shadow p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab("assistant")}
              className={`px-3 py-1 rounded-lg border ${activeTab === "assistant" ? "border-sky-300 bg-sky-50 text-sky-700" : "border-transparent bg-slate-100 text-slate-600"}`}>
              AI Assistant
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`px-3 py-1 rounded-lg border ${activeTab === "notes" ? "border-sky-300 bg-sky-50 text-sky-700" : "border-transparent bg-slate-100 text-slate-600"}`}>
              Notes
            </button>
            <button
              onClick={() => setActiveTab("transcript")}
              className={`px-3 py-1 rounded-lg border ${activeTab === "transcript" ? "border-sky-300 bg-sky-50 text-sky-700" : "border-transparent bg-slate-100 text-slate-600"}`}>
              Live Transcript
            </button>
          </div>

          <div className="text-xs text-slate-400">9:40 AM</div>
        </div>

        <div className="min-h-[140px] max-h-48 overflow-auto p-3 bg-slate-50 rounded">
          {messages.map((m, i) => (
            <div key={i} className="mb-2 text-sm">
              <div className="text-slate-700">{m}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask anything..."
            className="flex-1 px-4 py-3 rounded-lg border border-slate-200 bg-white"
          />
          <button onClick={sendMessage} className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center">↑</button>
        </div>

        <div className="mt-3 flex gap-3 text-xs">
          <button className="px-3 py-2 rounded-lg bg-slate-100">Attach File</button>
          <button className="px-3 py-2 rounded-lg bg-slate-100">Upload Image</button>
        </div>
      </div>
    </>
  );
}
