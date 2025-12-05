import React, { useRef, useState } from "react";
import { FiPaperclip, FiUpload, FiSend } from "react-icons/fi";

type Props = {
  text: string;
  setText: (v: string) => void;
  send: () => void;
  onAttachFile?: (file: File) => void;
  onUploadImage?: (file: File) => void;
};

export default function ChatInput({
  text,
  setText,
  send,
  onAttachFile,
  onUploadImage,
}: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    cb?: (f: File) => void
  ) => {
    const f = e.target.files?.[0];
    if (f) {
      setSelectedName(f.name);
      cb?.(f);
    }
    e.currentTarget.value = "";
  };

  return (
    <>
      {/* Hidden Pickers */}
      <input
        ref={fileRef}
        type="file"
        className="hidden"
        onChange={(e) => handleFileChange(e, onAttachFile)}
      />
      <input
        ref={imageRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFileChange(e, onUploadImage)}
      />

      {/* Container */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm">
        {/* Input Field */}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm placeholder-slate-400 focus:outline-none"
          placeholder="Ask anything..."
        />

        {/* Buttons Row */}
        <div className="mt-4 flex items-center justify-between">
          {/* Left Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => fileRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-sm"
            >
              <FiPaperclip className="w-4 h-4" />
              Attach File
            </button>

            <button
              onClick={() => imageRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-700 border border-sky-100 text-sm"
            >
              <FiUpload className="w-4 h-4" />
              Upload Image
            </button>
          </div>

          {/* Send Button */}
          <button
            onClick={send}
            className="w-10 h-10 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-md hover:bg-sky-700 transition"
          >
            <FiSend className="w-5 h-5" />
          </button>
        </div>

        {/* Optional File Name */}
        {selectedName && (
          <div className="mt-3 text-xs text-slate-500">
            Selected: {selectedName}
          </div>
        )}
      </div>
    </>
  );
}
