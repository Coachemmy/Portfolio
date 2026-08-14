import { about } from '../../portfolio';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ end, duration = 1500, suffix = '' }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    const numericEnd = typeof end === 'string' ? parseFloat(end) : end;
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = start + (numericEnd - start) * eased;
      setCount(Math.round(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), 300);
    return () => clearTimeout(timer);
  }, [end, duration]);
  return <>{count}{suffix}</>;
};

const About = () => {
  return (
    <section id="about" className="relative pt-16 md:pt-24 pb-16 md:pb-24 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh animate-gradientMesh" />

      {/* Dotted grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-50" />

      {/* Floating blobs */}
      <div className="absolute -top-24 -left-20 w-72 h-72 md:w-[28rem] md:h-[28rem] bg-primary/25 rounded-full blur-3xl animate-aurora pointer-events-none" />
      <div className="absolute top-40 -right-16 w-80 h-80 md:w-96 md:h-96 bg-secondary/25 rounded-full blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-6s' }} />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-hotpink/15 rounded-full blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-10s' }} />

      {/* Noise overlay for grain feel */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          {/* Left: Avatar with 3D tilt + decorative ring */}
          <div className="relative flex-shrink-0 tilt-3d-wrap animate-blurIn">
            {/* Animated gradient ring spinning slow */}
            <div className="absolute -inset-5 rounded-full bg-gradient-brand opacity-70 blur-[2px] animate-spinSlow" style={{ animationDuration: '18s' }} />
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary via-hotpink to-secondary opacity-30 blur-md animate-pulseGlow" />

            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 tilt-3d">
              {/* Main avatar */}
              <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-white/80 shadow-juicy animate-float" style={{ animationDuration: '5s' }}>
                <div className="absolute inset-0 bg-gradient-brand-soft z-0" />
                <img
                  src="/images/logo.png"
                  alt="CoachEmmy"
                  className="relative z-10 w-full h-full object-cover object-top hover:scale-110 transition-transform duration-[1200ms] ease-juicy"
                />
                {/* Shine overlay */}
                <div className="absolute inset-0 shine-overlay z-20 pointer-events-none" />
              </div>

              {/* 8+ years badge - bouncing with glow */}
              <div className="absolute -bottom-3 -right-3 md:-bottom-2 md:-right-2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-brand flex items-center justify-center text-white font-extrabold text-lg md:text-2xl shadow-juicy animate-glowRing tilt-layer-deep">
                <span className="drop-shadow-md">
                  <AnimatedCounter end={8} suffix="+" />
                </span>
              </div>

              {/* Small decorative badges floating */}
              <div className="absolute -top-2 -left-4 md:-top-4 md:-left-6 tilt-layer-deep">
                <div className="bg-white/85 backdrop-blur-md rounded-2xl px-3 py-1.5 shadow-soft border border-white flex items-center gap-1.5 animate-tiltFloat" style={{ animationDelay: '-2s' }}>
                  <span className="text-lg">✨</span>
                  <span className="text-xs font-bold text-primary">Coach</span>
                </div>
              </div>
              <div className="absolute top-1/2 -right-10 md:-right-16 tilt-layer-mid">
                <div className="bg-white/85 backdrop-blur-md rounded-2xl px-3 py-1.5 shadow-soft border border-white flex items-center gap-1.5 animate-tiltFloat" style={{ animationDelay: '-4s' }}>
                  <span className="text-lg">🚀</span>
                  <span className="text-xs font-bold text-hotpink">Results</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="text-center lg:text-left flex-1 animate-fadeUp">
            {/* Intro chip */}
            <div className="inline-flex items-center gap-2 mb-5 badge-gradient animate-popIn" style={{ animationDelay: '0.1s' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
              </span>
              Available for 1-on-1 Coaching
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-5 md:mb-6 leading-[1.05] tracking-tighter-2 font-space animate-fadeUp" style={{ animationDelay: '0.15s' }}>
              Welcome to{' '}
              <span className="relative inline-block">
                <span className="text-gradient-brand animate-neon">CoachEmmy</span>
                {/* Squiggly underline */}
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-hotpink/70" viewBox="0 0 200 12" preserveAspectRatio="none" fill="none">
                  <path d="M2 8 C 40 0, 80 16, 120 6 S 180 2, 198 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fadeUp font-medium" style={{ animationDelay: '0.35s' }}>
              {about.description}
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fadeUp" style={{ animationDelay: '0.5s' }}>
              <a
                href="#tech-courses"
                className="btn btn--primary text-base md:text-lg px-8 shine-overlay"
              >
                🔥 Explore Courses
              </a>
              <a
                href="/contact"
                className="btn btn--ghost text-base md:text-lg px-8 rounded-2xl"
              >
                Let's Talk →
              </a>
            </div>

            {/* Social proof mini-row */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-5 animate-fadeUp" style={{ animationDelay: '0.65s' }}>
              <div className="flex -space-x-2">
                {['🧑‍💻', '👩‍🎓', '🧑‍🚀', '👨‍🏫'].map((e, i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-white shadow-soft flex items-center justify-center text-base md:text-lg">
                    {e}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm md:text-base font-semibold text-gray-700">Trusted by <span className="text-primary">85+</span> students</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats - 4 glass cards with gradient borders + counters */}
        <div className="mt-16 md:mt-20 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: '85', suffix: '+', label: 'Students Trained', icon: '🎓', tint: 'from-primary/15 to-secondary/15' },
              { number: '39', suffix: '+', label: 'Projects Completed', icon: '💼', tint: 'from-accent/15 to-peach/15' },
              { number: '8', suffix: '+', label: 'Years Experience', icon: '🏆', tint: 'from-hotpink/15 to-violet/15' },
              { number: '98', suffix: '%', label: 'Customer Satisfaction', icon: '💖', tint: 'from-mint/15 to-skyblue/15' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="group relative animate-fadeUp"
                style={{ animationDelay: `${0.8 + index * 0.12}s` }}
              >
                <div className={`relative glass border-gradient rounded-3xl p-5 md:p-6 hover:-translate-y-2 transition-all duration-500 ease-juicy overflow-hidden`}>
                  {/* Tinted bg */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.tint} opacity-60 pointer-events-none`} />
                  {/* Shine */}
                  <div className="absolute inset-0 shine-overlay opacity-60 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl mb-3 group-hover:animate-wiggle inline-block">
                      {stat.icon}
                    </div>
                    <div className="text-3xl md:text-5xl font-extrabold text-gradient-brand mb-1 font-space tracking-tight">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={1800 + index * 200} />
                    </div>
                    <div className="text-gray-600 text-xs md:text-sm font-semibold uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
