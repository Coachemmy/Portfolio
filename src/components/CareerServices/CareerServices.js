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
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
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

  return (
    <section id="career-services" ref={sectionRef} className="relative py-20 bg-gradient-to-br from-indigo-50 via-purple-50/50 to-pink-50/30 overflow-hidden">
      <FloatingBubbles count={8} color="primary" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Career Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personalized 1-on-1 coaching and professional services to accelerate your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerServices.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-primary hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={serviceImages[service.id]} 
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-4xl">{service.icon}</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-sm font-medium text-primary mb-3">
                  {service.tagline}
                </p>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{service.duration}</span>
                  <span className="font-bold text-xl text-primary">
                    ₦{service.price.toLocaleString()}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600 text-xs">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleEnroll(service)}
                  className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  Enroll Now
                </button>
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