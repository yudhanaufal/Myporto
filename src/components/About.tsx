const About = () => {
  return (
    <>
      <section id="about" className="section-padding">
        <h2 className="section-title">
          <span className="text-gradient">About</span> Me
        </h2>
        
        <div className="about-grid">
          <div className="about-text glass-panel p-8">
            <h3 className="mb-4 text-2xl">Who am I?</h3>
            <p className="text-lg leading-relaxed mb-6">
             I am a Fullstack Developer and IT Support professional with experience in developing web and mobile applications. I also have skills in network configuration, system troubleshooting, and hardware maintenance to ensure technology systems run efficiently and reliably.
            </p>
            <p className="text-lg leading-relaxed">
              I love turning complex problems into elegant, scalable solutions. 
              My journey involves continuous learning to stay at the cutting edge of technologies.
            </p>
          </div>
          
          <div className="about-stats glass-panel">
            <div className="stat-item">
              <span className="stat-value text-gradient">1+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-item">
              <span className="stat-value text-gradient">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-value text-gradient">100%</span>
              <span className="stat-label">Commitment</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .section-padding {
          padding: 80px 0;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          text-align: center;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          align-items: stretch;
        }
        .p-8 { padding: 2rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-lg { font-size: 1.1rem; }
        .leading-relaxed { line-height: 1.7; }
        
        .about-stats {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          padding: 2rem;
        }
        .stat-item {
          text-align: center;
        }
        .stat-value {
          font-size: 3rem;
          font-weight: 800;
          display: block;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        .stat-label {
          color: var(--text-muted);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-stats {
            flex-direction: row;
            gap: 1rem;
          }
          .stat-value {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  )
}

export default About