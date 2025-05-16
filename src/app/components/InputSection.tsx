type InputSectionProps = {                                          //defines to typescript that type is a valid prop
        type : string;
};
export default function InputSection({ type }: InputSectionProps){
    
    return (
        <div className="bg-amber-50 p-5 rounded-lg flex items-center gap-4 pt-5 mt-3">
            <input type='text' placeholder={type == "start" ? "Starting Location" : "Destination Location"} className="bg-transparent w-full outline-none text-black"/>
        </div>
    )
}