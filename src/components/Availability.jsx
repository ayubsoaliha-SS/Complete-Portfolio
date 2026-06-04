function Availability() {
  const fits = [
    {
      title: "Roles",
      body: "Frontend Developer, React Developer, Junior Full Stack Developer, and product-focused engineering opportunities.",
    },
    {
      title: "Projects",
      body: "Dashboards, AI-assisted workflows, booking experiences, healthcare coordination tools, and polished business websites.",
    },
    {
      title: "Working Style",
      body: "Clear communication, careful UI execution, structured problem solving, and steady iteration from idea to usable product.",
    },
  ];

  return (
    <section id="fit" className="section">
      <div className="section-shell">
        <div className="fit-panel">
          <div className="fit-copy">
            <span className="eyebrow">Opportunity Fit</span>
            <h2>What I Am Looking For</h2>
            <p>
              I am focused on teams and projects where I can keep improving as a
              developer while contributing to clean, practical, user-facing products.
            </p>
          </div>

          <div className="fit-grid">
            {fits.map((fit) => (
              <article key={fit.title} className="fit-card">
                <h3>{fit.title}</h3>
                <p>{fit.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Availability;
