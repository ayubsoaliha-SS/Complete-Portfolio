function GithubStats() {
  const username = "ayubsoaliha-SS";
  const signals = [
    {
      label: "Primary Stack",
      value: "React, JavaScript, Node.js",
      detail: "A focused foundation for building interactive full-stack products.",
    },
    {
      label: "Project Focus",
      value: "AI, dashboards, operations tools",
      detail: "Portfolio work is centered on usable interfaces and real workflow problems.",
    },
    {
      label: "Workflow",
      value: "Git, GitHub, Vite",
      detail: "Comfortable with version control, componentized builds, and deployment-ready projects.",
    },
  ];

  return (
    <section id="github" className="section section-muted">
      <div className="section-shell">
        <div className="section-heading">
          <span className="eyebrow">Developer Signal</span>
          <h2>Controlled Activity Snapshot</h2>
          <p>
            A reliable overview of the stack, project direction, and workflow without
            depending on third-party stats images that can fail during page load.
          </p>
        </div>

        <div className="activity-grid">
          {signals.map((signal) => (
            <article key={signal.label} className="activity-card">
              <span>{signal.label}</span>
              <h3>{signal.value}</h3>
              <p>{signal.detail}</p>
            </article>
          ))}
        </div>

        <a
          className="github-profile-link"
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
        >
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default GithubStats;
