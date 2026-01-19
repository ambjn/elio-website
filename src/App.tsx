import { Hero } from "./components/Hero";
import { ActionButtons } from "./components/ActionButtons";
import { ParticleBackground } from "./components/ParticleBackground";
import { Footer } from "./components/Footer";

const App = () => (
  <div className="relative min-h-screen bg-[#09090B] overflow-hidden flex flex-col items-center justify-center selection:bg-[#D6F248] selection:text-black">
    <div className="absolute inset-0 z-0 spotlight-bg" />
    <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20" />
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D6F248]/5 rounded-full blur-[120px] pointer-events-none" />

    <main className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col items-center text-center pb-32 md:pb-24">
      <Hero />
      <ActionButtons />
    </main>

    <ParticleBackground />
    <Footer />
  </div>
);

export default App;
