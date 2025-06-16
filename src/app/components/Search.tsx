'use client'

import InputSection from "./InputSection";

export default function Search() {
    
    return (
        <div className="">
            <h1 className="text-4xl p-5">Post A Ride</h1>
            <InputSection type="start" />
            <InputSection type="end"/>
            <button className="w-full mt-5 bg-white text-black rounded-lg p-3">Post Ride</button>
        </div>
    );
}