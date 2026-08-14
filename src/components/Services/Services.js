import { useEffect, useRef, useState } from 'react';
import { services } from '../../portfolio';
import FloatingBubbles from '../FloatingBubbles/FloatingBubbles';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const colorMap = {
    yellow: 'from-accent to-peach',
    purple: 'from-violet to-hotpink',
    orange: 'from-peach to-hotpink',
    blue: 'from-primary to-secondary',
    green: 'from-mint to-skyblue',
    indigo: 'from-violet to-primary',
    red: 'from-hotpink to-peach',
  };

  const glowMap = {
    yellow: 'bg-accent/20',
    purple: 'bg-violet/20',
    orange: 'bg-peach/20',
    blue: 'bg-primary/20',
    green: 'bg-mint/20',
    indigo: 'bg-violet/20',
    red: 'bg-hotpink/20',
  };

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-35 animate-gradientMesh" />
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-violet/12 blur-3xl animate-aurora pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-hotpink/10 blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-8s' }} />
      <div className="absolute top-2/3 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-4s' }} />

      <FloatingBubbles count={6} color="primary" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}`}>
          <span className="btn--chip mb-5">
            <span>🌟</span>
            Premium Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-space tracking-tighter-2">
            My <span className="text-gradient-brand">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert coaching & training programs to master <span className="font-bold text-primary">crypto</span>, <span className="font-bold text-hotpink">AI content</span>, and <span className="font-bold text-violet">modern tech skills</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const gradient = colorMap[service.color] || colorMap.blue;
            const glow = glowMap[service.color] || glowMap.blue;
            return (
              <div
                key={service.id}
                className={`tilt-3d-wrap transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-md'}`}
                style={{ transitionDelay: `${0.1 + idx * 120}ms` }}
              >
                <div className="tilt-3d h-full">
                  <div className={`relative h-full card-modern border-gradient group overflow-hidden ${service.popular ? 'ring-2 ring-transparent' : ''}`}>
                    {/* Popular ribbon */}
                    {service.popular && (
                      <div className="absolute top-0 right-0 z-30">
                        <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden pointer-events-none">
                          <div className={`absolute top-5 right-[-38px] w-[170px] rotate-45 bg-gradient-to-br ${gradient} text-white text-xs font-black py-2 text-center shadow-juicy`}>
                            ⭐ POPULAR
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Glow bg */}
                    <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full ${glow} blur-3xl group-hover:scale-150 transition-all duration-700 pointer-events-none`} />
                    <div className="absolute inset-0 shine-overlay opacity-25 group-hover:opacity-55 transition-opacity duration-500 pointer-events-none" />
                    <div className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative z-10 p-7 md:p-8 flex flex-col h-full">
                      {/* Icon */}
                      <div className="tilt-layer-deep mb-5 relative inline-flex">
                        <div className={`w-16 h-16 md:w-18 md:h-18 rounded-[1.5rem] bg-gradient-to-br ${gradient} flex items-center justify-center text-4xl md:text-5xl shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                          {service.icon}
                        </div>
                        <div className={`absolute inset-0 rounded-[1.5rem] bg-gradient-to-br ${gradient} opacity-20 blur-xl group-hover:opacity-40 group-hover:scale-110 transition-all duration-500`} />
                      </div>

                      <h3 className="tilt-layer-mid text-2xl md:text-3xl font-black text-gray-900 mb-2 font-space tracking-tight">
                        {service.title}
                      </h3>

                      <p className={`tilt-layer-mid text-sm font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}>
                        {service.tagline}
                      </p>

                      <p className="tilt-layer-mid text-gray-600 mb-6 leading-relaxed flex-1">
                        {service.description}
                      </p>

                      {/* Meta */}
                      <div className="tilt-layer-near mb-6 space-y-2.5">
                        <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-gray-50/80 border border-gray-100">
                          <span className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                            <span>⏱️</span> Duration
                          </span>
                          <span className="font-black text-gray-900">{service.duration}</span>
                        </div>
                        {service.price && (
                          <div className="flex items-center justify-between px-4 py-3 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 group-hover:border-primary/20 transition-colors">
                            <span className="flex items-center gap-2 text-sm text-gray-500 font-semibold">
                              <span>💎</span> Investment
                            </span>
                            <div className="flex items-baseline gap-0.5">
                              <span className={`text-sm font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>₦</span>
                              <span className={`text-2xl md:text-3xl font-black font-space tracking-tight bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                                {service.price.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Features */}
                      <ul className="tilt-layer-near space-y-2.5 mb-8">
                        {service.features.map((feature, fi) => (
                          <li key={fi} className="flex items-start gap-3 group/item">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-soft mt-0.5 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform duration-300`}>
                              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-600 text-sm md:text-base leading-relaxed group-hover/item:text-gray-800 transition-colors">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <button
                        className={`tilt-layer-near relative w-full py-3.5 md:py-4 rounded-2xl font-black text-sm md:text-base transition-all duration-500 overflow-hidden group/btn ${
                          service.popular
                            ? `bg-gradient-to-br ${gradient} text-white shadow-juicy hover:shadow-juicy hover:-translate-y-1 hover:scale-[1.02]`
                            : `glass border-2 border-gray-200/80 text-gray-900 hover:border-primary/30 hover:-translate-y-0.5 hover:shadow-soft`
                        }`}
                      >
                        {!service.popular && <span className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500`} />}
                        {!service.popular && <span className="absolute inset-0 shine-overlay opacity-0 group-hover/btn:opacity-40 transition-opacity duration-500 pointer-events-none" />}
                        <span className={`relative z-10 inline-flex items-center justify-center gap-2 ${!service.popular ? 'group-hover/btn:text-white' : ''}`}>
                          {service.popular ? '🚀' : '✨'}
                          Enroll Now
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    {/* Bottom gradient bar */}
                    <div className={`relative z-10 h-1.5 w-full bg-gradient-to-r ${gradient}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
