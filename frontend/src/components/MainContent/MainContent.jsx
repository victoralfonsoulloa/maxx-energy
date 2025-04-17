import { RevealOnScroll } from "../../RevealOnScroll";

export const MainContent = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Maxx Energy
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Are you ready to make the switch to cleaner, more efficient energy solutions? At Maxx Energy, we’re committed to powering your home and business with sustainable energy solutions that not only reduce your carbon footprint but also save you money.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="border border-yellow-500/50 text-yellow-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};