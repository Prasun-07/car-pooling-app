
type DateProps = {
  value: string;
  setValue: (value: string) => void;
};

export default function Date({ value, setValue }: DateProps) {
    return(
        <div>
            <label className="block text-sm text-gray-700 mb-1">Date</label>
            <input
            type="date"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 text-black bg-white"
            />
        </div>
    )
}