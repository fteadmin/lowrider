interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.pexels.com/photos/1637210/pexels-photo-1637210.jpeg')"}}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#031100]/60 via-black/70 to-[#031100]/60"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D9BA84] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#CCB550] rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#D9BA84] via-[#CCB550] to-[#DCBD84] bg-clip-text text-transparent animate-pulse">
          World Low Rider Association
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Preserving, promoting, and celebrating lowrider culture through artistry, craftsmanship, and community across the globe
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold rounded-lg hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-lg shadow-[#D9BA84]/50"
          >
            Learn More
          </button>
          <button
            onClick={() => scrollToSection('events')}
            className="px-8 py-4 border-2 border-[#D9BA84] text-[#D9BA84] font-bold rounded-lg hover:bg-[#D9BA84] hover:text-[#031100] transition-all"
          >
            Explore Events
          </button>
        </div>
      </div>
    </section>
  );
}
