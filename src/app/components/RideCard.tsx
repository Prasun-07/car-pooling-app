type RideCardProps = {
  ride: {
    start: string;
    end: string;
    date: string;
    time: string;
    pay: number;
    contact: string;
  };
};

export default function RideCard({ ride }: RideCardProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white text-black">
      <p><strong>From:</strong> {ride.start}</p>
      <p><strong>To:</strong> {ride.end}</p>
      <p><strong>Date:</strong> {ride.date}</p>
      <p><strong>Time:</strong> {ride.time}</p>
      <p><strong>Contact No. :</strong> {ride.contact}</p>
      <p><strong>Pay:</strong> ₹{ride.pay}</p>
    </div>
  );
}
