import { useEffect, useRef, useState } from 'react';
import uniqid from 'uniqid';
import { skills } from '../../portfolio';

const SKILL_EMOJIS = {
  'JavaScript': '🟨', 'React': '⚛️', 'Node.js': '🟩', 'Python': '🐍',
  'CSS': '🎨', 'HTML': '📄', 'TypeScript': '🔷', 'Tailwind': '🌊',
  'Crypto Trading': '📈', 'Blockchain': '⛓️', 'Web3': '🌐', 'Solidity': '💎',
  'AI': '🤖', 'Content Creation': '✍️', 'Prompt Engineering': '💡',
  'Git': '🌳', 'Firebase': '🔥', 'MongoDB': '🍃', 'SQL': '🗄️',
  'Figma': '🎯', 'UI/UX': '✨', 'Mentoring': '👨‍🏫', 'Public Speaking': '🎤',
};

const SKILL_GRADIENTS = [
  'from-primary to-violet',
  'from-hotpink to-accent',
  'from-skyblue to-mint',
  'from-violet to-hotpink',
  'from-accent to-peach',
  'from-mint to-skyblue',
  'from-secondary to-primary',
  'from-peach to-hotpink',
];

const Skills = () => {
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

  if (!skills.length) return null;

  return (
    <section id="skills" ref={sectionRef} className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet/5 to-white" />
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-aurora pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-hotpink/10 blur-3xl animate-aurora pointer-events-none -translate-y-1/2" style={{ animationDelay: '-5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}`}>
          <span className="btn--chip mb-5">
            <span>🎯</span>
            My Skill Stack
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 font-space tracking-tighter-2">
            Skills & <span className="text-gradient-warm">Superpowers</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A juicy mix of tech, finance, and creativity I've honed over 8+ years of shipping real things 🛠️
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8">
          {skills.map((skill, idx) => {
            const gradient = SKILL_GRADIENTS[idx % SKILL_GRADIENTS.length];
            const emoji = SKILL_EMOJIS[skill] || '🚀';
            return (
              <li
                key={uniqid()}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100 blur-0' : 'opacity-0 translate-y-6 scale-90 blur-md'}`}
                style={{ transitionDelay: `${idx * 55}ms` }}
              >
                <button
                  className={`relative inline-flex items-center gap-2 px-5 md:px-7 py-3 md:py-3.5 rounded-full glass border border-white/80 text-gray-800 font-bold text-sm md:text-base hover:-translate-y-1 hover:shadow-juicy transition-all duration-500 overflow-hidden`}
                >
                  {/* Gradient overlay on hover */}
                  <span className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <span className="absolute inset-0 shine-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

                  <span className="relative z-10 text-lg md:text-xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {emoji}
                  </span>
                  <span className={`relative z-10 transition-colors duration-500 group-hover:text-white`}>
                    {skill}
                  </span>

                  {/* Shine dot */}
                  <span className={`relative z-10 ml-1 w-2 h-2 rounded-full bg-gradient-to-br ${gradient} shadow-soft group-hover:scale-150 group-hover:bg-white transition-all duration-500`} />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Stats row */}
        <div className={`mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
          {[
            { num: '8+', label: 'Years Experience', icon: '⏱️', grad: 'from-primary to-violet' },
            { num: '500+', label: 'Students Trained', icon: '🎓', grad: 'from-hotpink to-accent' },
            { num: '50+', label: 'Projects Shipped', icon: '🚀', grad: 'from-mint to-skyblue' },
            { num: '98%', label: 'Student Satisfaction', icon: '💖', grad: 'from-accent to-peach' },
          ].map((s, i) => (
            <div
              key={i}
              className="tilt-3d-wrap"
              style={{ transitionDelay: `${0.05 * i}s` }}
            >
              <div className="tilt-3d h-full">
                <div className="relative h-full card-modern border-gradient group p-5 md:p-6 text-center overflow-hidden">
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${s.grad} opacity-10 blur-2xl group-hover:opacity-25 group-hover:scale-150 transition-all duration-700`} />
                  <div className="absolute inset-0 shine-overlay opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="tilt-layer-deep text-3xl md:text-4xl mb-2">{s.icon}</div>
                    <div className={`tilt-layer-mid text-2xl md:text-4xl font-black font-space tracking-tight bg-gradient-to-br ${s.grad} bg-clip-text text-transparent mb-1`}>
                      {s.num}
                    </div>
                    <div className="tilt-layer-near text-xs md:text-sm text-gray-600 font-semibold">
                      {s.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
