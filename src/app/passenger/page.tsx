'use client';

import BookRide from "../components/BookRide";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FFF8F0] via-[#FAECEB] to-[#F6F1ED] text-[#2f1e1b]">
      <NavBar />

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto px-6 pt-30 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#7b3f2c] leading-tight">
            Book <span className="italic font-semibold text-[#b4693e]">a Ride</span>
          </h1>
          <p className="mt-3 text-lg md:text-xl text-gray-700">
            Discover convenient, affordable travel options by booking rides with drivers going your way.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-3xl px-4">
            <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 animate-fade-in-up">
              <BookRide />
            </div>
          </div>
        </div>
      </main>

      <div className="w-full mt-16">
        <Footer />
      </div>
    </div>
  );
}
