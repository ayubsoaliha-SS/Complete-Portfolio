import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-shell">
        <div className="section-heading">
          <span className="eyebrow">Portfolio Showcase</span>
          <h2>Featured Projects</h2>
          <p>
            A curated collection of projects demonstrating full-stack
            development, UI engineering, problem solving and product thinking,
            with case-study notes for each build.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
