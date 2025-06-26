'use client';
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-gradient-to-br from-[#f9f0e8] to-[#fff9f5] text-gray-800 pt-16 px-6 md:px-20 pb-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start w-full gap-10">
        <div className="basis-1/4">
          <h2 className="text-xl font-bold text-[#9e6a4f] mb-4">About the Project</h2>
          <p className="text-sm leading-relaxed text-gray-700">
            UniRide is your trusted ride-sharing platform for campus and nearby areas.
            Post or find rides effortlessly and travel smart with a community-first approach.
          </p>
        </div>

        <div className="basis-1/4">
          <h2 className="text-xl font-bold text-[#9e6a4f] mb-4">Features</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="hover:text-[#9e6a4f] transition cursor-pointer">Ride Posting & Booking</li>
            <li className="hover:text-[#9e6a4f] transition cursor-pointer">Live Route Sync</li>
            <li className="hover:text-[#9e6a4f] transition cursor-pointer">Secure Payment</li>
            <li className="hover:text-[#9e6a4f] transition cursor-pointer">Driver Ratings</li>
          </ul>
        </div>

        <div className="basis-1/4">
          <h2 className="text-xl font-bold text-[#9e6a4f] mb-4">Stay Updated</h2>
          <p className="text-sm text-gray-700 mb-3">Subscribe to our newsletter</p>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-auto rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9e6a4f]"
            />
            <button
              type="submit"
              className="bg-[#9e6a4f] text-white px-5 py-2 rounded-md hover:bg-[#87573b] transition cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="basis-1/4">
          <h2 className="text-xl font-bold text-[#9e6a4f] mb-4">Contact</h2>
          <p className="text-sm mb-1">
            Email: <a href="mailto:support@uniride.app" className="text-[#1d4ed8] hover:underline cursor-pointer">support@uniride.app</a>
          </p>
          <p className="text-sm mb-4">
            Phone: <a href="tel:+919876543210" className="text-[#1d4ed8] hover:underline cursor-pointer">+91 98765 43210</a>
          </p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="text-[#9e6a4f] hover:text-[#6f4530] transition cursor-pointer"><FaFacebookF /></a>
            <a href="#" className="text-[#9e6a4f] hover:text-[#6f4530] transition cursor-pointer"><FaTwitter /></a>
            <a href="#" className="text-[#9e6a4f] hover:text-[#6f4530] transition cursor-pointer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e3d5c9] mt-10 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} UniRide. All rights reserved.
      </div>

      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#9e6a4f] text-white p-3 rounded-full shadow-md hover:bg-[#7e543a] transition z-50 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
