import About from "./components/About";
import Formation from "./components/Formation";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Project from "./components/Project";

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      {/* <Particles
        className="absolute inset-0 z-0 hidden md:block"
        quantity={100}
        ease={80}
        color="#ffffffff"
        refresh
      /> */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Formation />
        <div className="section-divider" />
        <Project />
        <div className="section-divider" />
      </div>
    </main>
  );
}

export default App;
