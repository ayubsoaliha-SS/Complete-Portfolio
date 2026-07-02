function ProjectCard({
  image,
  fallbackImage,
  title,
  description,
  category,
  mediaLabel,
  role,
  impact,
  status,
  highlights = [],
  techStack,
  github,
  live
}) {
  const hasGithub = github && github !== "#";
  const hasLive = live && live !== "#";

  return (
    <article className="project-card">
      <div className="project-media">
        <picture>
          {fallbackImage && <source srcSet={image} type="image/webp" />}
          <img
            src={fallbackImage || image}
            alt={`${title} interface preview`}
            className="project-image"
            loading="lazy"
          />
        </picture>
        {mediaLabel && <span className="project-media-label">{mediaLabel}</span>}
      </div>

      <div className="project-body">
        <span className="project-category">{category}</span>
        <h3>{title}</h3>

        <p>{description}</p>

        <div className="project-meta">
          <div>
            <span>Role</span>
            <strong>{role}</strong>
          </div>
          <div>
            <span>Outcome Focus</span>
            <strong>{impact}</strong>
          </div>
        </div>

        <details className="project-details">
          <summary>Case study notes</summary>
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <p>{status}</p>
        </details>

        <div className="tech-stack">
          {techStack.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-buttons">
          {hasGithub ? (
            <a href={github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : (
            <span className="project-link-disabled" aria-disabled="true">
              GitHub Soon
            </span>
          )}

          {hasLive ? (
            <a href={live} target="_blank" rel="noreferrer">
              Live Demo
            </a>
          ) : (
            <span className="project-link-disabled" aria-disabled="true">
              Demo Soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
