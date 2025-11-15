import { useState } from 'react';
import './ProjectCard.css';
import { getMediaUrl } from '../../utils/formatter';

interface Project {
  id: string;
  description: string;
  logo?: string;
  backgroundImage: string;
}

function ProjectCard(props: {
  projects: Project[];
  onSelectedProject: (projectId: string) => void;
  selectedProject: string;
}) {
  const [hoveringId, setHoveringId] = useState<string>('none');
  const timeOutHovering = (id: string) => {
    setTimeout(() => setHoveringId(id), 300);
  };

  return (
    <article className='projectList'>
      {props.projects.map((project) => (
        <button
          className={project.id === props.selectedProject ? 'projectButton projectSelected' : 'projectButton'}
          key={project.id}
          style={{
            backgroundImage: `url(${getMediaUrl(`../assets/images/${project.backgroundImage}`)})`,
          }}
          onMouseEnter={() => timeOutHovering(project.id)}
          onMouseLeave={() => setHoveringId('none')}
          onClick={() => props.onSelectedProject(project.id)}
        >
          <div className='project'>
            {hoveringId === project.id ? (
              <p>{project.description}</p>
            ) : (
              project.logo && (
                <img
                  src={getMediaUrl(`../assets/images/${project.logo}`)}
                  alt={`logo ${project.id}`}
                  className='projectLogo'
                />
              )
            )}
          </div>
        </button>
      ))}
    </article>
  );
}

export default ProjectCard;
