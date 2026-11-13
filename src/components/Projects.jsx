import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>

      <p>
        Here you can explore some of my programming projects.
      </p>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;;
