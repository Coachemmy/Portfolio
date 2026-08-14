import { useEffect, useRef, useState } from 'react';
import { reviews } from '../../portfolio';
import FloatingBubbles from '../FloatingBubbles/FloatingBubbles';

const Reviews = () => {
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

  const renderStars = (rating) => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 transition-transform duration-300 ${i < rating ? 'text-accent' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const avatarGradients = [
    'from-primary to-violet',
    'from-hotpink to-accent',
    'from-skyblue to-mint',
    'from-violet to-hotpink',
    'from-accent to-peach',
    'from-mint to-skyblue',
  ];

  return (
    <section id="reviews" ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50/40 to-pink-50/30" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 animate-gradientMesh" />
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-accent/15 blur-3xl animate-aurora pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-hotpink/12 blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-7s' }} />

      <FloatingBubbles count={6} color="secondary" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}`}>
          <span className="btn--chip mb-5">
            <span>💖</span>
            Student Love
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-space tracking-tighter-2">
            What Our <span className="text-gradient-warm">Students Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real students who transformed their careers with CoachEmmy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`tilt-3d-wrap transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-md'}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="tilt-3d h-full">
                <div className="relative h-full card-modern border-gradient group p-5 md:p-7 overflow-hidden">
                  {/* Warm tint bg */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-peach/10 to-hotpink/10 opacity-60 pointer-events-none group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 shine-overlay opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />

                  {/* Big quote decor */}
                  <div className="absolute top-3 right-4 text-6xl md:text-7xl font-serif text-gradient-brand opacity-15 select-none pointer-events-none">
                    "
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Stars + Verified */}
                    <div className="flex items-center justify-between mb-5 tilt-layer-mid">
                      {renderStars(review.rating)}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-mint/15 border border-mint/25 text-mint font-bold text-[10px] md:text-xs">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                        Verified
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="tilt-layer-mid text-gray-700 mb-6 leading-relaxed text-sm md:text-base italic flex-1">
                      "{review.review}"
                    </p>

                    {/* Author */}
                    <div className="tilt-layer-deep flex items-center gap-4 mb-4">
                      <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${avatarGradients[index % avatarGradients.length]} flex items-center justify-center text-white font-extrabold text-lg md:text-xl shadow-soft ring-2 ring-white`}>
                        {review.name.charAt(0)}
                        <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-white border-2 border-white flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-mint" />
                        </span>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-gray-900 text-sm md:text-base">{review.name}</h4>
                        <p className="text-xs md:text-sm text-gray-500">{review.location}</p>
                      </div>
                    </div>

                    {/* Course tag */}
                    <div className="tilt-layer-near pt-4 mt-auto border-t border-primary/10">
                      <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold badge-gradient px-3 py-1.5">
                        <span>📚</span>
                        {review.course}
                      </span>
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

export default Reviews;
