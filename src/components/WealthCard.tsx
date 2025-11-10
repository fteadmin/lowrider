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
    <div className="bg-zinc-900 rounded-2xl border-2 border-[#D9BA84]/40 hover:border-[#D9BA84]/80 transition-all h-full p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <div className="flex items-center">
          <div className="bg-[#D9BA84]/20 p-3 rounded-xl mr-4">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#D9BA84]">{title}</h2>
            <p className="text-gray-400 text-xs sm:text-sm">{subtitle}</p>
          </div>
        </div>
        {badgeIcon}
      </div>

      <div className="bg-black/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border-2 border-[#D9BA84]/60 mb-6">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-gray-400 text-xs sm:text-sm mb-1">Investment</p>
            <p className="text-2xl sm:text-4xl font-bold text-[#D9BA84]">{investment}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs sm:text-sm mb-1">Member Dividend</p>
            <p className="text-2xl sm:text-4xl font-bold text-[#D9BA84]">{dividend}</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#D9BA84]/30 text-center">
          <p className="text-xs sm:text-sm text-gray-400">{contract}</p>
          <p className="text-lg sm:text-xl font-bold text-white mt-1">{roi}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
        {description}
      </p>

      <div className="space-y-3 sm:space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-black/60 backdrop-blur-sm p-3 sm:p-5 rounded-xl border border-[#D9BA84]/20">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 sm:w-6 sm:h-6 text-[#D9BA84] mt-0.5 flex-shrink-0">
                {benefit.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">{benefit.title}</h4>
                <div className="text-gray-400 text-xs sm:text-sm leading-relaxed space-y-0.5 sm:space-y-1">
                  {benefit.description.split('\n').map((line, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      {line.startsWith('•') ? (
                        <>
                          <span className="text-[#CCB550] font-bold flex-shrink-0">●</span>
                          <span className="break-words">{line.replace('• ', '')}</span>
                        </>
                      ) : (
                        <span className="break-words">{line}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] font-bold text-base sm:text-lg rounded-xl hover:from-[#CCB550] hover:to-[#DCBD84] transform hover:scale-105 transition-all shadow-xl shadow-[#D9BA84]/40">
        {buttonText}
      </button>
    </div>
  );
}
