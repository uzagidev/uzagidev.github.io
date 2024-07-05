import "./App.css";
import Hero from "./components/Sections/Hero";
import Navbar from "./components/Nav/Navbar";
import Experience from "./components/Sections/Experience";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";

function App() {
  return (
    <main className="font-chivo-mono">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
