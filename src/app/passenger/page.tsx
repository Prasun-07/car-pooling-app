import BookRide from "../components/BookRide";
import NavBar from "../components/NavBar";

export default function Page(){
    return(
        <div>
            <NavBar/>
            <h1 className="text-5xl p-5">Book A Ride</h1>
            <BookRide />
        </div>
    )
}