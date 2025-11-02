import { Calendar } from 'lucide-react';

export default function Events() {
  return (
    <section id="events" className="min-h-screen flex items-center py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] bg-clip-text text-transparent">Our Events</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] mx-auto mb-8"></div>
        </div>

        <div className="bg-gradient-to-br from-[#D9BA84]/20 to-[#031100]/50 p-8 md:p-12 rounded-2xl border-2 border-[#D9BA84]/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D9BA84]/10 rounded-full filter blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-12 h-12 text-[#D9BA84] mr-4" />
              <h3 className="text-4xl md:text-5xl font-bold text-[#D9BA84]">The Lo Lo Awards</h3>
            </div>

            <p className="text-xl text-center text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our flagship annual event — a spectacular 3-day gala celebrating automotive design, music, dance, and heritage
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-black/50 p-6 rounded-lg border border-[#D9BA84]/30">
                <h4 className="text-2xl font-bold text-[#D9BA84] mb-4">Outdoor Cultural Festival</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Live music performances celebrating lowrider culture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Traditional and contemporary dance showcases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Custom vehicle exhibitions and displays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Food, vendors, and community celebration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/50 p-6 rounded-lg border border-[#D9BA84]/30">
                <h4 className="text-2xl font-bold text-[#D9BA84] mb-4">Black-Tie Awards Ceremony</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Recognition of excellence in automotive design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Honoring master craftspeople and builders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Celebrating cultural ambassadors and innovators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Networking with global lowrider community leaders</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-300 mb-6">
                Experience the ultimate fusion of heritage, artistry, and celebration
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold rounded-lg hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-lg shadow-[#D9BA84]/50">
                Learn More About The Lo Lo Awards
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
