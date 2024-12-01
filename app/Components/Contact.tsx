import useScrollAnimation from '../Components/animation'; 

export default function Contact(){
  const hasAnimated = useScrollAnimation('Contact-section'); 

    return(
        <div >
      <div >
<h1 id="Contactme" className=" mb-4 mt-10 text-white font-serif -tracking-tight text-2xl font-bold   md:text-4xl    w-auto flex justify-center">
   Contact Me

</h1>    

</div>
<div
        id="Contact-section"
        className={`transition-all duration-700 ease-in-out transform ${
          hasAnimated ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-10 opacity-0'
        }`}
      >


<div className="flex justify-center items-center p-6 ">

<fieldset className="border-2 border-teal-300 p-6 sm:p-12 w-72 sm:w-80 md:w-2/5 ">
    <legend className="font-serif font-bold text-teal-300 text-xl sm:text-2xl">
        Your Info
    </legend>
  <form action="#" className="space-y-4 ">
<div>
    
  <label htmlFor="name" className="block text-teal-300 font-semibold mb-2 ">Name</label>
       
       <input className="sm:h-10 sm:w-64 md:h-10 md:w-80 border-2 rounded-sm text-black focus:outline-none hover:border-teal-300 hover:border-2" type="text"  id={"name"} placeholder="Enter your name" />
     
</div>

<div>
<label htmlFor="name" className="block text-teal-300 font-semibold mb-2 ">Email</label>
      
      <input className="sm:h-10 sm:w-64 md:h-10 md:w-80 border-2 rounded-sm text-black focus:outline-none hover:border-teal-300 hover:border-2" type="email"  placeholder="Enter your email" />
     
</div>

<div>
<label htmlFor="name" className="block text-teal-300 font-semibold mb-2 ">Password</label>
      
      <input className="sm:h-10 sm:w-64 md:h-10 md:w-80 border-2 rounded-sm text-black focus:outline-none hover:border-teal-300 hover:border-2" type="password"  placeholder="Enter your password" />
     
</div>

<div>
<label htmlFor="name" className="block text-teal-300 font-semibold mb-2 ">Message</label>
      
    <textarea placeholder="Write your message..." className=" h-28 w-64 md:h-28 md:w-80 border-2 rounded-sm text-black focus:outline-none hover:border-teal-300 hover:border-2" name="message" id=""></textarea>
</div>

<button 
        type="submit" 
        className="w-full px-6 py-3 text-white bg-gray-800 rounded-md transition-all duration-300 hover:bg-teal-300 hover:scale-105"
      >
        Send Message
      </button>


  </form>

    

</fieldset>
</div>

        </div>
        </div>
    );
}