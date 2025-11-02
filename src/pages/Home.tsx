import Hero from '../components/Hero';
import About from '../components/About';
import Events from '../components/Events';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Events />
      <Partners />
      <Contact />
    </div>
  );
}
