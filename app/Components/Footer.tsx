import Link from "next/link";

export default function Footer(){
   
    const Linkdein = ()=>{
        window.open("https://www.linkedin.com/in/abdul-mannan-47b274293/","_blank","noopener,noreferrer");
        }
        
        const Github = ()=>{
          window.open("https://github.com/abdulmannan991","_blank","noopener,noreferrer");
          }
    
          const Gmail = ()=>{
            window.open("mailto:mannanfazlani77@gmail.com","_blank","noopener,noreferrer");
            }
    
            const Insta = ()=>{
              window.open("https://www.instagram.com/abdul__.mannan?igsh=MTBtM3djaXl6enc0Mg==","_blank","noopener,noreferrer");
              }
    return(
        <div>

<footer className="bg-gray-800 text-white py-8 px-4">
  <div className="max-w-7xl mx-auto flex flex-col items-center sm:flex-row sm:justify-between space-y-4 sm:space-y-0">
    <div className="text-teal-300 font-bold text-2xl sm:text-xl sm:mr-2 md:text-2xl md:mr-0">
      Abdul Mannan Fazlani
    </div>

    <div className="flex space-x-6 text-sm sm:text-base sm:mr-4">
      <Link href="#Home" className="hover:text-teal-300 hover:border-teal-900 hover:border-2 hover:rounded-xl ">Home</Link>
      <Link href="#Skills" className="hover:text-teal-300 hover:border-teal-900 hover:border-2 hover:rounded-xl">Skills</Link>
      <Link href="#Services" className="hover:text-teal-300 hover:border-teal-900 hover:border-2 hover:rounded-xl">Services</Link>
      <Link href="#Projects" className="hover:text-teal-300 hover:border-teal-900 hover:border-2 hover:rounded-xl">Projects</Link>
    </div>

    <div className="flex space-x-4  ">
    <button onClick={Linkdein} className="flex items-center justify-center w-12 h-12  border-2 border-teal-300 rounded-full hover:bg-teal-300 transition-all duration-300">
  <img src="/linkedin.png" alt="linkdein" className="h-6 w-6"/>
</button>

<button onClick={Github} className="flex items-center justify-center w-12 h-12  border-2 border-teal-300 rounded-full hover:bg-teal-300 transition-all duration-300">
  <img src="/github.png" alt="github" className="h-6 w-6"/>
</button>


<button onClick={Gmail} className= "flex items-center justify-center w-12 h-12  border-2 border-teal-300 rounded-full hover:bg-teal-300 transition-all duration-300">
  <img src="/email.png" alt="mail"  className="h-6 w-6"/>
</button>


<button  onClick={Insta} className="flex items-center justify-center w-12 h-12  border-2 border-teal-300 rounded-full hover:bg-teal-300 transition-all duration-300">
  <img src="/instagram.png" alt="insta" className="h-6 w-6 "  />
</button>


    </div>
  </div>

  <div className="text-center text-gray-400 text-xs mt-6 ">
    © 2024 Abdul Mannan Fazlani. All Rights Reserved.
  </div>
</footer>

                 </div>
    )
}