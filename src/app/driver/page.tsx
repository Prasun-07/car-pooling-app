import NavBar from "../components/NavBar";
import Search from "../components/Search";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff7f3] to-[#fdf4f2]">
      <NavBar />

      <div className="mt-0 pt-25 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#7b3f2c] leading-tight">
            Post <span className="italic font-semibold text-[#b4693e]">a Ride</span>
          </h1>
        <p className="mt-2 text-md md:text-lg text-gray-600">
          Share your ride with others, save money, and make travel more sustainable.
        </p>
      </div>

      <div className=" flex justify-center">
        <div className="w-full max-w-2xl px-4">
          <Search />
        </div>
      </div>
    </div>
  );
}
