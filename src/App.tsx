import { LazyMotion, domAnimation } from "framer-motion";
import "./App.css";
import Hero from "./components/Sections/Hero";
import Navbar from "./components/Nav/Navbar";
import Experience from "./components/Sections/Experience";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import NavbarProvider from "./components/Nav/NavbarProvider";

function App() {
  return (
    <main className="font-chivo-mono">
      <LazyMotion features={domAnimation}>
        <NavbarProvider>
          <Navbar />
          <Hero />
          <Experience />
          <Projects />
          <Contact />
        </NavbarProvider>
      </LazyMotion>
    </main>
  );
}

export default App;
