'use client';

import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { FaHome, FaInfoCircle, FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';

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
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl 
                    rounded-2xl bg-white/40 backdrop-blur-md shadow-lg border border-white/20 px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-[#7b3f2c] tracking-wide">UniRide</div>

        <div className="hidden md:flex gap-6 items-center">
          
          <Link
            href="/"
            className="relative flex items-center gap-2 px-3 py-1 rounded-lg text-[#2f1e1b] hover:text-[#9e533c] hover:bg-[#fbeee6]
                       transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0
                       hover:after:w-full after:h-[2px] after:bg-[#9e533c] after:transition-all after:duration-300"
          >
            <FaHome /> Home
          </Link>
          
          <a
            href="#"
            className="relative flex items-center gap-2 px-3 py-1 rounded-lg text-[#2f1e1b] hover:text-[#9e533c] hover:bg-[#fbeee6]
                       transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0
                       hover:after:w-full after:h-[2px] after:bg-[#9e533c] after:transition-all after:duration-300"
          >
            <FaInfoCircle /> About
          </a>
          <a
            href="#"
            className="relative flex items-center gap-2 px-3 py-1 rounded-lg text-[#2f1e1b] hover:text-[#9e533c] hover:bg-[#fbeee6]
                       transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0
                       hover:after:w-full after:h-[2px] after:bg-[#9e533c] after:transition-all after:duration-300"
          >
            <FaPhoneAlt /> Contact
          </a>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-700">
          {dateTime && (
            <div className="hidden sm:block text-right leading-tight font-medium text-[#2f1e1b]">
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
