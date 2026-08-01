// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// import AnimatedCounter from "../components/AnimatedCounter";
// import Button from "../components/Button";
// import { words } from "../constants";
// import HeroExperience from "../components/models/hero_models/HeroExperience";

// const Hero = () => {
//   useGSAP(() => {
//     gsap.fromTo(
//       ".hero-text h1",
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
//     );
//   });

//   return (
//     <section id="hero" className="relative overflow-hidden">
//       <div className="absolute top-0 left-0 z-10">
//         <img src="/images/bg.png" alt="" />
//       </div>

//       <div className="hero-layout">
//         {/* LEFT: Hero Content */}
//         <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
//           <div className="flex flex-col gap-7">
//             <div className="hero-text">
//               <h1>
//                 Shaping
//                 <span className="slide">
//                   <span className="wrapper">
//                     {words.map((word, index) => (
//                       <span
//                         key={index}
//                         className="flex items-center md:gap-3 gap-1 pb-2"
//                       >
//                         <img
//                           src={word.imgPath}
//                           alt="person"
//                           className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
//                         />
//                         <span>{word.text}</span>
//                       </span>
//                     ))}
//                   </span>
//                 </span>
//               </h1>
//               <h1>into Real Projects</h1>
//               <h1>that Deliver Results</h1>
//             </div>

//             <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
//               Hi, I’m Adrian, a developer based in Croatia with a passion for
//               code.
//             </p>

//             <Button
//               text="See My Work"
//               className="md:w-80 md:h-16 w-60 h-12"
//               id="counter"
//             />
//           </div>
//         </header>

//         {/* RIGHT: 3D Model or Visual */}
//         <figure>
//           <div className="hero-3d-layout">
//             <HeroExperience />
//           </div>
//         </figure>
//       </div>

//       <AnimatedCounter />
//     </section>
//   );
// };

// export default Hero;

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// import AnimatedCounter from "../components/AnimatedCounter";
// import Button from "../components/Button";
// import { words } from "../constants";
// import HeroExperience from "../components/models/hero_models/HeroExperience";

// const Hero = () => {
//   useGSAP(() => {
//     gsap.fromTo(
//       ".hero-text h1",
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
//     );
//   });

//   return (
//     <section id="hero" className="relative overflow-hidden">
//       <div className="absolute top-0 left-0 z-10">
//         <img src="/images/bg.png" alt="" />
//       </div>

//       <div className="hero-layout">
//         {/* LEFT: Hero Content */}
//         <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
//           <div className="flex flex-col gap-7">
//             <div className="hero-text">
//               <h1>
//                 Building
//                 <span className="slide">
//                   <span className="wrapper">
//                     {words.map((word, index) => (
//                       <span
//                         key={index}
//                         className="flex items-center md:gap-3 gap-1 pb-2"
//                       >
//                         <img
//                           src={word.imgPath}
//                           alt="tech"
//                           className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
//                         />
//                         <span>{word.text}</span>
//                       </span>
//                     ))}
//                   </span>
//                 </span>
//               </h1>

//               <h1>Intelligent Software</h1>
//               <h1>with Java, DSA & AI</h1>
//             </div>

//             <p className="text-white-50 md:text-xl relative z-10 pointer-events-none max-w-xl">
//               Hi, I’m <span className="text-white font-semibold">Vedant Kasaudhan</span>, a Computer Science student and
//               GEN-AI Intern, focused on backend development, problem solving, and
//               building real-world software solutions using strong fundamentals and modern technology.
//             </p>

//             <div className="flex gap-4 flex-wrap">
//               <Button
//                 text="View My Work"
//                 className="md:w-80 md:h-16 w-60 h-12"
//                 id="work"
//               />
//               <Button
//                 text="Contact Me"
//                 className="md:w-60 md:h-16 w-48 h-12"
//                 id="contact"
//               />
//             </div>
//           </div>
//         </header>

//         {/* RIGHT: 3D Model */}
//         <figure>
//           <div className="hero-3d-layout">
//             <HeroExperience />
//           </div>
//         </figure>
//       </div>

//       <AnimatedCounter />
//     </section>
//   );
// };

// export default Hero;

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// import AnimatedCounter from "../components/AnimatedCounter";
// import Button from "../components/Button";
// import { words } from "../constants";
// import HeroExperience from "../components/models/hero_models/HeroExperience";

// const Hero = () => {
//   useGSAP(() => {
//     gsap.fromTo(
//       ".hero-text h1",
//       { y: 50, opacity: 0 },
//       { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
//     );
//   });

//   return (
//     <section id="hero" className="relative overflow-hidden">
//       <div className="absolute top-0 left-0 z-10">
//         <img src="/images/bg.png" alt="" />
//       </div>

//       <div className="hero-layout">
//         {/* LEFT */}
//         <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
//           <div className="flex flex-col gap-6">

//             {/* 👤 PROFILE PHOTO
//             <div className="flex flex-col items-start gap-3">
//               <img
//                 src="/images/vedant.jpg"
//                 alt="Vedant Kasaudhan"
//                 className="w-36 h-36 rounded-full border-4 border-white-50 object-cover shadow-lg"
//               />
              
//               <p className="text-white text-lg font-medium">
//                 Java Backend Developer | DSA Enthusiast | GEN-AI Intern
//               </p>
//             </div> */}
//             {/* 👤 PROFILE PHOTO */}
// <div className="flex flex-col items-start gap-4 mb-4">

//   {/* Glowing Ring */}
//   <div className="relative group">

//     {/* Glow */}
//     <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur opacity-70 group-hover:opacity-100 transition duration-300"></div>

//     {/* Image */}
//     <img
//       src="/images/vedant.jpg"
//       alt="Vedant Kasaudhan"
//       className="relative w-36 h-36 rounded-full object-cover border-4 border-black
//                  transition-transform duration-500 ease-out
//                  group-hover:scale-110 cursor-pointer"
//     />
//   </div>

//   {/* Title */}
//   <p className="text-white text-lg font-medium tracking-wide">
//     Java Backend Developer | DSA Enthusiast | GEN-AI Intern
//   </p>

// </div>


//             {/* TEXT */}
//             <div className="hero-text">
//               <h1>
//                 Building
//                 <span className="slide">
//                   <span className="wrapper">
//                     {words.map((word, index) => (
//                       <span key={index} className="flex items-center gap-2 pb-2">
//                         <img
//                           src={word.imgPath}
//                           alt="tech"
//                           className="size-8 p-1 rounded-full bg-white-50"
//                         />
//                         <span>{word.text}</span>
//                       </span>
//                     ))}
//                   </span>
//                 </span>
//               </h1>

//               <h1>Intelligent Software</h1>
//               <h1>with Java, DSA & AI</h1>
//             </div>

//             <p className="text-white-50 md:text-lg max-w-xl">
//               Hi, I’m <span className="text-white font-semibold">Vedant Kasaudhan</span>, a Computer Science student and
//               GEN-AI Intern, focused on backend development, problem solving, and
//               building real-world software solutions using strong fundamentals and modern technology.
//             </p>

//             <div className="flex gap-4 flex-wrap">
//               <Button text="View My Work" className="md:w-72 md:h-14 w-56 h-12" id="work" />
//               <Button text="Contact Me" className="md:w-56 md:h-14 w-44 h-12" id="contact" />
//             </div>

//           </div>
//         </header>

//         {/* RIGHT 3D */}
//         <figure>
//           <div className="hero-3d-layout">
//             <HeroExperience />
//           </div>
//         </figure>
//       </div>

//       <AnimatedCounter />
//     </section>
//   );
// };

// export default Hero;
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import HeroExperience from "../components/models/hero_models/HeroExperience";
import { applyMagnetic } from "../utils/magnetic";

const Hero = () => {
  const profileRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.25, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo(
      ".hero-fade",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, delay: 0.8, duration: 1, ease: "power2.out" }
    );
  });

  useEffect(() => {
    if (profileRef.current) {
      applyMagnetic(profileRef.current, 10);
    }
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 relative z-10">
          <div className="flex flex-col gap-7 max-w-2xl">

            {/* 👤 PROFILE */}
            <div className="flex items-center gap-5 hero-fade">

              {/* Magnetic Glow Avatar */}
              <div ref={profileRef} className="relative group cursor-pointer">

                {/* Glow Ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur opacity-70 group-hover:opacity-100 transition duration-500"></div>

                {/* Image */}
                <img
                  src="/images/vedant.jpg"
                  alt="Vedant Kasaudhan"
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-black
                             transition-transform duration-500 ease-out
                             group-hover:scale-110 float"
                />
              </div>

              {/* Name + Role */}
              <div>
                <h3 className="text-white text-xl font-semibold tracking-wide">
                  Vedant Kasaudhan
                </h3>
                <p className="text-white-50 text-sm mt-1">
                  Java Backend Developer • DSA • GEN-AI Intern
                </p>
              </div>
            </div>

            {/* HEADLINE */}
            <div className="hero-text">
              <h1>
                Engineering
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span key={index} className="flex items-center gap-2 pb-2">
                        <img
                          src={word.imgPath}
                          alt="tech"
                          className="size-8 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>Building Reliable</h1>
              <h1>Java Systems & AI Tools</h1>
            </div>

            {/* DESCRIPTION */}
            <p className="text-white-50 md:text-lg max-w-xl hero-fade">
              Hi, I’m <span className="text-white font-semibold">Vedant Kasaudhan</span>, a Fourth-year BTech CSE student and GEN-AI Intern.
              I build backend-first applications, automate workflows, and share
              my progress through GitHub projects focused on Java, DSA, and AI.
            </p>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap hero-fade">
              <Button text="View My Work" className="md:w-72 md:h-14 w-56 h-12" id="work" />
              <Button text="Contact Me" className="md:w-56 md:h-14 w-44 h-12" id="contact" />
            </div>

          </div>
        </header>

        {/* RIGHT 3D */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white-50 animate-bounce text-sm opacity-70">
        ↓ Scroll
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
