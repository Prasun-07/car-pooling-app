'use client'
import AuthBased from "./AuthBased";

export default function User(){
   return(
        <div className="w-full bg-gradient-to-br from-[#f7f3ef] to-[#fdfcfb] py-20 px-6 md:px-16 pt-25" >
            <div className="max-w-5xl mx-auto"><h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-6">
                Why <span className="text-[#9e6a4f] italic">do we use it?</span>
                </h2>
                <p className="text-lg md:text-xl text-[#3f2f2b] leading-relaxed max-w-5xl mx-auto mb-12">
                    In today’s fast-moving world, <span className="text-[#9e6a4f] font-semibold">how we choose to travel</span> matters more than ever. 
                    <span className="font-extrabold text-[#2f1e1b]"> UniRide</span> isn’t just a car-pooling platform — it’s a beautiful way to 
                    <em className="italic"> connect people</em>, <em className="italic">share moments</em>, and <em className="italic">make a difference</em>. 
                    Whether you're a student heading to class or a professional commuting to work, why travel alone when you can split costs, reduce emissions, and build friendships?
                    <br /><br />
                    With its clean design, trusted profiles, and live ride matching, UniRide makes your journey 
                    <span className="text-[#b4693e] font-medium"> safer</span>, <span className="text-[#b4693e] font-medium">smarter</span>, and 
                    <span className="text-[#b4693e] font-medium"> more sustainable</span>. Together, we create a future where travel feels 
                    <strong className="text-[#9e6a4f]"> warmer, greener, and more human</strong>.
                    <br /><br />
                    <strong className="text-[#9e6a4f]">Choose UniRide</strong> — because the journey matters just as much as the destination.
                </p>
            </div>
            <div className="mt-10">
                <AuthBased/>
            </div>
        </div>
    )
}