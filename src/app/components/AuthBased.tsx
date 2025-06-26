import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import Page from "../passenger/page";

export default function AuthBased(){
    const router = useRouter();
    return(
        <div className="w-full text-center mt-10">
            <SignedIn>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <button  onClick={() => router.push('../driver')} 
                        className="px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-[#b4693e] to-[#9e6a4f] 
                                shadow-[0_6px_0_0_#7b3f2c] 
                                hover:-translate-y-1 hover:shadow-[0_8px_0_0_#7b3f2c] 
                                active:translate-y-[6px] active:shadow-none 
                                transition-all duration-150 ease-in-out flex items-center gap-3">                                                                                                                                               
                            Post A Ride
                    </button>
                    <button onClick={() => router.push('../passenger')} 
                        className="px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-[#b4693e] to-[#9e6a4f] 
                                shadow-[0_6px_0_0_#7b3f2c] 
                                hover:-translate-y-1 hover:shadow-[0_8px_0_0_#7b3f2c] 
                                active:translate-y-[6px] active:shadow-none 
                                transition-all duration-150 ease-in-out flex items-center gap-3">   
                            Find A Ride
                    </button>
                </div>
            </SignedIn>
            <SignedOut>
                <SignInButton>
                    <button type="button" onClick={() => router.push('../sign-in/[[...sign-in]]/page')} 
                        className="px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-[#b4693e] to-[#9e6a4f] 
                                shadow-[0_6px_0_0_#7b3f2c] 
                                hover:-translate-y-1 hover:shadow-[0_8px_0_0_#7b3f2c] 
                                active:translate-y-[6px] active:shadow-none 
                                transition-all duration-150 ease-in-out flex items-center gap-3">   
                        Sign In
                    </button>
                </SignInButton>
            </SignedOut>
        </div>
    )
}