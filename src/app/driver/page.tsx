import NavBar from "../components/NavBar";
import Search from "../components/Search";
import Map from "../components/Map";

export default function Page(){
    return(
        <div>
            <NavBar/>
            <h1 className="text-5xl p-5">Post A Ride</h1>
            <div className="grid grid-cols-3">
                <div className="col-span-3 p-5">
                    <Search/>
                </div>
                {/*<div className="col-span-2 p-5">
                    <Map/>
                </div>*/}
            </div>
        </div>
    )
}