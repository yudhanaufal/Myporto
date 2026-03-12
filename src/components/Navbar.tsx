import { useEffect, useState } from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar flex-between ${scrolled ? 'scrolled glass-panel' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '15px 2rem' }}>
          <h2 className="logo">
            <span className="text-gradient">Yudha</span>
          </h2>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link btn btn-primary">Contact Me</a>
          </div>
        </div>
      </nav>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: all 0.3s ease;
          background: transparent;
        }
        .navbar.scrolled {
          padding: 5px 0;
          margin: 10px 2rem;
          width: calc(100% - 4rem);
        }
        .logo {
          font-weight: 800;
          letter-spacing: -1px;
          margin: 0;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav-link {
          font-weight: 500;
          font-size: 0.95rem;
          position: relative;
        }
        .nav-link:not(.btn)::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background: var(--accent-gradient);
          transition: width 0.3s ease;
        }
        .nav-link:not(.btn):hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none; /* Add mobile menu later if needed */
          }
        }
      `}</style>
    </>
  )
}

export default Navbar