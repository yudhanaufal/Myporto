import { projects } from "../data/project"

const Projects = () => {
  return (
    <>
      <section id="projects" className="section-padding">
        <h2 className="section-title text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {project.images && project.images.length > 0 && (
                  <div className="project-images">
                    {project.images.map((img, index) => (
                      <img key={index} src={img} alt={`${project.title} screenshot ${index + 1}`} className="project-img" />
                    ))}
                  </div>
                )}
                
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .text-center { text-align: center; margin-bottom: 3rem; font-size: 2.5rem; }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }
        .project-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .project-desc {
          color: var(--text-muted);
          flex-grow: 1;
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .project-images {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          scrollbar-width: thin;
        }
        .project-img {
          height: 150px;
          border-radius: 8px;
          object-fit: cover;
          border: 1px solid var(--glass-border);
          transition: transform 0.3s ease;
        }
        .project-img:hover {
          transform: scale(1.05);
        }
        .btn-sm {
          padding: 0.6rem 1rem;
          font-size: 0.9rem;
        }
      `}</style>
    </>
  )
}

export default Projects