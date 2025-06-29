import useScrollAnimation from '../Components/animation'; 
import Image from "next/image";
export default function Projects(){
  const hasAnimated = useScrollAnimation('Project-section'); 
    const Jobportal = ()=>{
        window.open("https://dynamic-blog-web-beta.vercel.app/","_blank","noopener,noreferrer");
    }

    const Routing = ()=>{
        window.open("https://intern-intelligence-portfolio-556q7u5es.vercel.app/","_blank","noopener,noreferrer");
    }
    return(
        <div >

        <div>
<h1 id="Projects" className=" mb-4 mt-10 text-white font-serif -tracking-tight text-2xl font-bold   md:text-4xl    w-auto flex justify-center">
   Projects
</h1>    
</div>

<div
        id="Project-section"
        className={`transition-all duration-700 ease-in-out transform ${
          hasAnimated ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-10 opacity-0'
        }`}
      >


<div className="lg:space-x-40 flex flex-wrap justify-center  mt-10 gap-4 sm:space-x-8">

<div className="sm:flex sm:justify-start bg-gray-800  border-gray-800  justify-center w-64 rounded-lg mb-6 p-4 flex flex-col   hover:border-teal-300 border-2 transition-all hover:scale-110 duration-1000">
<h1 className=" mb-4 text-white font-serif -tracking-tight text-xl font-bold   md:text-4xl    w-auto flex justify-center ">
   Dynamic Blog web
</h1>


<div >
<Image className=" mr-10" src="/blog-web.PNG"  width={300} height={250} alt={"image"} />
</div>
<p className="text-xs text-white leading-relaxed mt-8">
A fully responsive dynamic blog website with a modern frontend built using Tailwind CSS and Next.js. Powered by a headless CMS for content management and supports user comments, providing an interactive and seamless reading experience across all devices.
</p>


  <div className="flex justify-center mt-6  ">
  <button onClick={Jobportal}  className=" bg-gray-800 text-white font-semibold rounded-md transition-transform duration-300 hover:bg-teal-300 hover:scale-105">
    Check Now
  </button>
</div>

</div>

<div className="sm:flex sm:justify-end bg-gray-800 border-gray-800 w-64 rounded-lg mb-6 p-4 flex flex-wrap   hover:border-teal-300 border-2 transition-all hover:scale-110 duration-1000">
<h1 className=" mb-4 ml-14 sm:mr-14 text-white font-serif -tracking-tight text-xl font-bold   md:text-4xl mr-8   w-auto flex justify-center ">
   Portfolio website
</h1>

<div >
<Image className=" sm:mr-10" src="/portfolio-intern.PNG"  width={250} height={250} alt={"image"} />
</div>


<p className="text-xs text-white leading-relaxed mt-8">
An animated and interactive portfolio website built to showcase projects with engaging visuals and smooth user experiences. Designed to captivate visitors while effectively highlighting skills and creativity across devices.
</p>

  <div className="flex justify-center mt-6 ml-8 sm:mr-8">
  <button onClick={Routing} className="px-6 sm:px-8 py-2 bg-gray-800 text-white font-semibold rounded-md transition-transform duration-300 hover:bg-teal-300 hover:scale-105">
    Check Now
  </button>
</div>

</div>

</div>
</div>
</div>
    );
}
// Completed