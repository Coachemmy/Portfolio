import { useState, useEffect, useRef } from 'react';
import { careerServices } from '../../portfolio';
import EnrollmentModal from '../EnrollmentModal/EnrollmentModal';
import FloatingBubbles from '../FloatingBubbles/FloatingBubbles';

const CareerServices = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const serviceImages = {
    'crypto-coaching': '/images/crypto.jpg',
    'faceless-ai': '/images/faceless.jpg',
    'graphics-design': '/images/graphics.jpg'
  };

  const cardTints = [
    'from-primary/25 via-violet/15 to-hotpink/15',
    'from-skyblue/25 via-primary/15 to-secondary/15',
    'from-accent/20 via-peach/15 to-hotpink/15',
  ];

  return (
    <section id="career-services" ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-primary/5 to-pink-50/40" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 animate-gradientMesh" />
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      {/* Aurora blobs */}
      <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-hotpink/15 blur-3xl animate-aurora pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-8s' }} />

      <FloatingBubbles count={6} color="gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}`}>
          <span className="btn--chip mb-5">
            <span>💼</span>
            Career Boost
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-space tracking-tighter-2">
            Career <span className="text-gradient-brand">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Personalized 1-on-1 coaching and professional services to accelerate your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {careerServices.map((service, index) => (
            <div
              key={service.id}
              className={`tilt-3d-wrap transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-md'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="tilt-3d h-full">
                <div className="relative h-full card-modern border-gradient group overflow-hidden">
                  {/* Tinted overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cardTints[index % cardTints.length]} opacity-40 pointer-events-none z-0 transition-opacity duration-500 group-hover:opacity-70`} />

                  {/* Image section */}
                  <div className="relative h-44 md:h-52 overflow-hidden tilt-layer-deep z-10">
                    <img
                      src={serviceImages[service.id]}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-juicy group-hover:scale-115"
                    />
                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Shine sweep */}
                    <div className="absolute inset-0 shine-overlay opacity-60 pointer-events-none" />

                    {/* Floating icon bottom-left */}
                    <div className="absolute bottom-3 left-3 md:bottom-5 md:left-5 flex items-center gap-2">
                      <div className="w-11 h-11 md:w-14 md:h-14 rounded-2xl glass border border-white/60 shadow-juicy flex items-center justify-center group-hover:animate-wiggle transition-transform">
                        <span className="text-2xl md:text-3xl">{service.icon}</span>
                      </div>
                    </div>

                    {/* Popular badge (first item) */}
                    {index === 0 && (
                      <div className="absolute top-3 right-3 md:top-4 md:right-4 animate-popIn">
                        <div className="badge-gradient px-3 py-1 bg-gradient-brand text-white font-bold shadow-juicy border-0">
                          ⭐ Popular
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="relative p-5 md:p-7 z-10 tilt-layer-mid flex flex-col h-[calc(100%-11rem)] md:h-[calc(100%-13rem)]">
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-1.5 font-space tracking-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm md:text-base font-bold text-gradient-brand mb-3">
                      {service.tagline}
                    </p>

                    <p className="text-gray-600 mb-5 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between text-sm md:text-base mb-4">
                      <span className="badge-gradient px-3 py-1">
                        {service.duration}
                      </span>
                      <span className="font-extrabold text-2xl md:text-3xl text-gradient-brand font-space tracking-tight">
                        ₦{service.price.toLocaleString()}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6 flex-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 group/item">
                          <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-brand flex items-center justify-center shadow-soft group-hover/item:animate-wiggle">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600 text-sm md:text-base group-hover/item:text-gray-800 transition-colors duration-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="tilt-layer-near">
                      <button
                        onClick={() => handleEnroll(service)}
                        className="btn btn--primary w-full rounded-2xl text-sm md:text-base shine-overlay"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Enroll Now
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={selectedCourse}
      />
    </section>
  );
};

export default CareerServices;
