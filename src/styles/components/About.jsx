function About() {
  return (
    <section id="about" className="section">
      <div className="section-shell">
        <div className="section-heading">
          <span className="eyebrow">Who I Am</span>
          <h2>Engineer With A Product Eye</h2>
          <p>
            I blend mechanical engineering discipline with modern full-stack craft,
            turning ambiguous problems into simple, usable web experiences.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-copy">
            <p>
              I am a Software Engineer with a unique blend of Mechanical
              Engineering expertise and modern Full Stack Development skills.
              Currently advancing software development at Masai School, I focus
              on building scalable web applications powered by React, Node.js
              and JavaScript.
            </p>

            <p>
              My engineering background has shaped a strong analytical mindset,
              enabling me to solve complex problems while designing intuitive
              user experiences. I enjoy creating products that combine
              performance, usability and real-world impact.
            </p>
          </article>

          <div className="about-panel" aria-label="Career focus">
            <div>
              <span>Focus</span>
              <strong>AI-powered web applications</strong>
            </div>
            <div>
              <span>Strength</span>
              <strong>Analytical problem solving</strong>
            </div>
            <div>
              <span>Approach</span>
              <strong>Clean UI, scalable systems</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
