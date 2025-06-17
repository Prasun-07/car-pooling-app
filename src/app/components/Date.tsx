'use client'
import { useState } from 'react';

export default function Date() {
    const [date, setDate] = useState("");
    return(
        <div>
            <label className="block text-sm text-gray-700 mb-1">Date</label>
            <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 text-black bg-white"
            />
        </div>
    )
}