'use client'

import Date from "./Date";
import InputSection from "./InputSection";
import Pay from "./Pay";
import Time from "./Time";

export default function Search() {
    
    return (
        <div className="">
            <InputSection type="start" />
            <InputSection type="end"/>
            <Time />
            <Date />
            <Pay />
            <button className="w-full mt-5 bg-white text-black rounded-lg p-3">Post Ride</button>
        </div>
    );
}