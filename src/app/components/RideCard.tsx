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
    <div className="bg-[#fff8f0] border border-[#faeceb] rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.015] transition-all duration-300 ease-in-out animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[#2f1e1b] text-lg md:text-xl font-medium">
        <div className="flex items-center gap-3">
          <MdLocationOn className="text-[#7b3f2c] text-2xl" />
          <span>
            <strong className="text-[#7b3f2c]">From:</strong> {ride.start}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MdLocationOn className="text-[#7b3f2c] text-2xl rotate-180" />
          <span>
            <strong className="text-[#7b3f2c]">To:</strong> {ride.end}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MdOutlineDateRange className="text-[#7b3f2c] text-2xl" />
          <span>
            <strong className="text-[#7b3f2c]">Date:</strong> {ride.date}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MdAccessTime className="text-[#7b3f2c] text-2xl" />
          <span>
            <strong className="text-[#7b3f2c]">Time:</strong> {ride.time}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <BsTelephoneFill className="text-[#7b3f2c] text-xl" />
          <span>
            <strong className="text-[#7b3f2c]">Contact:</strong> {ride.contact}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaMoneyBillWave className="text-[#7b3f2c] text-2xl" />
          <span>
            <strong className="text-[#7b3f2c]">Pay:</strong> ₹{ride.pay}
          </span>
        </div>
      </div>
    </div>
  );
}
