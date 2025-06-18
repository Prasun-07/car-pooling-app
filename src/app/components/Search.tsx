'use client';

import { useState } from "react";
import Date from "./Date";
import InputSection from "./InputSection";
import Pay from "./Pay";
import Time from "./Time";
import { supabase } from "../../../lib/supabaseClient";

export default function Search() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pay, setPay] = useState("");

  const [popup, setPopup] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handlePostRide = async () => {
    if (!start || !end || !date || !time || !pay) {
      setPopup({ type: "error", message: "Please fill in all fields." });
      return;
    }

    const { error } = await supabase.from("Car Pooling Driver's Data").insert([
      {
        start,
        end,
        date,
        time,
        pay: parseFloat(pay),
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error.message);
      setPopup({ type: "error", message: "Failed to post ride. Please try again." });
    } else {
      setPopup({ type: "success", message: "Ride posted successfully!" });
      setStart(""); setEnd(""); setDate(""); setTime(""); setPay("");
    }

    setTimeout(() => setPopup(null), 3000);
  };

  return (
    <div className="relative">
      <InputSection type="start" input={start} setInput={setStart} />
      <InputSection type="end" input={end} setInput={setEnd} />
      <Time value={time} setValue={setTime} />
      <Date value={date} setValue={setDate} />
      <Pay value={pay} setValue={setPay} />
      <button
        onClick={handlePostRide}
        className="w-full mt-5 bg-white text-black rounded-lg p-3"
      >
        Post Ride
      </button>

      {popup && (
        <div
          className={`absolute top-10 left-1/2 -translate-x-1/2 px-6 py-4 rounded-lg shadow-md z-50 border
          ${popup.type === "success"
              ? "bg-green-100 border-green-400 text-green-700"
              : "bg-red-100 border-red-400 text-red-700"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold">{popup.message}</p>
            <button
              className="font-bold"
              onClick={() => setPopup(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
