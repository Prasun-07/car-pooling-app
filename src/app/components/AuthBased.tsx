import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import Page from "../passenger/page";

export default function AuthBased(){
    const router = useRouter();
    return(
        <div>
            <SignedIn>
                <div className="w-full flex evenly">
                    <button  onClick={() => router.push('../driver')} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 
                                            border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Post A Ride
                    </button>
                    <button onClick={() => router.push('../passenger')} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 
                                            border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Find A Ride
                    </button>
                </div>
            </SignedIn>
            <SignedOut>
                <SignInButton>
                    <button type="button" onClick={() => router.push('../sign-in/[[...sign-in]]/page')} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 
                                        border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        Sign In
                    </button>
                </SignInButton>
            </SignedOut>
        </div>
    )
}