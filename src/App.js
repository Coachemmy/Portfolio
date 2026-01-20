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

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  const [isCryptoModalOpen, setIsCryptoModalOpen] = useState(false);

  return (
    <div id="top" className={`${themeName} app`}>

      <main>
        <About />
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