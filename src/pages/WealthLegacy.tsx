import { TrendingUp, Crown, Users, DollarSign, Award, Shield, Sparkles } from 'lucide-react';
import WealthCard from '../components/WealthCard';

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
                Lowrider Wealth and Legacy is the first global membership club created for our community—where the heart of lowrider culture becomes a pathway to prosperity. We honor the traditions, creativity, and unity that define the movement and turn them into real opportunities for financial growth. Through the collective strength of our community, the power of shared purchasing, and products and services that reflect who we are, we’re creating policies and practices that build profit with purpose. Together, we’re transforming cultural pride into lasting wealth and legacy for generations to come.

              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            <WealthCard
              icon={<TrendingUp className="w-10 h-10 text-[#D9BA84]" />}
              title="Founding Member"
              subtitle="Elite Status | Maximum Returns | Legacy Building"
              badgeIcon={<Sparkles className="w-8 h-8 text-[#D9BA84]" />}
              investment="$5,000"
              dividend="$125,000"
              contract="2 Year Contract"
              roi="25X Return on Investment"
              description="As a Founding Member, you receive the highest tier of benefits:"
              benefits={[
                {
                  icon: <DollarSign className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Financial Benefits",
                  description: "Receive $125,000 after 2 years through smart contract technology\n• Equity Partnerships: Direct ownership stakes in partner company Randolph Enterprises\n• Parent Company Shares: Equity participation in Future Trends Enterprise\n• Priority Capital Access: First access to FTE Venture Capital CDFI lending opportunities\n• Profit Sharing: Participate in organizational profit distribution"
                },
                {
                  icon: <Users className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Governance and Leadership",
                  description: "• Voting Rights: Active participation in organizational decisions and strategic direction\n• Event Hosting: Ability to host and sponsor official Low Riders Wealth and Legacy events\n• Advisory Board Eligibility: Opportunity to serve on organizational advisory boards\n• Cultural Leadership: Recognition as a pioneer building tomorrow's lowrider legacy"
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Business Development Suite",
                  description: "• Custom Business Entity Creation: Tailored corporate structures designed for maximum scaling potential\n• Advanced Tax Protection: Strategic tax optimization frameworks to maximize efficiency\n• Enhanced Funding Capacity: Priority access to capital resources and exclusive investment opportunities\n• Professional Consultation: Direct access to business development experts and financial advisors"
                },
                {
                  icon: <Shield className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Premium Event Access",
                  description: "• VIP Access to The Lo-Lo Awards: Premium seating, backstage passes, and exclusive networking\n• Private Meet & Greets: Intimate sessions with lowrider legends and industry leaders\n• Founding Member Recognition: Special acknowledgment at all major events and ceremonies\n• Member Marketplace Priority: First access to exclusive vendor opportunities and partnerships"
                }
              ]}
              buttonText="Become a Founding Member"
            />

            <WealthCard
              icon={<Crown className="w-10 h-10 text-[#D9BA84]" />}
              title="Legacy Member"
              subtitle="Building Generational Wealth Through Cultural Pride"
              badgeIcon={<Sparkles className="w-8 h-8 text-[#D9BA84]" />}
              investment="$500"
              dividend="$25,000"
              contract="2 Year Contract"
              roi="50X Return on Investment"
              description="As a Legacy Member, you gain access to:"
              benefits={[
                {
                  icon: <DollarSign className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Member Dividend",
                  description: "• Receive $25,000 after 2 years through smart contract technology"
                },
                {
                  icon: <Users className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Exclusive Networking Events",
                  description: "• Priority access to The Lo-Lo Awards and other cultural celebrations"
                },
                {
                  icon: <Award className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Community Recognition",
                  description: "• Official Legacy Member status and recognition at all events"
                },
                {
                  icon: <Sparkles className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Cultural Preservation",
                  description: "• Direct contribution to preserving and promoting lowrider heritage"
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Business Development Support",
                  description: "• Access to educational resources and community networking"
                },
                {
                  icon: <Shield className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Member Marketplace Access",
                  description: "• Exclusive access to member-only marketplace and vendor opportunities"
                },
                {
                  icon: <Crown className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Founding Member Nomination",
                  description: "• Eligible for upgrade to Founding Member status with expanded benefits"
                },
                {
                  icon: <Users className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Community Building",
                  description: "• Creating lasting connections across 75+ countries"
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-[#D9BA84]" />,
                  title: "Wealth Generation",
                  description: "• Providing unprecedented financial opportunities"
                }
              ]}
              buttonText="Become a Legacy Member"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
