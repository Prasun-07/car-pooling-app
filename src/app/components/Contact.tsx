type ContactProps = {
  value: string;
  setValue: (value: string) => void;
};
export default function Contact({ value, setValue }: ContactProps) {
    return(
        <div>
            <label className="block text-sm text-gray-700 mb-1">Contact</label>
            <input
            type="text"
            placeholder="Enter your contact details"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 text-black bg-white"
            />
        </div>
    )
}