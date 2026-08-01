import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Job Mail MCP project" />
            </div>
            <div className="text-content">
              <h2>Job Mail-MCP — Java placement tool with mail automation</h2>
              <p className="text-white-50 md:text-xl">
                A Java-backed placement system that automates recruiter communication, tracks student applications, and delivers job mail updates with a clean workflow.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img src="/images/project2.png" alt="Personal portfolio project" />
              </div>
              <h2>Portfolio Website</h2>
              <p className="text-white-50 mt-4">
                This 3D-powered portfolio is built with React, Three.js, GSAP, and Tailwind CSS to showcase my skills, experience, and projects.
              </p>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="DSA and algorithm projects" />
              </div>
              <h2>DSA Practice & Java Projects</h2>
              <p className="text-white-50 mt-4">
                A growing collection of algorithm solutions and Java-based learning projects shared on GitHub to prepare for interviews and build strong fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
