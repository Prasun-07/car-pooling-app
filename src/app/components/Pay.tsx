type PayProps = {
  value: string;
  setValue: (value: string) => void;
};
export default function Pay({ value, setValue }: PayProps) {
    return(
        <div>
            <label className="block text-sm text-gray-700 mb-1">Rs.</label>
            <input
            type="text"
            placeholder="Amount per passenger has to pay"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 text-black bg-white"
            />
        </div>
    )
}