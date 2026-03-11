const Skills = () => {
  const customSkills = [
    { name: "Node.js", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "React Native", category: "Mobile" },
    { name: "PostgreSQL & MySQL", category: "Database" },
    { name: "TypeScript & JavaScript", category: "Language" },
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "DevOps" },
    { name: "Mikrotik", category: "Tools" },
  ];

  return (
    <>
      <section id="skills" className="section-padding">
        <h2 className="section-title text-center">
          My <span className="text-gradient">Expertise</span>
        </h2>
        
        <div className="skills-grid">
          {customSkills.map((skill, index) => (
            <div key={index} className="skill-card glass-panel group">
              <div className="skill-content">
                <span className="skill-category">{skill.category}</span>
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .text-center { text-align: center; }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .skill-card {
          padding: 1.5rem;
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
          cursor: default;
        }
        .skill-card:hover {
          background: rgba(139, 92, 246, 0.05); /* very light primary */
        }
        .skill-category {
          display: inline-block;
          font-size: 0.8rem;
          color: var(--accent-primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }
        .skill-name {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 600;
        }
      `}</style>
    </>
  )
}

export default Skills