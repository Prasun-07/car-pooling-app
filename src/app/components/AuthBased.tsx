import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import Page from "../passenger/page";

export default function AuthBased(){
    const router = useRouter();
    return(
        <div className="w-full text-center mt-10">
            <SignedIn>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <button  onClick={() => router.push('../driver')} className="bg-[#7b3f2c] hover:bg-[#9e533c] 
                                                                    transition-all text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg">
                            Post A Ride
                    </button>
                    <button onClick={() => router.push('../passenger')} className="bg-[#7b3f2c] hover:bg-[#9e533c] 
                                                                    transition-all text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg">
                            Find A Ride
                    </button>
                </div>
            </SignedIn>
            <SignedOut>
                <SignInButton>
                    <button type="button" onClick={() => router.push('../sign-in/[[...sign-in]]/page')} className="bg-[#9e533c] hover:bg-[#7b3f2c] 
                                                                    transition-all text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-lg mt-6">
                        Sign In
                    </button>
                </SignInButton>
            </SignedOut>
        </div>
    )
}