import { Camera, Video, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Competition() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] bg-clip-text text-transparent">
            💥 Ride to Win Competition!
          </h1>
          <p className="text-3xl font-bold text-[#D9BA84] mb-4">
            The World Lowrider Association Presents
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Show off your lowrider pride and take home cash prizes! This is your chance to represent the culture, the craftsmanship, and the beauty of your ride to the world.
          </p>
        </div>

        {/* Membership Requirement Notice */}
        <div className="mb-16 text-center">
          <p className="text-xl text-gray-300 mb-6">
            To enter this competition, you <span className="font-bold text-[#D9BA84]">must have an active annual WLA membership</span>.
          </p>
          <Link to="/wla-association" className="inline-block px-8 py-3 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold rounded-lg hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-lg shadow-[#D9BA84]/50">
            Get Annual Membership
          </Link>
        </div>

        {/* Two Ways to Enter */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-[#D9BA84] text-center mb-12">🏆 TWO WAYS TO ENTER</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Photo Contest */}
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-lg border-2 border-[#D9BA84]/50 hover:border-[#D9BA84] transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Camera className="w-10 h-10 text-[#D9BA84]" />
                <h3 className="text-3xl font-bold text-[#D9BA84]">Photo Contest</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg">
                <span className="font-semibold">Online Submission</span>
              </p>

              <div className="space-y-4 mb-8 text-gray-300">
                <p>✓ Submit your best photo of your lowrider through our official portal.</p>
                <p>✓ Entries must feature the car only — no models, people, or other objects.</p>
                <p>✓ Choose one contest only — either photo or video.</p>
              </div>

              <div className="bg-zinc-700/50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-[#D9BA84] mb-4">Prize Structure:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-yellow-400">🥇 1st Place</span>
                    <span className="font-bold text-[#CCB550]">$100</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-300">🥈 2nd Place</span>
                    <span className="font-bold text-[#D9BA84]">$50</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-orange-600">🥉 3rd Place</span>
                    <span className="font-bold text-[#D9BA84]">$25</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => window.open('https://form.jotform.com/253106845491055', '_blank')}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold rounded-lg hover:from-[#CCB550] hover:to-[#DCBD84] transition-all"
              >
                Submit Photo Entry
              </button>
            </div>

            {/* Video Contest */}
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-lg border-2 border-[#D9BA84]/50 hover:border-[#D9BA84] transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Video className="w-10 h-10 text-[#D9BA84]" />
                <h3 className="text-3xl font-bold text-[#D9BA84]">Video Contest</h3>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg">
                <span className="font-semibold">Online Submission</span>
              </p>

              <div className="space-y-4 mb-8 text-gray-300">
                <p>✓ Upload a short clip showcasing your car in motion or shining in style.</p>
                <p>✓ Videos must focus solely on the vehicle.</p>
                <p>✓ Choose one contest only — either photo or video.</p>
              </div>

              <div className="bg-zinc-700/50 p-6 rounded-lg mb-6">
                <h4 className="text-xl font-bold text-[#D9BA84] mb-4">Prize Structure:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-yellow-400">🥇 1st Place</span>
                    <span className="font-bold text-[#CCB550]">$100</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-gray-300">🥈 2nd Place</span>
                    <span className="font-bold text-[#D9BA84]">$50</span>
                  </div>
                  <div className="flex justify-between items-center text-lg">
                    <span className="text-orange-600">🥉 3rd Place</span>
                    <span className="font-bold text-[#D9BA84]">$25</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => window.open('https://form.jotform.com/253107586119156', '_blank')}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold rounded-lg hover:from-[#CCB550] hover:to-[#DCBD84] transition-all"
              >
                Submit Video Entry
              </button>
            </div>
          </div>
        </div>

        {/* Live Event Bonus */}
        <div className="bg-gradient-to-r from-[#D9BA84]/20 to-[#CCB550]/20 border-3 border-[#D9BA84] rounded-2xl p-12 mb-16">
          <div className="flex items-center gap-4 mb-8">
            <Zap className="w-12 h-12 text-[#CCB550]" />
            <div>
              <h2 className="text-4xl font-bold text-[#D9BA84]">🚗 LIVE EVENT BONUS!</h2>
              <p className="text-xl text-[#CCB550]">Sunday, November 16th</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-200 mb-8">
            If you're attending the World Lowrider Association Event on Nov 16th, you can enter the in-person contest for even bigger rewards!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-zinc-800 p-6 rounded-lg border border-[#D9BA84]/50 text-center">
              <p className="text-4xl mb-3">🥇</p>
              <p className="text-gray-300 font-semibold mb-2">1st Place</p>
              <p className="text-3xl font-bold text-[#CCB550]">$250</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-[#D9BA84]/50 text-center">
              <p className="text-4xl mb-3">🥈</p>
              <p className="text-gray-300 font-semibold mb-2">2nd Place</p>
              <p className="text-3xl font-bold text-[#D9BA84]">$100</p>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-[#D9BA84]/50 text-center">
              <p className="text-4xl mb-3">🥉</p>
              <p className="text-gray-300 font-semibold mb-2">3rd Place</p>
              <p className="text-3xl font-bold text-[#D9BA84]">$75</p>
            </div>
          </div>

          <p className="text-gray-300 text-lg">
            <span className="text-[#D9BA84] font-bold">Event Details:</span> Sunday, November 16th | Long Beach, California
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 text-[#D9BA84] hover:text-[#CCB550] font-semibold transition-all"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
