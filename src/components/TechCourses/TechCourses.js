import { useState, useEffect } from 'react';
import { techCourses } from '../../portfolio';
import EnrollmentModal from '../EnrollmentModal/EnrollmentModal';

const CourseCard = ({ course, onEnroll }) => (
  <div className="bg-white border-2 border-gray-200 rounded-2xl p-5 md:p-8 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 h-full">
    <div className="text-5xl md:text-6xl mb-4 text-center">{course.icon}</div>

    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
      {course.title}
    </h3>

    <p className="text-sm font-medium text-primary mb-4 text-center">
      {course.tagline}
    </p>

    <p className="text-gray-600 mb-6 text-center leading-relaxed text-sm">
      {course.description}
    </p>

    <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-4">
      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
        {course.duration}
      </span>
      <span className="font-bold text-xl text-primary">
        ₦{course.price.toLocaleString()}
      </span>
    </div>

    <ul className="space-y-2 mb-6">
      {course.features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
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
          <span className="text-gray-600 text-sm">
            {feature}
          </span>
        </li>
      ))}
    </ul>

    <button
      onClick={() => onEnroll(course)}
      className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
    >
      Enroll Now
    </button>
  </div>
);

const TechCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerSlide = 2;
  const maxIndex = Math.max(0, techCourses.length - itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <section id="tech-courses" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Tech Courses
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            6 weeks of intensive, hands-on training with lifetime access to materials.
          </p>
        </div>

        {isMobile ? (
          <div className="grid grid-cols-1 gap-6">
            {techCourses.map((course) => (
              <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
            ))}
          </div>
        ) : (
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
              >
                {techCourses.map((course) => (
                  <div
                    key={course.id}
                    className="w-1/2 flex-shrink-0 px-4"
                  >
                    <CourseCard course={course} onEnroll={handleEnroll} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary hover:shadow-lg transition-all duration-300 z-10 ${
                currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Previous courses"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary hover:shadow-lg transition-all duration-300 z-10 ${
                currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              aria-label="Next courses"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {!isMobile && (
          <>
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <p className="text-center text-gray-500 mt-6 text-sm">
              Showing {currentIndex + 1}-{Math.min(currentIndex + itemsPerSlide, techCourses.length)} of {techCourses.length} courses
            </p>
          </>
        )}
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={selectedCourse}
      />
    </section>
  );
};

export default TechCourses;
