
type TimeProps = {
  value: string;
  setValue: (value: string) => void;
};

export default function Time({ value, setValue }: TimeProps) {
    return(
        <div>
            <label className="block text-sm text-gray-700 mb-1">Starting Time</label>
            <input
            type="time"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 text-black bg-white"
            />
        </div>
    )
}