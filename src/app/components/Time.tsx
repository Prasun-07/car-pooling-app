'use client'
import { useState } from "react";

export default function Time() {
    const [time, setTime] = useState("");
    return(
        <div>
            <label className="block text-sm text-gray-700 mb-1">Starting Time</label>
            <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 text-black bg-white"
            />
        </div>
    )
}