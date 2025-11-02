import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import WLAAssociation from './pages/WLAAssociation';
import WealthLegacy from './pages/WealthLegacy';

function App() {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation scrollToSection={location.pathname === '/' ? scrollToSection : undefined} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wla-association" element={<WLAAssociation />} />
        <Route path="/wealth-legacy" element={<WealthLegacy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
