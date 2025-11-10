interface Partner {
  name: string;
  description: string;
}

const PartnerCard = ({ partner }: { partner: Partner }) => {
  return (
    <div className="bg-zinc-800 p-8 rounded-2xl border-2 border-[#D9BA84]/30 hover:border-[#D9BA84]/60 transition-all overflow-hidden h-full flex flex-col">
      <h3 className="text-2xl font-bold text-white mb-4">
        {partner.name}
      </h3>
      <p className="text-gray-300 leading-relaxed flex-1">
        {partner.description}
      </p>
    </div>
  );
};

export default function Partners() {
  const partners: Partner[] = [
    {
      name: 'FTE',
      description: 'Future Trends Enterprise (FTE) is a forward-thinking technology company that seamlessly integrates advanced solutions across digital and physical spaces.'
    },
    {
      name: 'Randolph Enterprises',
      description: 'A dynamic multi-industry conglomerate with a specialized automotive division, Lowrider Solutions, featuring four patented technologies that revolutionize the lowrider industry while honoring its rich cultural heritage and tradition.'
    },
    {
      name: 'Founding Members',
      description: 'Pioneers and leaders of lowrider culture who have joined forces with WLA, FTE, and Randolph Enterprises to create a cultural movement dedicated to preserving and elevating lowrider heritage through decades of authentic artistry, tradition, and community stewardship.'
    }
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
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}
