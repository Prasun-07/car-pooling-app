import BookRide from "../components/BookRide";
import NavBar from "../components/NavBar";

export default function Page(){
    return(
        <div className="min-h-screen bg-[#fbeee6] text-[#2f1e1b]">
            <NavBar />

            <div className="max-w-5xl mx-auto px-6 py-12 ">
                <h1 className="text-5xl font-bold mb-6 leading-tight text-center ">
                    Book Your Ride
                </h1>
                <p className="text-lg text-[#7b3f2c] mb-12 text-center">
                    Find rides near your location and connect with trusted drivers.
                </p>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <BookRide />
                </div>
            </div>
        </div>
    )
}