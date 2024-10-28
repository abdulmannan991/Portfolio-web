"use client"
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
const [menuopen , setmenuopen] = useState(false);
    return (

    <div className="bg-transparent fixed w-full">
        
        <ul className="hidden md:flex justify-between  mr-4 p-4 mt-4 max-w-[850px]:hidden min-w-[851px]:flex ">
    <li className="hover:text-teal-300 ml-16 hover:cursor-pointer mx-auto ">My portfolio</li>
    <div className="flex space-x-4">
        <li className="hover:text-teal-300"><Link href={"#Home"}>Home</Link></li>
        <li className="hover:text-teal-300"><Link href={"#About"}>About</Link></li>
        <li className="hover:text-teal-300"><Link href={"#Contact"}>Contact</Link></li>
        
    </div>
</ul>

<h1>

</h1>
    
    {/* Mobile menu  */}
<button className="md:hidden p-4" onClick={()=>setmenuopen(!menuopen)}>
☰
</button>

<ul className={`bg-transparent h-36 w-6/12 rounded-md bg-teal-300 bg-opacity-20 p-4 flex flex-col space-y-2 md:hidden ${menuopen ? "block" : "hidden" }`}>

<li className="relative group"> 
<Link className="hover:text-teal-300 transition-colors duration-300" href={"#Home"}>Home
<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-300 transition-all duration-300 group-hover:w-12"></span>
</Link>
</li>
<li className="relative group"> 
<Link className="hover:text-teal-300 transition-colors duration-300" href={"#About"}>About
<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-300 transition-all duration-300 group-hover:w-12"></span>
</Link>
</li>

<li className="relative group"> 
<Link className="hover:text-teal-300 transition-colors duration-300" href={"#Contact"}>Contact
<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-300 transition-all duration-300 group-hover:w-16"></span>
</Link>
</li>
</ul>

    </div>
    

  );
}
