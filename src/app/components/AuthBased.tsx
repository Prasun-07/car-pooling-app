import { SignedIn, SignedOut, SignIn, SignInButton } from "@clerk/nextjs"
import Page from "../sign-in/[[...sign-in]]/page"
import { useRouter } from "next/navigation"
export default function AuthBased(){
    const router = useRouter();
    return(
        <div>
            <SignedIn>
                <div className="w-full flex evenly">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 
                                            border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Be A Driver
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 
                                            border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Be A Passenger
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