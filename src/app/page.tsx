import NavBar from "./components/NavBar";
import Location from "./components/Location";
import CarImage from "./components/CarImage";
import User from "./components/User";
import Footer from "./components/Footer";
import WorkFlow from "./components/WorkFlow";


export default function Home() {
  
  return (
    <div>
      <NavBar/>
      <Location/>
      <div className="grid grid-cols-2">
        <User/>
        <CarImage/>
      </div>
      <WorkFlow/>
      <Footer/>
    </div>
  );
}
