import './App.css'

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <span className="brand__glow" />
          <span className="brand__text">Vedant Kasaudhan</span>
          <span className="brand__tag">AI/ML Engineer</span>
        </div>
        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="btn btn--ghost">Let’s Connect</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero__content">
            <p className="eyebrow">B.Tech CSE (AIML) • Galgotias University</p>
            <h1>
              Building <span className="accent">AI-first</span> products
              <br /> for the next generation.
            </h1>
            <p className="hero__sub">
              I’m a full-stack + AI developer crafting scalable web apps, intelligent systems,
              and data-driven experiences. I love turning complex ideas into clean, high-impact
              products.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">Explore Projects</a>
              <a className="btn btn--outline" href="/vite.svg" download>Download Resume</a>
            </div>
            <div className="hero__stats">
              <div>
                <h3>400+</h3>
                <span>DSA problems solved</span>
              </div>
              <div>
                <h3>20+ FPS</h3>
                <span>optimized AI vision demo</span>
              </div>
              <div>
                <h3>2025</h3>
                <span>Smart India Hackathon pre-qualifier</span>
              </div>
            </div>
          </div>
          <div className="hero__panel glass">
            <div className="panel__header">
              <span>AI Profile</span>
              <div className="pulse" />
            </div>
            <div className="panel__body">
              <div className="chip">Aspiring Software Engineer</div>
              <h4>Focus areas</h4>
              <ul>
                <li>Full-stack apps (React, Node, Express)</li>
                <li>AI/ML systems (Python, OpenCV)</li>
                <li>Scalable backend APIs + databases</li>
              </ul>
              <div className="panel__actions">
                <a className="btn btn--ghost" href="https://www.linkedin.com/in/vedant-kasaudhan-9a444a291/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="btn btn--ghost" href="mailto:vedantkasaudhan@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section__header">
            <h2>AI-native skills & toolchain</h2>
            <p>Modern stack for building intelligent products, from UX to scalable backend systems.</p>
          </div>
          <div className="grid">
            {[
              {
                title: 'Web & Programming',
                desc: 'JavaScript (ES6+), Python, Java, HTML5, CSS3, REST APIs.',
              },
              {
                title: 'Frontend & Backend',
                desc: 'React.js, Node.js, Express.js, responsive UI systems.',
              },
              {
                title: 'AI/ML + Vision',
                desc: 'OpenCV, AI prompt tooling, model tuning for real-time inference.',
              },
              {
                title: 'Databases & Tools',
                desc: 'MySQL, MongoDB, Postman, Git, Linux, Google Maps & Places API.',
              },
            ].map((item) => (
              <div key={item.title} className="card glass">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className="card__tag">AI-ready</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section section--lab">
          <div className="section__header">
            <h2>Selected AI + full-stack projects</h2>
            <p>Problem-solving products built with modern stacks, performance focus, and clean architecture.</p>
          </div>
          <div className="grid grid--three">
            {[
              {
                title: 'Coders of Delhi — Social Platform Analyzer',
                stack: 'React.js, Node.js, Express.js, MongoDB, REST APIs',
                impact: 'Built a social platform analyzer with clean REST flows and modular services.',
                details: [
                  'User data, posts, and interaction analytics with scalable architecture.',
                  'Improved data processing logic using core DSA for performance.',
                  'End-to-end system from frontend state to backend APIs.',
                ],
              },
              {
                title: 'Driver Drowsiness Detection (AI-Based)',
                stack: 'Python, OpenCV, PyTorch, API Integration',
                impact: 'Real-time driver safety system using facial & eye-movement analysis.',
                details: [
                  'Optimized model to reach 20+ FPS for low-resource devices.',
                  'Clean API design for future extensions & deployment.',
                  'Focused on production-ready reliability and precision.',
                ],
              },
              {
                title: 'PromptLab Portfolio OS',
                stack: 'React, Vite, Framer UI, AI content tooling',
                impact: 'AI-personalized portfolio with dynamic sections and real-time UX polish.',
                details: [
                  'Next-gen aesthetic with glassmorphism + neon gradients.',
                  'Interactive cards, animations, and resume download.',
                  'Ready for rapid customization and growth.',
                ],
              },
            ].map((project) => (
              <div key={project.title} className="card card--project glass">
                <h3>{project.title}</h3>
                <p className="muted">{project.stack}</p>
                <p>{project.impact}</p>
                <ul>
                  {project.details.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <button className="btn btn--outline">View Case Study</button>
              </div>
            ))}
          </div>
          <div className="ticker">
            <span>✨ AI Vision</span>
            <span>⚡ Node APIs</span>
            <span>🎯 DSA Optimizations</span>
            <span>🧠 Prompt Engineering</span>
            <span>🚀 Product Scaling</span>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section__header">
            <h2>Experience & leadership</h2>
            <p>Hands-on roles building scalable systems and collaborating in open-source environments.</p>
          </div>
          <div className="grid">
            <div className="card glass">
              <h3>AI Intern @ HRFI</h3>
              <p className="muted">2025 • Stipend-based</p>
              <ul>
                <li>Worked on backend logic and data processing for AI-driven workflows.</li>
                <li>Improved reliability and performance through debugging and optimization.</li>
                <li>Supported scalable architecture for production-level codebases.</li>
              </ul>
            </div>
            <div className="card glass">
              <h3>Open Source Contributor @ GSSoC</h3>
              <p className="muted">2024</p>
              <ul>
                <li>Contributed code, bug fixes, and enhancements via Git-based workflows.</li>
                <li>Collaborated on modular, reusable components and best practices.</li>
                <li>Maintained clean documentation and peer-reviewed contributions.</li>
              </ul>
            </div>
            <div className="card glass">
              <h3>Certifications</h3>
              <p className="muted">AI + Full-stack</p>
              <ul>
                <li>Full Stack Developer — GeeksforGeeks</li>
                <li>C++ (Intermediate) — HackerRank</li>
                <li>AWS Cloud Foundation — AWS</li>
                <li>Java for Beginners — HCL Guvi</li>
                <li>Mist-AI Virtual Internship — Juniper Networks</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section__header">
            <h2>Education</h2>
            <p>Strong academic foundation with focus on AI/ML and computer science.</p>
          </div>
          <div className="grid">
            <div className="card glass">
              <h3>B.Tech CSE (AIML)</h3>
              <p className="muted">Galgotias University • 2023 — 2027 • CGPA: 7.9</p>
            </div>
            <div className="card glass">
              <h3>Senior Secondary (12th)</h3>
              <p className="muted">Jawahar Navodaya Vidyalaya • 2023 • 70.0%</p>
            </div>
            <div className="card glass">
              <h3>Secondary (10th)</h3>
              <p className="muted">Jawahar Navodaya Vidyalaya • 2021 • 89.2%</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section section--cta">
          <div className="cta glass">
            <div>
              <h2>Let’s build an AI-first future together</h2>
              <p>Open to internships, collaborations, and full-stack + AI roles.</p>
              <div className="contact__chips">
                <span className="chip">📞 +91 8707465693</span>
                <span className="chip">✉️ vedantkasaudhan@gmail.com</span>
                <span className="chip">LinkedIn: Vedant Kasaudhan</span>
              </div>
            </div>
            <form
  className="cta__form"
  action="https://formspree.io/f/xwvnedwn"
  method="POST"
>
  <input
    type="email"
    name="email"
    placeholder="you@futuremail.com"
    required
  />

  <textarea
    name="message"
    placeholder="Write your message..."
    required
  ></textarea>

  <button className="btn btn--primary" type="submit">
    Request collaboration
  </button>

  <p className="form__note">
    ✅ Message will be sent directly to my email.
  </p>
</form>


          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Vedant Kasaudhan. Crafted for the AI era.</span>
        <div className="footer__links">
          <a href="https://leetcode.com/" target="_blank" rel="noreferrer">LeetCode</a>
          <a href="https://github.com/vedant-kasaudhan" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/vedant-kasaudhan-9a444a291/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  )
}

export default App
