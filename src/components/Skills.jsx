function Skills() {
  const skills = [
    {
      title: "Frontend Engineering",
      description: "Accessible interfaces with responsive layouts, component thinking, and crisp interaction details.",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Backend Foundations",
      description: "Practical server-side development for product workflows, APIs, and data-driven experiences.",
      items: ["Node.js", "REST APIs", "MongoDB"],
    },
    {
      title: "Developer Workflow",
      description: "Clean iteration habits across version control, project structure, and deployment-ready builds.",
      items: ["Git", "GitHub", "Vite"],
    },
  ];

  return (
    <section id="skills" className="section section-muted">
      <div className="section-shell">
        <div className="section-heading">
          <span className="eyebrow">Capabilities</span>
          <h2>Modern Stack, Sharp Execution</h2>
          <p>
            A compact toolset focused on building clear, maintainable, user-facing products.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.title} className="skill-card">
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
