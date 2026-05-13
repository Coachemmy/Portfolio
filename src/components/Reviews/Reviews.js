import { useEffect, useRef, useState } from 'react';
import { reviews } from '../../portfolio';
import FloatingBubbles from '../FloatingBubbles/FloatingBubbles';

const Reviews = () => {
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="reviews" ref={sectionRef} className="relative py-20 bg-gradient-to-br from-orange-50 via-amber-50/50 to-yellow-50/30 overflow-hidden">
      <FloatingBubbles count={6} color="secondary" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real students who transformed their careers with CoachEmmy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {renderStars(review.rating)}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{review.review}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {review.course}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;