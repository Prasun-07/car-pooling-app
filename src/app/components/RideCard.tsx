
type Ride = {
  id: string;
  start: string;
  end: string;
  date: string;
  time: string;
  pay: number;
};

export default function RideCard({ ride }: { ride: Ride }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
      <h3 className="text-xl font-semibold text-black">{ride.start} → {ride.end}</h3>
      <p className="text-gray-700">Date: {ride.date}</p>
      <p className="text-gray-700">Time: {ride.time}</p>
      <p className="text-green-700 font-bold">Pay: ₹{ride.pay}</p>
      <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
        Book Ride
      </button>
    </div>
  );
}
