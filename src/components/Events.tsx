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
              <h3 className="text-4xl md:text-5xl font-bold text-[#D9BA84]">Company Launch Party</h3>
            </div>

            <p className="text-xl text-center text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us for an elevated celebration event, meaningful connections, and a first look at our vision and growth strategy.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-black/50 p-6 rounded-lg border border-[#D9BA84]/30">
                <h4 className="text-2xl font-bold text-[#D9BA84] mb-4">Event Details</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Date:</strong> Sunday, November 16</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Time:</strong> 4:00 PM - 8:00 PM</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Location:</strong> Long Beach, CA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Address:</strong> Provided upon registration</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/50 p-6 rounded-lg border border-[#D9BA84]/30">
                <h4 className="text-2xl font-bold text-[#D9BA84] mb-4">What to Expect</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Catered By Good Chef</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Special Presentation By Randolph Enterprises</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Investor & Founders' Networking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span>Exclusive Community Experience</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-black/50 p-6 rounded-lg border border-[#D9BA84]/30">
                <h4 className="text-2xl font-bold text-[#D9BA84] mb-4">Who Should Attend</h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Angel & Seed-Stage Investors</strong> seeking culturally anchored, high-upside opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Prospective Founding Members</strong> and strategic partners ready to build together</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Lowrider Community Leaders</strong> and enthusiasts passionate about the culture</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D9BA84] mr-2">✦</span>
                    <span><strong>Allies from Outside the Community</strong> who value inclusive, sustainable growth</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black/50 p-6 rounded-lg border border-[#D9BA84]/30">
                <h4 className="text-2xl font-bold text-[#D9BA84] mb-4">Attire</h4>
                <p className="text-gray-300 text-lg">
                  <strong>Smart Casual / Elevated Street</strong>
                </p>
                <p className="text-gray-400 text-sm mt-4">
                  Dress to impress while expressing your personal style. This is a celebration of culture and community—come as your best self.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-300 mb-6">
                Limited spots available. Secure your place now!
              </p>
              <a 
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=A2w-Yv3DqUmH7mcWHK2RUHAkIqbLoyNLozdu3zg82alUMDRYVTlGSUFSU0dQNzVSWVY4RjNJQzVKMy4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold rounded-lg hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-lg shadow-[#D9BA84]/50"
              >
                RSVP Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
