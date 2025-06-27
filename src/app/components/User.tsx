'use client'
import AuthBased from "./AuthBased";
import Typewriter from "./Typewriter";

export default function User(){
   return(
        <div className="w-full bg-gradient-to-br from-[#f7f3ef] to-[#fdfcfb] py-20 px-6 md:px-16 pt-25" >
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-6">
                    Why <span className="text-[#9e6a4f] italic">use it?</span>
                </h2>

                <p className="text-lg md:text-xl text-[#3f2f2b] leading-relaxed max-w-5xl mx-auto mb-5">
                    In today’s fast-moving world, <span className="text-[#9e6a4f] font-semibold">how we travel</span> truly matters. 
                    <span className="font-extrabold text-[#2f1e1b]"> UniRide</span> isn’t just about reaching your destination — 
                    it’s about <em className="italic">connecting people</em>, <em className="italic">sharing stories</em>, and <em className="italic">making every journey meaningful</em>.
                    <br /><br />
                    Whether you’re a student or a working professional, UniRide lets you <span className="text-[#b4693e] font-medium">split costs</span>, 
                    <span className="text-[#b4693e] font-medium"> reduce emissions</span>, and <span className="text-[#b4693e] font-medium">build connections</span> — all in a safe, beautiful, and sustainable way.
                    <br /><br />
                    <strong className="text-[#9e6a4f]">Choose UniRide</strong> — where every mile brings people closer.
                </p>
                <Typewriter />
            </div>
            <div className="mt-10">
                <AuthBased/>
            </div>
        </div>
    )
}