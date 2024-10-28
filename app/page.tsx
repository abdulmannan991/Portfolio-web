"use client"
import Image from "next/image";
import Typewriter from 'typewriter-effect';

export default function Home() {
  
  return (
    <div className=" "> 

      <div className=" mx-auto p-4  pt-12  flex justify-center items-center ">
    
      <Image className="bg-cover rounded-full  w-52 h-52  border-4 border-transparent hover:border-teal-300 transition-all duration-300 " src="/mee.jpg" alt={"profile"} width={52} height={52}   unoptimized  />
      </div>

      <div className="font-semibold mx-auto p-8  w-full  ">
      <h1 className="text-2xl">Hello, it's</h1>
      
      
      <span className="font-semibold mx-auto w-full text-2xl hover:text-teal-300 transition-all duration-300 hover:cursor-pointer ">Abdul Mannan Fazlani</span>
      
      <div>
        <h1 className="flex gap-2 mx-auto w-full ">
        <span className="text-white">I am a</span>
        <span className="text-teal-300">
<Typewriter 
  options={{
    strings: ['Flutter App Developer', 'Web Developer' ,'TypeScript Developer' , 'C Developer' , 'C++ Developer' ],
    autoStart: true,
    loop: true,
  }}
/>
</span>
        </h1>
      </div>

<h4 className="text-xs pt-4 text-teal-300 mx-auto max-w-4xl">My short intro :</h4>
      <div className="mx-auto text-xs max-w-4xl text-white p-2 ">
  <p className="text-xs md:text-sm lg:text-base text-white leading-relaxed">
    I specialize in designing and developing user-friendly, visually appealing web applications that enhance user experience. With a strong focus on intuitive interfaces and responsive designs, 
    I aim to create solutions that not only meet the needs of users but also engage and captivate them. My expertise spans front-end and back-end development, ensuring seamless functionality and aesthetic appeal in every project I undertake.
  </p>
</div>


      </div>


    </div>
  );
}
