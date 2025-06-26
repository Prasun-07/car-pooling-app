type TimeProps = {
  value: string;
  setValue: (value: string) => void;
};

export default function TimeInput({ value, setValue }: TimeProps) {
    return(
        <div className="space-y-2">
            <label className="block text-base font-medium text-[#3e3e3e]">Starting Time</label>
            <input
            type="time"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white 
                    text-black text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-[#7b3f2c] transition-all duration-200"
            />
        </div>
    )
}