// import { useRef } from "react";

// const GlowCard = ({ card, index, children }) => {
//   // refs for all the cards
//   const cardRefs = useRef([]);

//   // when mouse moves over a card, rotate the glow effect
//   const handleMouseMove = (index) => (e) => {
//     // get the current card
//     const card = cardRefs.current[index];
//     if (!card) return;

//     // get the mouse position relative to the card
//     const rect = card.getBoundingClientRect();
//     const mouseX = e.clientX - rect.left - rect.width / 2;
//     const mouseY = e.clientY - rect.top - rect.height / 2;

//     // calculate the angle from the center of the card to the mouse
//     let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

//     // adjust the angle so that it's between 0 and 360
//     angle = (angle + 360) % 360;

//     // set the angle as a CSS variable
//     card.style.setProperty("--start", angle + 60);
//   };

//   // return the card component with the mouse move event
//   return (
//     <div
//       ref={(el) => (cardRefs.current[index] = el)}
//       onMouseMove={handleMouseMove(index)}
//       className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
//     >
//       <div className="glow"></div>
//       <div className="flex items-center gap-1 mb-5">
//         {Array.from({ length: 5 }, (_, i) => (
//           <img key={i} src="/images/star.png" alt="star" className="size-5" />
//         ))}
//       </div>
//       <div className="mb-5">
//         <p className="text-white-50 text-lg">{card.review}</p>
//       </div>
//       {children}
//     </div>
//   );
// };

// export default GlowCard;

// import { useRef } from "react";

// const GlowCard = ({ card, index, children }) => {
//   const cardRefs = useRef([]);

//   const handleMouseMove = (index) => (e) => {
//     const card = cardRefs.current[index];
//     if (!card) return;

//     const rect = card.getBoundingClientRect();

//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;

//     const rotateX = (y - centerY) / 15;
//     const rotateY = (x - centerX) / 15;

//     card.style.transform = `
//       perspective(1000px)
//       rotateX(${-rotateX}deg)
//       rotateY(${rotateY}deg)
//       scale(1.02)
//     `;

//     // Glow angle
//     let angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
//     angle = (angle + 360) % 360;
//     card.style.setProperty("--start", angle + 60);
//   };

//   const handleMouseLeave = (index) => () => {
//     const card = cardRefs.current[index];
//     if (!card) return;

//     card.style.transform = `
//       perspective(1000px)
//       rotateX(0deg)
//       rotateY(0deg)
//       scale(1)
//     `;
//   };

//   return (
//     <div
//       ref={(el) => (cardRefs.current[index] = el)}
//       onMouseMove={handleMouseMove(index)}
//       onMouseLeave={handleMouseLeave(index)}
//       className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column transition-transform duration-300"
//       style={{ transformStyle: "preserve-3d" }}
//     >
//       <div className="glow"></div>

//       <div className="flex items-center gap-1 mb-5">
//         {Array.from({ length: 5 }, (_, i) => (
//           <img key={i} src="/images/star.png" alt="star" className="size-5" />
//         ))}
//       </div>

//       <div className="mb-5">
//         <p className="text-white-50 text-lg">{card.review}</p>
//       </div>

//       {children}
//     </div>
//   );
// };

// export default GlowCard;

import { useEffect, useRef } from "react";
import { applyTilt } from "../utils/tilt";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const el = cardRefs.current[index];
    if (!el) return;

    applyTilt(el);
  }, [index]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card tilt-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow"></div>

      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src="/images/star.png" alt="star" className="size-5" />
        ))}
      </div>

      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>

      {children}
    </div>
  );
};

export default GlowCard;
