import useScrollAnimation from '../Components/animation'; 


export default function Skills(){
  const hasAnimated = useScrollAnimation('skills-section'); 
  return(

        <div>
            <h1 id="Skills" className=" mb-4 text-white font-serif -tracking-tight text-2xl font-bold   md:text-4xl    w-auto flex justify-center">
                Skills
            </h1>
            <div
        id="skills-section"
        className={`transition-all duration-700 ease-in-out transform ${
          hasAnimated ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-10 opacity-0'
        }`}
      >
            <div>
                <h1 className="text-white font-serif p-4 ml-2 -tracking-tight text-xl flex justify-start sm:flex sm:justify-center ">
                    Flutter
                </h1>

                <div className="relative w-11/12 sm:w-3/6 mx-auto">
  {/* Progress Bar */}
  <div className="bg-gray-300 rounded-2xl h-[8px] w-full relative">
    {/* Filled portion of the bar */}
    <div className="bg-teal-300 rounded-2xl h-full w-[90%]"></div>

    {/* Percentage Label */}
    <h1 className="absolute top-[-340%] right-0 text-white text-sm">90%</h1>
  </div>
  </div>
  </div>


         
         <div>
                <h1 className="text-white font-serif p-4 ml-2 -tracking-tight text-xl flex justify-start sm:flex sm:justify-center ">
                    TypeScript
                </h1>

                <div className="relative w-11/12 sm:w-3/6 mx-auto">
  {/* Progress Bar */}
  <div className="bg-gray-300 rounded-2xl h-[8px] w-full relative">
    {/* Filled portion of the bar */}
    <div className="bg-teal-300 rounded-2xl h-full w-[90%]"></div>

    {/* Percentage Label */}
    <h1 className="absolute top-[-340%] right-0 text-white text-sm">90%</h1>
  </div>
  </div>
  </div>

  <div>
                <h1 className="text-white font-serif p-4 ml-2 -tracking-tight text-xl flex justify-start sm:flex sm:justify-center ">
                   Next-JS
                </h1>

                <div className="relative w-11/12 sm:w-3/6 mx-auto">
  {/* Progress Bar */}
  <div className="bg-gray-300 rounded-2xl h-[8px] w-full relative">
    {/* Filled portion of the bar */}
    <div className="bg-teal-300 rounded-2xl h-full w-[75%]"></div>

    {/* Percentage Label */}
    <h1 className="absolute top-[-340%] right-0 text-white text-sm">75%</h1>
  </div>
  </div>
  </div>

         
 

         <div>
                <h1 className="text-white font-serif p-4 ml-2 -tracking-tight text-xl flex justify-start sm:flex sm:justify-center ">
                    C
                </h1>

                <div className="relative w-11/12 sm:w-3/6 mx-auto">
  {/* Progress Bar */}
  <div className="bg-gray-300 rounded-2xl h-[8px] w-full relative">
    {/* Filled portion of the bar */}
    <div className="bg-teal-300 rounded-2xl h-full w-[80%]"></div>

    {/* Percentage Label */}
    <h1 className="absolute top-[-340%] right-0 text-white text-sm">80%</h1>
  </div>
  </div>
  </div>

         
         <div>
                <h1 className="text-white font-serif p-4 ml-2 -tracking-tight text-xl flex justify-start sm:flex sm:justify-center ">
                    C++
                </h1>

                <div className="relative w-11/12 sm:w-3/6 mx-auto">
  {/* Progress Bar */}
  <div className="bg-gray-300 rounded-2xl h-[8px] w-full relative">
    {/* Filled portion of the bar */}
    <div className="bg-teal-300 rounded-2xl h-full w-[85%]"></div>

    {/* Percentage Label */}
    <h1 className="absolute top-[-340%] right-0 text-white text-sm">85%</h1>
  </div>
  </div>
  </div>

        </div>
            </div>
        
    );
}