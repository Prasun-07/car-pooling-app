'use client'
import AuthBased from "./AuthBased";

export default function User(){
   return(
        <div className="w-full h-[40rem] bg-green-600" >
            <div className="p-7"><p className="text-5xl p-3 pl-0">Why do we use it?</p>
                <p className="text-2xl">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
                have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className="p-7">
                <AuthBased/>
            </div>
        </div>
    )
}