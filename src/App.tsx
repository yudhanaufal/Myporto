import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Project"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="app-container">
      {/* Background Decorators */}
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>

      <Navbar />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <style>{`
        .app-container {
          position: relative;
          z-index: 1;
        }
        .bg-shape {
          position: fixed;
          border-radius: 50%;
          filter: blur(100px);
          z-index: -1;
          opacity: 0.5;
          animation: float 20s ease-in-out infinite alternate;
        }
        .shape-1 {
          width: 500px;
          height: 500px;
          background: var(--accent-primary);
          top: -200px;
          left: -100px;
        }
        .shape-2 {
          width: 400px;
          height: 400px;
          background: var(--accent-secondary);
          bottom: -100px;
          right: -100px;
          animation-delay: -5s;
        }
        main {
          padding-top: 80px; /* Space for fixed navbar */
        }
      `}</style>
    </div>
  )
}

export default App