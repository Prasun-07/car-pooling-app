'use client'
import AuthBased from "./AuthBased";

export default function User(){
   return(
        <div className="w-full bg-gradient-to-br from-[#f7f3ef] to-[#fdfcfb] py-20 px-6 md:px-16" >
            <div className="max-w-5xl mx-auto"><h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug mb-6">
          Why <span className="text-[#9e6a4f] italic">do we use it?</span>
        </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className="mt-10">
                <AuthBased/>
            </div>
        </div>
    )
}