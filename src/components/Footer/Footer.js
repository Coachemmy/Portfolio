import { useState } from 'react';
import { Link } from 'react-router-dom';
import PolicyModal from '../PolicyModal/PolicyModal';

const Footer = () => {
  const [policyModal, setPolicyModal] = useState({ isOpen: false, policy: null });

  const openPolicy = (policy) => {
    setPolicyModal({ isOpen: true, policy });
  };

  const closePolicy = () => {
    setPolicyModal({ isOpen: false, policy: null });
  };

  return (
    <>
      <footer className="relative overflow-hidden pt-16 pb-8 bg-white">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-50 via-white to-violet/5" />
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-aurora pointer-events-none" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-hotpink/12 blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-9s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

        {/* Top gradient divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-12">
            {/* Brand column */}
            <div className="md:col-span-5 animate-fadeUp">
              <Link to="/" className="group inline-flex items-center gap-2 mb-5">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white font-black text-lg shadow-juicy group-hover:scale-110 transition-transform duration-500">
                    CE
                  </div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-brand opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500" />
                </div>
                <span className="text-2xl font-black font-space tracking-tighter bg-gradient-brand bg-clip-text text-transparent">
                  CoachEmmy
                </span>
              </Link>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 max-w-md">
                Empowering you with <span className="font-bold text-primary">crypto trading</span>, <span className="font-bold text-hotpink">AI content creation</span>, and <span className="font-bold text-violet">modern programming</span> skills to thrive in the digital economy.
              </p>
              {/* Socials */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/coachemmy"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl glass border border-gray-200/60 hover:border-primary/30 hover:-translate-y-1 hover:shadow-juicy transition-all duration-500"
                >
                  <span className="text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">🐙</span>
                  <span className="text-sm font-bold text-gray-700 group-hover:text-primary transition-colors">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/coachemmyb"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl glass border border-gray-200/60 hover:border-skyblue/30 hover:-translate-y-1 hover:shadow-juicy transition-all duration-500"
                >
                  <span className="text-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">💼</span>
                  <span className="text-sm font-bold text-gray-700 group-hover:text-skyblue transition-colors">LinkedIn</span>
                </a>
                <a
                  href="https://wa.me/2348131309335"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl glass border border-gray-200/60 hover:border-mint/30 hover:-translate-y-1 hover:shadow-juicy transition-all duration-500"
                >
                  <span className="text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">💬</span>
                  <span className="text-sm font-bold text-gray-700 group-hover:text-mint transition-colors">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 animate-fadeUp" style={{ animationDelay: '0.08s' }}>
              <h4 className="font-black text-gray-900 mb-5 font-space tracking-tight flex items-center gap-2">
                <span className="w-8 h-1 rounded-full bg-gradient-brand" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { to: '/', label: 'Home', icon: '🏠' },
                  { to: '/#career-services', label: 'Career Services', icon: '🚀' },
                  { to: '/#tech-courses', label: 'Tech Courses', icon: '📚' },
                  { to: '/projects', label: 'Projects', icon: '💻' },
                  { to: '/contact', label: 'Contact', icon: '📮' },
                ].map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="group flex items-center gap-2.5 text-gray-600 hover:text-primary transition-colors text-sm md:text-base py-1.5"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">{link.icon}</span>
                      <span className="relative">
                        {link.label}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-brand group-hover:w-full transition-all duration-500 rounded-full" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="md:col-span-4 animate-fadeUp" style={{ animationDelay: '0.16s' }}>
              <h4 className="font-black text-gray-900 mb-5 font-space tracking-tight flex items-center gap-2">
                <span className="w-8 h-1 rounded-full bg-gradient-warm" />
                Policies & Legal
              </h4>
              <ul className="space-y-3 mb-6">
                {[
                  { policy: 'terms', label: 'Terms of Service', icon: '📜' },
                  { policy: 'privacy', label: 'Privacy Policy', icon: '🔒' },
                  { policy: 'refund', label: 'Refund Policy', icon: '💰' },
                ].map((item, i) => (
                  <li key={i}>
                    <button
                      onClick={() => openPolicy(item.policy)}
                      className="group flex items-center gap-2.5 text-gray-600 hover:text-hotpink transition-colors text-sm md:text-base py-1.5 w-full text-left"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">{item.icon}</span>
                      <span className="relative">
                        {item.label}
                        <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-gradient-warm group-hover:w-full transition-all duration-500 rounded-full" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              {/* Mini CTA */}
              <div className="relative overflow-hidden rounded-2xl p-5 bg-gradient-brand text-white group cursor-pointer" onClick={() => openPolicy('terms')}>
                <div className="absolute inset-0 shine-overlay opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/25 flex items-center justify-center text-xl backdrop-blur-sm">⚡</div>
                  <div>
                    <p className="font-black text-sm">Transparent Policies</p>
                    <p className="text-xs text-white/80">Your trust, my priority</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="relative border-t border-gray-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500 flex items-center gap-2">
              © {new Date().getFullYear()} <span className="font-bold text-gray-700">CoachEmmy</span>. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 flex items-center gap-2">
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                Building innovative solutions since 2019
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline font-semibold bg-gradient-brand bg-clip-text text-transparent">Made with 💖 + ☕</span>
            </p>
          </div>
        </div>
      </footer>

      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={closePolicy}
        policy={policyModal.policy}
      />
    </>
  );
};

export default Footer;
