import NavBar from "./components/NavBar";
import Location from "./components/Location";
import User from "./components/User";
import Footer from "./components/Footer";
import WorkFlow from "./components/WorkFlow";
import CartoonBackground from "./components/CartoonBackground";

export default function Home() {
  const timelineData = [
    {
      title: "Create An Account",
      content: <p>Sign In / Sign Up with your credentials, to start with UniRide.</p>,
    },
    {
      title: "Payment",
      content: <p>Set up payment option.</p>
    },
    {
      title: "Be A Driver",
      content: <p>Post a Ride - Mark Source and Destination, Car Type, Maximum occupants, & Payment per person.</p>,
    },
    {
      title: "Or Be A Passenger",
      content: <p>Book a ride from the ones posted.</p>,
    },
    {
      title: "Payment Gateway",
      content: <p>Complete the required payment through the portal.</p>,
    }
  ];

  return (
    <div>
      <NavBar/>
      <Location/>
      <div className="grid grid-cols-2">
        <User/>
        <CartoonBackground/>
      </div>
      <WorkFlow data={timelineData}/>
      <Footer/>
    </div>
  );
}
