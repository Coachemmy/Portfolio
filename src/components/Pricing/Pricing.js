import { useEffect, useRef, useState } from 'react';
import { pricing } from '../../portfolio';
import FloatingBubbles from '../FloatingBubbles/FloatingBubbles';

const Pricing = () => {
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

  const courseGradients = [
    'from-primary to-violet',
    'from-hotpink to-accent',
    'from-mint to-skyblue',
    'from-violet to-hotpink',
    'from-accent to-peach',
    'from-skyblue to-primary',
  ];

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-50 via-white to-hotpink/5" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-35 animate-gradientMesh" />
      <div className="absolute inset-0 bg-dot-grid opacity-18 pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-primary/15 blur-3xl animate-aurora pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-violet/12 blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-7s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/8 blur-3xl pointer-events-none" />

      <FloatingBubbles count={6} color="violet" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}`}>
          <span className="btn--chip mb-5">
            <span>💎</span>
            Transparent Pricing
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-space tracking-tighter-2">
            Pricing <span className="text-gradient-warm">Plans</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Pick the perfect plan for your goals. All courses include <span className="font-bold text-primary">lifetime access</span> + <span className="font-bold text-hotpink">certificate</span> + <span className="font-bold text-violet">ongoing mentorship</span> ✨
          </p>
        </div>

        {/* COURSES SECTION */}
        <div className="mb-16 md:mb-20">
          <div className={`flex items-center justify-center gap-3 mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-12 h-1 rounded-full bg-gradient-brand" />
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 font-space tracking-tight">
              6-Week Tech Courses
            </h2>
            <span className="w-12 h-1 rounded-full bg-gradient-brand" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pricing.courses.map((course, index) => {
              const gradient = courseGradients[index % courseGradients.length];
              const isFeatured = index === 1;
              return (
                <div
                  key={index}
                  className={`tilt-3d-wrap transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-md'}`}
                  style={{ transitionDelay: `${0.1 + index * 120}ms` }}
                >
                  <div className={`tilt-3d h-full ${isFeatured ? 'md:-translate-y-4' : ''}`}>
                    <div className="relative h-full card-modern border-gradient group overflow-hidden">
                      {/* Featured ribbon */}
                      {isFeatured && (
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-30">
                          <div className={`px-5 py-1.5 rounded-full bg-gradient-to-br ${gradient} text-white text-xs font-black shadow-juicy flex items-center gap-1.5`}>
                            <span>🔥</span> BEST VALUE
                          </div>
                        </div>
                      )}

                      {/* Glow bg */}
                      <div className={`absolute -top-28 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-to-br ${gradient} opacity-10 blur-3xl group-hover:opacity-20 group-hover:scale-125 transition-all duration-700 pointer-events-none`} />
                      <div className="absolute inset-0 shine-overlay opacity-25 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                      <div className={`relative z-10 p-7 md:p-8 ${isFeatured ? 'pt-12' : ''} flex flex-col h-full text-center`}>
                        {/* Course heading */}
                        <div className="tilt-layer-deep mb-5">
                          <div className={`mx-auto w-16 h-16 md:w-18 md:h-18 rounded-[1.5rem] bg-gradient-to-br ${gradient} flex items-center justify-center text-3xl md:text-4xl shadow-juicy group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 mb-4`}>
                            {['📊', '🤖', '⚛️', '⛓️', '✨', '🎨'][index % 6]}
                          </div>
                          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 font-space tracking-tight">
                            {course.name}
                          </h3>
                          <p className="text-sm text-gray-500 font-semibold inline-flex items-center gap-1.5">
                            <span>⏱️</span> {course.duration}
                          </p>
                        </div>

                        {/* Price */}
                        <div className="tilt-layer-mid mb-6 py-5 relative">
                          <div className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent ${gradient.includes('primary') ? 'via-primary/30' : 'via-hotpink/30'} to-transparent`} />
                          <div className="relative z-10 inline-flex items-baseline gap-1.5 px-6 py-3 rounded-3xl glass border border-gray-100">
                            <span className={`text-lg font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>₦</span>
                            <span className={`text-4xl md:text-5xl font-black font-space tracking-tight bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                              {course.price.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Features */}
                        <ul className="tilt-layer-near space-y-3 mb-8 flex-1 text-left">
                          {course.features.map((feature, fi) => (
                            <li key={fi} className="flex items-start gap-3 group/item">
                              <div className={`flex-shrink-0 w-6 h-6 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-soft mt-0.5 group-hover/item:scale-110 transition-transform duration-300`}>
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

                        {/* Enroll CTA */}
                        <button className={`tilt-layer-near relative w-full py-3.5 md:py-4 rounded-2xl font-black text-sm md:text-base bg-gradient-to-br ${gradient} text-white shadow-soft hover:shadow-juicy hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 overflow-hidden group/btn`}>
                          <span className="absolute inset-0 shine-overlay opacity-0 group-hover/btn:opacity-50 transition-opacity duration-500 pointer-events-none" />
                          <span className="relative z-10 inline-flex items-center justify-center gap-2">
                            <span>🚀</span>
                            Enroll Now
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PERSONALIZED COACHING SECTION */}
        <div className="mb-16">
          <div className={`flex items-center justify-center gap-3 mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.45s' }}>
            <span className="w-12 h-1 rounded-full bg-gradient-warm" />
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 font-space tracking-tight">
              Personalized 1:1 Coaching
            </h2>
            <span className="w-12 h-1 rounded-full bg-gradient-warm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                data: pricing.coaching.crypto,
                gradient: 'from-accent to-peach',
                emoji: '💰',
                delay: 0.55,
              },
              {
                data: pricing.coaching.faceless,
                gradient: 'from-violet to-hotpink',
                emoji: '🤖',
                delay: 0.65,
              },
            ].map((coach, ci) => (
              <div
                key={ci}
                className={`tilt-3d-wrap transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-md'}`}
                style={{ transitionDelay: `${coach.delay}s` }}
              >
                <div className="tilt-3d h-full">
                  <div className="relative h-full card-modern border-gradient group p-7 md:p-9 overflow-hidden">
                    {/* Blob bg */}
                    <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${coach.gradient} opacity-10 blur-3xl group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`} />
                    <div className="absolute inset-0 shine-overlay opacity-30 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full text-center">
                      <div className="tilt-layer-deep mx-auto mb-5 relative">
                        <div className={`w-24 h-24 md:w-28 md:h-28 rounded-[2rem] bg-gradient-to-br ${coach.gradient} flex items-center justify-center text-6xl md:text-7xl shadow-juicy group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                          {coach.emoji}
                        </div>
                        <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${coach.gradient} opacity-20 blur-2xl group-hover:opacity-40 group-hover:scale-110 transition-all duration-500`} />
                      </div>

                      <h3 className="tilt-layer-mid text-2xl md:text-3xl font-black text-gray-900 mb-2 font-space tracking-tight">
                        {coach.data.name}
                      </h3>
                      <p className="tilt-layer-mid text-sm md:text-base text-gray-600 mb-5 px-2">
                        {coach.data.description}
                      </p>
                      <div className={`tilt-layer-mid text-3xl md:text-4xl font-black font-space tracking-tight bg-gradient-to-r ${coach.gradient} bg-clip-text text-transparent mb-7`}>
                        {coach.data.price}
                      </div>

                      <ul className="tilt-layer-near space-y-3 mb-8 flex-1 text-left">
                        {coach.data.features.map((feature, fi) => (
                          <li key={fi} className="flex items-start gap-3 group/item">
                            <div className={`flex-shrink-0 w-6 h-6 rounded-xl bg-gradient-to-br ${coach.gradient} flex items-center justify-center shadow-soft mt-0.5 group-hover/item:scale-110 transition-transform duration-300`}>
                              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700 text-sm md:text-base leading-relaxed group-hover/item:text-gray-900 transition-colors">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <button className={`tilt-layer-near relative w-full py-3.5 md:py-4 rounded-2xl font-black text-sm md:text-base bg-gradient-to-br ${coach.gradient} text-white shadow-soft hover:shadow-juicy hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 overflow-hidden group/btn`}>
                        <span className="absolute inset-0 shine-overlay opacity-0 group-hover/btn:opacity-50 transition-opacity duration-500 pointer-events-none" />
                        <span className="relative z-10 inline-flex items-center justify-center gap-2">
                          <span>🎯</span>
                          Start Coaching
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CUSTOM PLAN BANNER */}
        <div className={`relative overflow-hidden rounded-[2rem] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
          <div className="absolute inset-0 bg-gradient-brand animate-gradientMesh" style={{ backgroundSize: '200% 200%' }} />
          <div className="absolute inset-0 shine-overlay opacity-50" />
          <div className="absolute -top-28 -left-24 w-80 h-80 rounded-full bg-white/20 blur-3xl animate-blob" />
          <div className="absolute -bottom-28 -right-16 w-96 h-96 rounded-full bg-accent/30 blur-3xl animate-blob" style={{ animationDelay: '-4s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-hotpink/25 blur-3xl animate-blob" style={{ animationDelay: '-9s' }} />

          <div className="relative z-10 p-8 md:p-14 text-center text-white">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm md:text-base font-bold mb-6">
              <span>🎨</span>
              Fully Customizable
            </div>
            <h3 className="text-3xl md:text-5xl font-black mb-5 font-space tracking-tighter-2 leading-tight">
              Need a <span className="underline decoration-accent decoration-4 underline-offset-4">Custom Plan</span>?
            </h3>
            <p className="text-white/90 mb-9 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
              Corporate training? Group classes? Tailored curriculum? Let's build something perfect for your team — no compromises. 💪
            </p>
            <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-primary font-black hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-300 shadow-juicy">
              <span className="text-2xl">💬</span>
              Let's Talk
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
