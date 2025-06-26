'use client'

import BookRide from "../components/BookRide";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FFF8F0] via-[#FAECEB] to-[#F6F1ED] text-[#2f1e1b]">
      <NavBar />

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mt-10 mb-6 text-center leading-tight animate-fade-in-up">
            Book Your Ride
          </h1>

          <p className="text-lg text-[#7b3f2c] mb-10 text-center animate-fade-in-up delay-100">
            Find rides near your location and connect with trusted drivers.
          </p>

          <div className="bg-white bg-opacity-90 rounded-3xl shadow-xl p-8 animate-fade-in-up delay-200">
            <BookRide />
          </div>
        </div>
      </main>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
