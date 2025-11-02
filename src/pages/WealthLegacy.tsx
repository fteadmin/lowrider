import { TrendingUp, Crown, Users, BookOpen, DollarSign, Award, Shield, Sparkles } from 'lucide-react';

export default function WealthLegacy() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.85)), url('https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] bg-clip-text text-transparent">
              Wealth & Legacy
            </h1>
            <p className="text-2xl md:text-3xl text-white font-light mb-4">
              Building Generational Prosperity in Lowrider Culture
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Empowering the lowrider community through financial education, business development, and legacy preservation
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 rounded-3xl border border-[#D9BA84]/40 p-12">
              <h2 className="text-4xl font-bold text-[#D9BA84] mb-6 text-center">Our Vision</h2>
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                Low Riders Wealth and Legacy represents the first worldwide membership club designed specifically for our community. We transform the lowrider culture's rich traditions into tangible financial opportunities, creating unprecedented pathways to wealth building. By combining traditional lowrider values with cutting-edge blockchain technology, we're building an ecosystem where cultural pride directly translates into generational wealth for families across the globe.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-zinc-900 rounded-2xl border-2 border-[#D9BA84]/40 hover:border-[#D9BA84]/80 transition-all h-full p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-[#D9BA84]/20 p-3 rounded-xl mr-4">
                    <TrendingUp className="w-10 h-10 text-[#D9BA84]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#D9BA84]">Founding Member</h2>
                    <p className="text-gray-400 text-sm">Wealth Builder Package</p>
                  </div>
                </div>
                <Sparkles className="w-8 h-8 text-[#D9BA84]" />
              </div>

              <div className="bg-black/80 backdrop-blur-sm p-6 rounded-xl border-2 border-[#D9BA84]/60 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Investment</p>
                    <p className="text-4xl font-bold text-[#D9BA84]">$5,000</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Guaranteed Payout</p>
                    <p className="text-4xl font-bold text-[#D9BA84]">$125,000</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#D9BA84]/30 text-center">
                  <p className="text-sm text-gray-400">2 Year Contract</p>
                  <p className="text-xl font-bold text-white mt-1">25X Return on Investment</p>
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                For entrepreneurs and professionals ready to build financial independence while honoring lowrider heritage.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-[#D9BA84]/20">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-[#D9BA84] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Financial Education</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Comprehensive workshops covering budgeting, investing, credit management, and wealth-building strategies
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-[#D9BA84]/20">
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-[#D9BA84] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Business Mentorship</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        One-on-one guidance from successful entrepreneurs in the automotive and creative industries
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-[#D9BA84]/20">
                  <div className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-[#D9BA84] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Investment Strategies</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Learn to grow your wealth through stocks, real estate, and business ventures
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-[#D9BA84]/20">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-[#D9BA84] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Funding Opportunities</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Access to small business loans, grants, and community investment programs
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full px-8 py-5 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold text-lg rounded-xl hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-xl shadow-[#D9BA84]/40">
                Become a Founding Member
              </button>
            </div>

            <div className="bg-zinc-900 rounded-2xl border-2 border-[#D9BA84]/40 hover:border-[#D9BA84]/80 transition-all h-full p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="bg-[#D9BA84]/20 p-3 rounded-xl mr-4">
                    <Crown className="w-10 h-10 text-[#D9BA84]" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-[#D9BA84]">Legacy Member</h2>
                    <p className="text-gray-400 text-sm">Heritage Keeper Package</p>
                  </div>
                </div>
                <Sparkles className="w-8 h-8 text-[#D9BA84]" />
              </div>

              <div className="bg-black/80 backdrop-blur-sm p-6 rounded-xl border-2 border-[#D9BA84]/60 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Investment</p>
                    <p className="text-4xl font-bold text-[#D9BA84]">$500</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Member Dividend</p>
                    <p className="text-4xl font-bold text-[#D9BA84]">$25,000</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#D9BA84]/30 text-center">
                  <p className="text-sm text-gray-400">2 Year Contract</p>
                  <p className="text-xl font-bold text-white mt-1">50X Return on Investment</p>
                </div>
              </div>

              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                For families committed to preserving culture and passing down prosperity for generations to come.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-[#D9BA84]/20">
                  <div className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-[#D9BA84] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Generational Wealth Transfer</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Strategic planning to protect and pass down assets, businesses, and property to future generations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-[#D9BA84]/20">
                  <div className="flex items-start">
                    <BookOpen className="w-6 h-6 text-[#D9BA84] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Estate Planning</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Professional guidance on wills, trusts, and legacy documentation to secure your family's future
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-[#D9BA84]/20">
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-[#D9BA84] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Cultural Preservation</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Archive your family's lowrider history, stories, and vehicles for future generations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-[#D9BA84]/20">
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-[#D9BA84] mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2">Exclusive Legacy Workshops</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Special sessions on family governance, storytelling, and preserving traditions with financial security
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full px-8 py-5 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold text-lg rounded-xl hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-xl shadow-[#D9BA84]/40">
                Become a Legacy Member
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
