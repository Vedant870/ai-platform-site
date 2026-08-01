export function applyMagnetic(el, strength = 30) {
  const rect = () => el.getBoundingClientRect();

  el.addEventListener("mousemove", (e) => {
    const r = rect();

    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);

    el.style.transform = `
      translate(${x / strength}px, ${y / strength}px)
      scale(1.05)
    `;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = `
      translate(0px, 0px)
      scale(1)
    `;
  });
}
