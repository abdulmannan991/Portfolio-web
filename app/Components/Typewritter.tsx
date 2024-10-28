// import Home from "../page";
// import { useState, useEffect } from "react";

// export default function Typewriter() {
//   const phrases = ["I am a Developer", "I am a Designer", "I am a Creator"];
//   const [text, setText] = useState("");
//   const [index, setIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setText((prev) => 
//         isDeleting 
//           ? prev.slice(0, -1) 
//           : phrases[index].slice(0, prev.length + 1)
//       );

//       if (!isDeleting && text === phrases[index]) {
//         setTimeout(() => setIsDeleting(true), 1000);
//       } else if (isDeleting && text === "") {
//         setIsDeleting(false);
//         setIndex((index + 1) % phrases.length);
//       }
//     }, isDeleting ? 100 : 200);

//     return () => clearTimeout(timeout);
//   }, [text, isDeleting, index]);

//   return (
//     <div className="text-3xl font-bold text-teal-300 text-center mt-16">
//       {text}
//       <span className="blinking-cursor">|</span>
//     </div>
//   );
// }
