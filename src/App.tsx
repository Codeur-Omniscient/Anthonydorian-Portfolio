import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Formation from "./components/Formation";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import Stack from "./components/Stack";

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navigation />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Stack />
        <div className="section-divider" />
        <Formation />
        <div className="section-divider" />
        <Project />
        <div className="section-divider" />
        <Contact />
        <div className="section-divider" />
        <Footer />
      </div>
    </main>
  );
}

export default App;
