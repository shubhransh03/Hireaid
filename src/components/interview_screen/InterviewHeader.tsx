// src/components/InterviewHeader.tsx
import React from "react";

export type Candidate = {
  name: string;
  role?: string;
  time?: string;
};

type Props = {
  candidate: Candidate;
  onAssistant?: () => void;
  onStructure?: () => void;
  onEnd?: () => void;
};

export default function InterviewHeader({
  candidate,
  onAssistant,
  onStructure,
  onEnd,
}: Props) {
  return (
    <div className="w-full flex justify-center py-4 px-2" style={{ background: "#f3f8ff" }}>
      <div className="w-full max-w-[1150px] bg-white rounded-2xl shadow-sm overflow-hidden px-10 py-5">
        <div className="flex items-center justify-between w-full">
          {/* LEFT SECTION */}
          <div className="flex flex-col gap-1.5">
            <div className="text-sm text-gray-500">
              Interview Schedule <span className="mx-1">/</span>
              <span className="font-medium text-gray-700">Interview</span>
            </div>

            <div className="flex items-center gap-2.5 mt-0.5">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e7f0ff] text-[#0a6adf] text-lg font-semibold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#0a6adf]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <div className="flex flex-col leading-tight">
  <span className="text-lg font-semibold text-gray-900">{candidate.name}</span>

  <span className="inline-flex items-center rounded-full border border-[#d4e4f7] bg-[#eef5fd] px-2 h-6 text-sm font-medium text-[#0a6adf]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-3.5 h-3.5 text-[#0a6adf]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>

  <span className="ml-1 leading-tight">
    {candidate.time ?? "—"}
  </span>
</span>
</div>

            </div>
          </div>

          {/* RIGHT BUTTONS */}
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={onAssistant}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#bcdcff] bg-[#f7fbff] text-[#0a6adf] font-medium text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
              </svg>
              AI Assistant
            </button>

            <button
              type="button"
              onClick={onStructure}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#bcdcff] bg-[#f7fbff] text-[#0a6adf] font-medium text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
              </svg>
              Interview Structure
            </button>

            <button
              type="button"
              onClick={onEnd}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#ffcdcd] bg-[#fff5f5] text-[#d64545] font-medium text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728" />
              </svg>
              End Interview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
