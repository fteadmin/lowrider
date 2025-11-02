import { Users, Award, Crown } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] bg-clip-text text-transparent">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              The <span className="text-[#D9BA84] font-semibold">World Low Rider Association (WLA)</span> is the global organisation dedicated to preserving, promoting, and celebrating lowrider culture through artistry, craftsmanship, and community.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-zinc-800 rounded-lg border border-[#D9BA84]/30">
                <Users className="w-8 h-8 text-[#D9BA84] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[#D9BA84]">Global</p>
                <p className="text-sm text-gray-400">Community</p>
              </div>
              <div className="text-center p-6 bg-zinc-800 rounded-lg border border-[#D9BA84]/30">
                <Award className="w-8 h-8 text-[#D9BA84] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[#D9BA84]">Heritage</p>
                <p className="text-sm text-gray-400">Preservation</p>
              </div>
              <div className="text-center p-6 bg-zinc-800 rounded-lg border border-[#D9BA84]/30">
                <Crown className="w-8 h-8 text-[#D9BA84] mx-auto mb-2" />
                <p className="text-2xl font-bold text-[#D9BA84]">Excellence</p>
                <p className="text-sm text-gray-400">In Craft</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D9BA84]/20 to-[#CCB550]/20 rounded-lg transform rotate-3"></div>
            <div className="relative bg-zinc-800 p-8 rounded-lg border border-[#D9BA84]/30">
              <h3 className="text-2xl font-bold mb-4 text-[#D9BA84]">Our Mission</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#D9BA84] mr-2">•</span>
                  <span>Celebrate the artistry and craftsmanship of lowrider culture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D9BA84] mr-2">•</span>
                  <span>Connect communities worldwide through shared passion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D9BA84] mr-2">•</span>
                  <span>Preserve the heritage and traditions for future generations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D9BA84] mr-2">•</span>
                  <span>Promote excellence in automotive design and customization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
