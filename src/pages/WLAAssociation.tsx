import { Award, Users, Shield, Gift } from 'lucide-react';

export default function WLAAssociation() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] bg-clip-text text-transparent">
              WLA
            </h1>
            <p className="text-3xl md:text-4xl text-white font-light mb-4">World Low Rider Association</p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] mx-auto"></div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#D9BA84] mb-6">Join the Global Movement</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                The premier global organization for lowrider culture, connecting enthusiasts, builders, artists, and communities worldwide.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Through our worldwide network, we foster collaboration, innovation, and respect for the craftsmanship that has made lowriding an iconic cultural phenomenon.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900 p-6 rounded-xl border border-[#D9BA84]/30 hover:border-[#D9BA84]/60 transition-all">
                <Users className="w-10 h-10 text-[#D9BA84] mb-3" />
                <h3 className="text-lg font-bold text-[#D9BA84] mb-2">Global Network</h3>
                <p className="text-gray-400 text-sm">Connect worldwide</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-[#D9BA84]/30 hover:border-[#D9BA84]/60 transition-all">
                <Shield className="w-10 h-10 text-[#D9BA84] mb-3" />
                <h3 className="text-lg font-bold text-[#D9BA84] mb-2">Official Recognition</h3>
                <p className="text-gray-400 text-sm">Certified membership</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-[#D9BA84]/30 hover:border-[#D9BA84]/60 transition-all">
                <Award className="w-10 h-10 text-[#D9BA84] mb-3" />
                <h3 className="text-lg font-bold text-[#D9BA84] mb-2">Exclusive Events</h3>
                <p className="text-gray-400 text-sm">Lo Lo Awards access</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-xl border border-[#D9BA84]/30 hover:border-[#D9BA84]/60 transition-all">
                <Gift className="w-10 h-10 text-[#D9BA84] mb-3" />
                <h3 className="text-lg font-bold text-[#D9BA84] mb-2">Member Perks</h3>
                <p className="text-gray-400 text-sm">Discounts & more</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-2xl overflow-hidden border border-[#D9BA84]/30">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 p-10 flex flex-col justify-center bg-black/40">
                <div className="mb-8">
                  <h2 className="text-5xl font-bold text-[#D9BA84] mb-2">$20</h2>
                  <p className="text-xl text-gray-400">per year</p>
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Annual Membership</h3>
                <p className="text-gray-300 mb-8">
                  Join thousands of passionate lowrider enthusiasts and become part of the global community.
                </p>
                <button className="px-10 py-4 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold text-lg rounded-lg hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-lg shadow-[#D9BA84]/50">
                  Join Now
                </button>
              </div>

              <div className="lg:col-span-3 p-10">
                <h4 className="text-2xl font-bold text-[#D9BA84] mb-6">Membership Benefits</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Official WLA certificate</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Exclusive member ID card</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Welcome merchandise package</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Members-only community access</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Monthly digital newsletter</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Member registry listing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Lo Lo Awards priority registration</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Event ticket discounts</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Exclusive event invitations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Industry networking opportunities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Featured showcase opportunities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-[#D9BA84] text-xl mt-1">✓</span>
                    <span className="text-gray-300">Educational resources & workshops</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
