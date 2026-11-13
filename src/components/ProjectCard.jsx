function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-technologies">
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      )}

    </article>
  );
}

export default ProjectCard;
