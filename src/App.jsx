import { useState } from 'react';

import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const [theme, setTheme] = useState('dark');

  function toggleTheme() {
    setTheme((current) =>
      current === 'dark' ? 'light' : 'dark'
    );
  }

  return (
    <div className={`app ${theme}`}>

      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>

        {/* Homepage introduction */}
        <section id="home" className="hero">

          <p className="eyebrow">
            Dizzy's Portfolio-blog          </p>

          <h1>
            Welcome to my Developer Portfolio
          </h1>

          <p className="hero-description">
            I'm interested in software development,
            programming, and Linux.

            This website is a collection of my
            projects, experiments, and technical articles.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="button button-primary"
            >
              View Projects
            </a>

            <a
              href="#blog"
              className="button button-secondary"
            >
              Read Blog
            </a>
          </div>

        </section>

        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />

      </main>

      <Footer />

    </div>
  );
}

export default App;
