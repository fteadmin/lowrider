export default function Partners() {
  const partners = [
    { name: 'Randolph Enterprises' },
    { name: 'FTE' },
    { name: 'Founding Members' }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] bg-clip-text text-transparent">
            Our Partners
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Working together to build a stronger community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-12 rounded-2xl border-2 border-[#D9BA84]/30 hover:border-[#D9BA84]/60 transition-all hover:transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white text-center">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
