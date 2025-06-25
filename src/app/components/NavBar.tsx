'use client';

import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";

export default function NavBar() {
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = dateTime?.toLocaleDateString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const formattedTime = dateTime?.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg shadow-sm border-b border-gray-200 px-6 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-3xl font-bold text-[#7b3f2c]">UniRide</div>

        <div className="hidden md:flex gap-8">
          {["Home", "About", "Contact"].map((text, idx) => (
            <a key={idx} href="#" className="text-lg text-gray-800 hover:text-[#00BCD4] transition">
              {text}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-700">
          {/* Only render date/time when mounted on client */}
          {dateTime && (
            <div className="hidden sm:block text-right leading-tight">
              <div>{formattedDate}</div>
              <div>{formattedTime}</div>
            </div>
          )}
          <UserButton />
        </div>
      </div>
    </div>
  );
}
