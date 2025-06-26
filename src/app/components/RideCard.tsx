import { MdLocationOn, MdOutlineDateRange, MdAccessTime } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaMoneyBillWave } from 'react-icons/fa';


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
    <div className="bg-[#fff8f0] shadow-lg rounded-3xl p-6 border border-[#faeceb] transition transform hover:scale-[1.01] hover:shadow-xl duration-300 animate-fade-in-up">
      <div className="flex flex-col gap-3 text-[#2f1e1b] font-medium text-lg">
        <div className="flex items-center gap-2">
          <MdLocationOn className="text-[#7b3f2c]" />
          <span><strong className="text-[#7b3f2c]">From:</strong> {ride.start}</span>
        </div>

        <div className="flex items-center gap-2">
          <MdLocationOn className="text-[#7b3f2c] rotate-180" />
          <span><strong className="text-[#7b3f2c]">To:</strong> {ride.end}</span>
        </div>

        <div className="flex items-center gap-2">
          <MdOutlineDateRange className="text-[#7b3f2c]" />
          <span><strong className="text-[#7b3f2c]">Date:</strong> {ride.date}</span>
        </div>

        <div className="flex items-center gap-2">
          <MdAccessTime className="text-[#7b3f2c]" />
          <span><strong className="text-[#7b3f2c]">Time:</strong> {ride.time}</span>
        </div>

        <div className="flex items-center gap-2">
          <BsTelephoneFill className="text-[#7b3f2c]" />
          <span><strong className="text-[#7b3f2c]">Contact:</strong> {ride.contact}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMoneyBillWave className="text-[#7b3f2c]" />
          <span><strong className="text-[#7b3f2c]">Pay:</strong> ₹{ride.pay}</span>
        </div>
      </div>
    </div>
  );
}
