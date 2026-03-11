const Contact = () => {
  return (
    <>
      <section id="contact" className="section-padding contact-section">
        <div className="contact-card glass-panel text-center">
          <h2 className="section-title mb-2">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="contact-subtitle mb-8">
            Currently I'm looking for new opportunities. My inbox is always open!
          </p>
          
          <a href="mailto:nryudha80@gmail.com" className="btn btn-primary contact-btn">
            Say Hello <span className="arrow">→</span>
          </a>
          
          <div className="social-links">
            {/* <a href="#" className="social-link">LinkedIn</a> */}
            <a href="https://github.com/yudhanaufal" className="social-link">GitHub</a>
            {/* <a href="#" className="social-link">Twitter</a> */}
          </div>
        </div>
      </section>

      <style>{`
        .contact-section {
          display: flex;
          justify-content: center;
          padding-bottom: 120px;
        }
        .contact-card {
          padding: 4rem 2rem;
          max-width: 600px;
          width: 100%;
        }
        .mb-2 { margin-bottom: 0.5rem; font-size: 2.5rem; }
        .mb-8 { margin-bottom: 2.5rem; }
        .contact-subtitle {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.6;
        }
        .contact-btn {
          font-size: 1.1rem;
          padding: 1rem 2rem;
        }
        .arrow {
          display: inline-block;
          margin-left: 10px;
          transition: transform 0.3s ease;
        }
        .contact-btn:hover .arrow {
          transform: translateX(5px);
        }
        
        .social-links {
          margin-top: 3rem;
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }
        .social-link {
          color: var(--text-muted);
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .social-link:hover {
          color: var(--accent-primary);
        }
      `}</style>
    </>
  )
}

export default Contact