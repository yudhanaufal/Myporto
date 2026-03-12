import profile from "../assets/foto_profile.jpeg"
const Hero = () => {
  return (
    <>
      <section id="hero" className="hero-section">
        <div className="hero-content animate-fade-in">
          <div className="profile-img-container">
            {/* Ganti src di bawah ini dengan nama file foto Anda, misalnya: src="/assets/foto-yudha.png" atau import gambar di atas. Saat ini menggunakan placeholder */}
            <img src={profile} alt="Yudha Profile" className="profile-img" />
          </div>
          <div className="badge animate-float">Available for work</div>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Yudha</span>
            <br />
              Junior Developer <br /> & IT Support
          </h1>
          <p className="hero-subtitle">
             Building reliable applications and keeping systems running smoothly.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </section>

      <style>{`
        .hero-section {
          min-height: calc(100vh - 80px); /* subtract nav height approx */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 0;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .profile-img-container {
          margin-bottom: 2rem;
          display: flex;
          justify-content: center;
        }
        .profile-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--accent-primary);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
          transition: transform 0.3s ease;
        }
        .profile-img:hover {
          transform: scale(1.05);
        }
        .badge {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(139, 92, 246, 0.1);
          border: 1px solid rgba(139, 92, 246, 0.3);
          border-radius: 20px;
          color: var(--accent-primary);
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 2rem;
          letter-spacing: 0.5px;
        }
        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          letter-spacing: -2px;
          margin-bottom: 1.5rem;
        }
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto 3rem auto;
          line-height: 1.8;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
      `}</style>
    </>
  )
}

export default Hero