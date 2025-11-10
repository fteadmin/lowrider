import { ReactNode } from 'react';

interface BenefitItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface WealthCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  badgeIcon: ReactNode;
  investment: string;
  dividend: string;
  contract: string;
  roi: string;
  description: string;
  benefits: BenefitItem[];
  buttonText: string;
}

export default function WealthCard({
  icon,
  title,
  subtitle,
  badgeIcon,
  investment,
  dividend,
  contract,
  roi,
  description,
  benefits,
  buttonText,
}: WealthCardProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl border-2 border-[#D9BA84]/40 hover:border-[#D9BA84]/80 transition-all h-full p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-[#D9BA84]/20 p-3 rounded-xl mr-4">
            {icon}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#D9BA84]">{title}</h2>
            <p className="text-gray-400 text-sm">{subtitle}</p>
          </div>
        </div>
        {badgeIcon}
      </div>

      <div className="bg-black/80 backdrop-blur-sm p-6 rounded-xl border-2 border-[#D9BA84]/60 mb-6">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-gray-400 text-sm mb-1">Investment</p>
            <p className="text-4xl font-bold text-[#D9BA84]">{investment}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Member Dividend</p>
            <p className="text-4xl font-bold text-[#D9BA84]">{dividend}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#D9BA84]/30 text-center">
          <p className="text-sm text-gray-400">{contract}</p>
          <p className="text-xl font-bold text-white mt-1">{roi}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
        {description}
      </p>

      <div className="space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-black/60 backdrop-blur-sm p-5 rounded-xl border border-[#D9BA84]/20">
            <div className="flex items-start">
              <div className="w-6 h-6 text-[#D9BA84] mr-3 mt-1 flex-shrink-0">
                {benefit.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                <div className="text-gray-400 text-sm leading-relaxed space-y-1">
                  {benefit.description.split('\n').map((line, i) => (
                    <div key={i} className="flex items-start">
                      {line.startsWith('•') ? (
                        <>
                          <span className="text-[#CCB550] font-bold mr-2">●</span>
                          <span>{line.replace('• ', '')}</span>
                        </>
                      ) : (
                        <span>{line}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full px-8 py-5 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold text-lg rounded-xl hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-xl shadow-[#D9BA84]/40">
        {buttonText}
      </button>
    </div>
  );
}
