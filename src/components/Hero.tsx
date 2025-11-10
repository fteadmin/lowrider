import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

interface Slide {
  id: number;
  backgroundImage: string;
  title: string;
  description: string;
  buttons: Array<{
    label: string;
    action: string;
    isPrimary: boolean;
    isLink?: boolean;
  }>;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides: Slide[] = [
    {
      id: 1,
      backgroundImage: 'https://images.pexels.com/photos/1637210/pexels-photo-1637210.jpeg',
      title: 'World Lowrider Association',
      description: 'Preserving, promoting, and celebrating lowrider culture through artistry, craftsmanship, and community across the globe',
      buttons: [
        { label: 'Learn More', action: 'about', isPrimary: true },
        { label: 'Explore Events', action: 'events', isPrimary: false }
      ]
    },
    {
      id: 2,
      backgroundImage: 'https://images.pexels.com/photos/1280560/pexels-photo-1280560.jpeg',
      title: 'Ride to Win Competition!',
      description: 'Show off your lowrider pride and take home cash prizes! This is your chance to represent the culture, the craftsmanship, and the beauty of your ride to the world.',
      buttons: [
        { label: 'Learn About Competition', action: 'competition', isPrimary: true, isLink: true },
        { label: 'Purchase Membership', action: 'wla-association', isPrimary: false, isLink: true }
      ]
    }
  ];

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center transition-all duration-500" style={{backgroundImage: `url('${currentSlideData.backgroundImage}')`}}></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#031100]/60 via-black/70 to-[#031100]/60"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D9BA84] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#CCB550] rounded-full filter blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#D9BA84] via-[#CCB550] to-[#DCBD84] bg-clip-text text-transparent animate-pulse">
          {currentSlideData.title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          {currentSlideData.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {currentSlideData.buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => {
                if (button.isLink) {
                  navigate(`/${button.action}`);
                } else {
                  scrollToSection(button.action);
                }
              }}
              className={`px-8 py-4 font-bold rounded-lg transform hover:scale-105 transition-all ${
                button.isPrimary
                  ? 'bg-gradient-to-r from-[#D9BA84] to-[#CCB550] text-[#031100] hover:from-[#CCB550] hover:to-[#DCBD84] shadow-lg shadow-[#D9BA84]/50'
                  : 'border-2 border-[#D9BA84] text-[#D9BA84] hover:bg-[#D9BA84] hover:text-[#031100]'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex items-center gap-8 z-20">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-[#D9BA84]/20 hover:bg-[#D9BA84]/40 border border-[#D9BA84]/50 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-[#D9BA84]" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-[#D9BA84]'
                  : 'w-3 bg-[#D9BA84]/50 hover:bg-[#D9BA84]/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-[#D9BA84]/20 hover:bg-[#D9BA84]/40 border border-[#D9BA84]/50 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-[#D9BA84]" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-32 right-8 z-20 text-[#D9BA84] text-sm font-semibold">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
}
