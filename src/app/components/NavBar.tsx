import { UserButton } from "@clerk/nextjs"


export default function NavBar(){
     
    const header = [
        {
            id:1,
            name:'Home',
            path:'#'
        },
        {
            id:2,
            name:'About',
            path:''
        },
        {
            id:3,
            name:'Contact',
            path:''
        }

    ]
    return(
        <div className="p-5 w-full flex flex-wrap items-center">
            <div className="text-5xl basis-2/5">UniRide</div>
            <div className="basis-3/5 flex justify-evenly">
                {header.map((item)=>(
                        <a key={item.id} href={item.path} className="text-2xl hover:text-[#00BCD4]">{item.name}</a>
                ))}
                <UserButton/>
            </div>
        </div>
    )
}