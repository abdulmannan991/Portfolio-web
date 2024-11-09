"use client"
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Skills from "./Components/Skills";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
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
  return (
    <div className=" "> 

      <div className=" p-4  pt-12  flex justify-center md:hidden">

      <Image className="bg-cover rounded-full  w-52 h-52  border-4 border-transparent hover:border-teal-300 
      transition-all duration-300  " src="/mee.jpg" alt={"profile"} width={52} height={52}   unoptimized  />
      </div>

      <div className="flex flex-col items-center p-8 w-full md:flex-row md:items-start mt-14">
        <div className="flex-1 md:mr-4">
          <h1 id="Home" className="text-2xl md:mr-4 mb-4 md:mb-0 #Home">Hello, its</h1>
          <span className="font-semibold w-full text-2xl hover:text-teal-300 transition-all duration-300 hover:cursor-pointer">Abdul Mannan Fazlani</span>

          <div>
            <h1 className="flex gap-2 w-full ">
              <span className="text-white">I am a</span>
              <span className="text-teal-300">
                <Typewriter 
                  options={{
                    strings: ['Flutter App Developer', 'Web Developer', 'TypeScript Developer', 'C Developer', 'C++ Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>
            </div>
            <h4 className="text-xs pt-4 text-teal-300 max-w-4xl md:text-sm ml-2">My short intro:</h4>
          <div className="text-xs max-w-4xl text-white p-2 ">
            <p className="text-sm md:text-sm lg:text-base leading-relaxed">
              I specialize in designing and developing user-friendly, visually appealing web applications that enhance user experience. With a strong focus on intuitive interfaces and responsive designs, 
              I aim to create solutions that not only meet the needs of users but also engage and captivate them. My expertise spans front-end and back-end development, ensuring seamless functionality and aesthetic appeal in every project I undertake.
            </p>
          </div>
        </div>

        <div className="md:flex-shrink-0 ">
          <Image 
            className="hidden md:block bg-cover rounded-full w-80 h-80 border-4 border-transparent hover:border-teal-300 transition-all duration-300"
            src="/mee.jpg" 
            alt={"profile"} 
            width={80} 
            height={80} 
            unoptimized 
          />
        </div>
      </div>

      <div className="flex space-x-4 mb-8 ml-10 md:-mt-10">
      
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

      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:ml-8  mb-6 p-4">
  <a

    href="/my-cv.pdf"
    download="YourCV.pdf"
    className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white bg-gray-800 rounded-md transition-all duration-300 hover:bg-teal-300 hover:scale-105 w-36 sm:w-auto text-center"
  >
    Download CV
  </a>
  
  <button id="Contact" className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white bg-gray-800 rounded-md transition-all duration-300 hover:bg-teal-300 hover:scale-105 w-36 sm:w-auto">
    Contact
  </button>
</div>



      <Skills/>
      <br /><br />
      <Services/>
<Projects/>
<Contact/>
<Footer/>
      </div>
  );
}
// Completed
