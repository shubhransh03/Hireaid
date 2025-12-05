// src/components/interview_screen/Topbar.tsx
import React from "react";

type Props = {
  userName?: string;
  initials?: string;
  onNotifications?: () => void;
  onProfile?: () => void;
};

export default function Topbar({
  userName = "John",
  initials = "JD",
  onNotifications,
  onProfile,
}: Props) {
  return (
    <div className="w-full bg-white border-b">
      <div className="max-w-[1150px] mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="text-lg font-semibold">Good Morning, {userName}</div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onNotifications}
            aria-label="notifications"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            {/* bell icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118.6 14.2V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.2c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z" />
            </svg>
          </button>

          <div
            onClick={onProfile}
            role="button"
            tabIndex={0}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="flex flex-col text-right">
              <span className="text-sm text-gray-500">John Doe</span>
              <span className="text-xs text-gray-400">Interviewer</span>
            </div>

            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
              {initials}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
