import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />

      <main id="home">
        <h1>Welcome to my Developer Portfolio</h1>

        <p>
          My programming projects, technical articles,
          and development experience.
        </p>

        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
