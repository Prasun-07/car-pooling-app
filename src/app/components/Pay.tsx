export default function Pay() {
    return(
        <div>
            <label className="block text-sm text-gray-700 mb-1">Rs.</label>
            <input
            type="text"
            placeholder="Amount per passenger has to pay"
            className="w-full p-2 rounded border border-gray-300 text-black bg-white"
            />
        </div>
    )
}