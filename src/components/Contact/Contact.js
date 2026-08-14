import { useEffect, useRef, useState } from 'react';
import { contact } from '../../portfolio';
import FloatingBubbles from '../FloatingBubbles/FloatingBubbles';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  if (!contact.email) return null;

  const channels = [
    {
      icon: '📧',
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      gradient: 'from-primary to-violet',
      glow: 'bg-primary/25',
      delay: 0,
    },
    {
      icon: '💬',
      label: 'WhatsApp',
      value: 'Chat instantly',
      href: contact.whatsapp,
      gradient: 'from-mint to-skyblue',
      glow: 'bg-mint/25',
      delay: 1,
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'Let\'s connect',
      href: contact.social?.linkedin,
      gradient: 'from-skyblue to-violet',
      glow: 'bg-skyblue/25',
      delay: 2,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-50 via-white to-primary/5" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 animate-gradientMesh" />
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-primary/15 blur-3xl animate-aurora pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-hotpink/12 blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-6s' }} />
      <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full bg-mint/10 blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-12s' }} />

      <FloatingBubbles count={5} color="hotpink" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}`}>
          <span className="btn--chip mb-5">
            <span>📮</span>
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-space tracking-tighter-2">
            Let's Start <span className="text-gradient-brand">Your Journey</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to level up? Pick your favorite channel — I respond <span className="font-bold text-primary">fast</span> and I'm super excited to meet you! ✨
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {channels.map((ch, i) => (
            <a
              key={i}
              href={ch.href}
              target="_blank"
              rel="noreferrer"
              className={`tilt-3d-wrap transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-md'}`}
              style={{ transitionDelay: `${0.1 + ch.delay * 120}ms` }}
            >
              <div className="tilt-3d h-full">
                <div className="relative h-full card-modern border-gradient group p-7 md:p-9 text-center overflow-hidden">
                  {/* Glow bg */}
                  <div className={`absolute -top-16 -right-16 w-48 h-48 rounded-full ${ch.glow} blur-3xl group-hover:scale-150 transition-all duration-700`} />
                  <div className="absolute inset-0 shine-overlay opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Big icon */}
                    <div className="tilt-layer-deep mx-auto mb-6 relative">
                      <div className={`w-20 h-20 md:w-24 md:h-24 rounded-[1.75rem] bg-gradient-to-br ${ch.gradient} flex items-center justify-center text-4xl md:text-5xl shadow-juicy group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 mx-auto`}>
                        {ch.icon}
                      </div>
                      <div className={`absolute inset-0 rounded-[1.75rem] bg-gradient-to-br ${ch.gradient} opacity-20 blur-2xl group-hover:opacity-40 group-hover:scale-110 transition-all duration-500`} />
                    </div>

                    {/* Label */}
                    <h3 className="tilt-layer-mid text-xl md:text-2xl font-black text-gray-900 mb-2 font-space tracking-tight">
                      {ch.label}
                    </h3>

                    {/* Value */}
                    <p className={`tilt-layer-near text-sm md:text-base font-bold bg-gradient-to-br ${ch.gradient} bg-clip-text text-transparent mb-6 break-words`}>
                      {ch.value}
                    </p>

                    {/* CTA */}
                    <div className="tilt-layer-near mt-auto pt-4 border-t border-gray-100/80">
                      <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-br ${ch.gradient} text-white font-bold text-sm shadow-soft group-hover:-translate-y-0.5 group-hover:shadow-juicy transition-all duration-300`}>
                        Reach out
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom mega CTA strip */}
        <div className={`relative mt-14 md:mt-16 overflow-hidden rounded-[2rem] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
          <div className="absolute inset-0 bg-gradient-brand animate-gradientMesh" style={{ backgroundSize: '200% 200%' }} />
          <div className="absolute inset-0 shine-overlay opacity-50" />
          <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-white/20 blur-3xl animate-blob" />
          <div className="absolute -bottom-28 -right-10 w-80 h-80 rounded-full bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: '-4s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-hotpink/25 blur-3xl animate-blob" style={{ animationDelay: '-8s' }} />

          <div className="relative z-10 p-8 md:p-14 text-center text-white">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm md:text-base font-bold mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
              </span>
              Online now — typically replies instantly
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-5 font-space tracking-tighter-2 leading-tight">
              Don't wait — the best time to start is <span className="underline decoration-accent decoration-4 underline-offset-4">today</span>
            </h3>
            <p className="text-white/90 mb-9 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
              Join 500+ students already building generational wealth with crypto and AI. Your future self will thank you. 🚀
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-primary font-black hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-300 shadow-juicy"
              >
                <span className="text-2xl">💬</span>
                Chat on WhatsApp
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/15 backdrop-blur-sm border-2 border-white/40 text-white font-black hover:bg-white/25 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-white/60 transition-all duration-300"
              >
                <span className="text-2xl">📧</span>
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
