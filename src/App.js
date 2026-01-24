// src/App.js
import { useContext, useState } from 'react';
import { ThemeContext } from './contexts/theme';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CryptoModal from './components/CryptoModal/CryptoModal'; // 👈 NEW
import './App.css';
import PortfolioGallery from './components/PortfolioGallery/PortfolioGallery';
;

const myWorks = [

   {
    title: "K-CALC Mobile App",
    description: "Advanced scientific calculator.",
    src: "/videos/v2.mp4",
    type: "video",
    tags: ["Calculator", "Mobile App"]
  },
  {
    title: "China-Africa Workshop",
    description: "Photo from China-Africa Symposium.",
    src: "/images/i2.jpg",
    type: "image",
    tags: ["Symposium", "China-Africa"]
  },
   {
    title: "Faceless AI",
    description: "Content creation using AI.",
    src: "/images/i3.png",
    type: "image",
    tags: ["AI", "Content Creation"]
  },
];

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [isCryptoModalOpen, setIsCryptoModalOpen] = useState(false);

  return (
    <div id="top" className={`${themeName} app`}>

      <main>
        <About />
        <PortfolioGallery works={myWorks} autoPlay={false} interval={6000} />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />

      {/* Modal */}
      <CryptoModal
        isOpen={isCryptoModalOpen}
        onClose={() => setIsCryptoModalOpen(false)}
      />
    </div>
  );
};

export default App;