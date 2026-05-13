import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeContext } from './contexts/theme';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import CareerServices from './components/CareerServices/CareerServices';
import TechCourses from './components/TechCourses/TechCourses';
import WebServices from './components/WebServices/WebServices';
import TravelServices from './components/TravelServices/TravelServices';
import Reviews from './components/Reviews/Reviews';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import Affiliate from './components/Affiliate/Affiliate';
import Chatbot from './components/Chatbot/Chatbot';
import AboutPage from './components/AboutPage/AboutPage';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div id="top" className={`${themeName} font-poppins min-h-screen transition-colors duration-300 bg-white`}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main className="pt-24">
              <About />
              <CareerServices />
              <TechCourses />
              <WebServices />
              <TravelServices />
              <Reviews />
              <FAQ />
            </main>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
};

export default App;