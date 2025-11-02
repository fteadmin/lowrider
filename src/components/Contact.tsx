export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] bg-clip-text text-transparent">Contact Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Get in touch with us to learn more about membership, events, or our mission
          </p>
        </div>

        <div className="bg-zinc-800 p-8 md:p-12 rounded-2xl border border-[#D9BA84]/30">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-black border border-[#D9BA84]/30 rounded-lg text-white focus:outline-none focus:border-[#D9BA84] transition-colors resize-none"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold rounded-lg hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-lg shadow-[#D9BA84]/50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
