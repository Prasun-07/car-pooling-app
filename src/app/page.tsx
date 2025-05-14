import NavBar from "./components/NavBar";
import Location from "./components/Location";
import CarImage from "./components/CarImage";
import User from "./components/User";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Location/>
      <CarImage/>
      <User/>
      <Footer/>
    </div>
  );
}
