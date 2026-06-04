function Experience() {
  const items = [
    {
      period: "Current",
      title: "Full Stack Development",
      organization: "Masai School",
      description:
        "Advancing practical software development through React, JavaScript, backend fundamentals, project work, and collaborative engineering habits.",
    },
    {
      period: "Foundation",
      title: "Mechanical Engineering",
      organization: "Engineering Background",
      description:
        "Built a systems-oriented problem-solving base: analysis, precision, structured thinking, and comfort with complex technical constraints.",
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="section-shell">
        <div className="section-heading">
          <span className="eyebrow">Background</span>
          <h2>Experience And Education</h2>
          <p>
            A technical path shaped by engineering discipline, full-stack training,
            and a growing focus on product-quality web applications.
          </p>
        </div>

        <div className="timeline">
          {items.map((item) => (
            <article key={item.title} className="timeline-card">
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <strong>{item.organization}</strong>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
