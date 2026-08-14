import { useState, useEffect } from 'react';
import { techCourses } from '../../portfolio';
import EnrollmentModal from '../EnrollmentModal/EnrollmentModal';

const CourseCard = ({ course, onEnroll, index = 0 }) => {
  const gradients = [
    'from-primary/20 via-secondary/20 to-hotpink/10',
    'from-violet/20 via-primary/20 to-skyblue/10',
    'from-accent/20 via-peach/20 to-hotpink/10',
    'from-mint/20 via-skyblue/20 to-primary/10',
  ];
  const tint = gradients[index % gradients.length];

  return (
    <div className="tilt-3d-wrap h-full animate-fadeUp" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
      <div className="tilt-3d h-full">
        <div className="relative h-full card-modern border-gradient group p-5 md:p-8">
          {/* Tinted gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${tint} opacity-50 pointer-events-none group-hover:opacity-80 transition-opacity duration-500`} />

          {/* Shine sweep on hover */}
          <div className="absolute inset-0 shine-overlay opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

          {/* Top-left accent blob */}
          <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-primary/10 blur-2xl pointer-events-none group-hover:bg-primary/25 transition-all duration-700 group-hover:scale-125" />

          <div className="relative z-10 h-full flex flex-col">
            {/* Icon with animated container */}
            <div className="relative tilt-layer-deep mb-5 md:mb-6 mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-25 blur-md group-hover:opacity-50 group-hover:animate-pulseGlow transition-opacity duration-500" />
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/80 backdrop-blur-md border border-white shadow-soft flex items-center justify-center transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                <span className="text-5xl md:text-6xl group-hover:animate-wiggle inline-block transition-transform duration-500">
                  {course.icon}
                </span>
              </div>
            </div>

            <div className="tilt-layer-mid text-center">
              <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-2 font-space tracking-tight">
                {course.title}
              </h3>

              <p className="text-sm md:text-base font-bold text-gradient-brand mb-3">
                {course.tagline}
              </p>

              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                {course.description}
              </p>
            </div>

            <div className="tilt-layer-mid flex items-center justify-center gap-3 text-sm text-gray-500 mb-4">
              <span className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-primary/15 text-primary font-bold text-xs badge-gradient">
                {course.duration}
              </span>
              <span className="font-extrabold text-2xl md:text-3xl text-gradient-brand font-space tracking-tight">
                ₦{course.price.toLocaleString()}
              </span>
            </div>

            <ul className="tilt-layer-mid space-y-2 mb-6">
              {course.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 group/item">
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gradient-brand flex items-center justify-center shadow-soft group-hover/item:animate-wiggle">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm group-hover/item:text-gray-800 transition-colors duration-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="tilt-layer-near mt-auto pt-2">
              <button
                onClick={() => onEnroll(course)}
                className="btn btn--primary w-full rounded-2xl text-sm md:text-base shine-overlay relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
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
  );
};

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

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));
  const goToSlide = (index) => setCurrentIndex(Math.min(index, maxIndex));

  const handleEnroll = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <section id="tech-courses" className="relative py-16 md:py-24 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-ink-50/30 to-white" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

      {/* Floating decor */}
      <div className="absolute top-20 left-10 w-60 h-60 rounded-full bg-secondary/15 blur-3xl animate-aurora pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-hotpink/10 blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-7s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14 animate-fadeUp">
          <span className="btn--chip mb-4">
            <span className="text-base">🎯</span>
            Hands-On Training
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-space tracking-tighter-2">
            <span className="text-gradient-brand">Tech</span> Courses
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            6 weeks of intensive, hands-on training with lifetime access to materials.
          </p>
        </div>

        {isMobile ? (
          <div className="grid grid-cols-1 gap-6">
            {techCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} onEnroll={handleEnroll} index={i} />
            ))}
          </div>
        ) : (
          <div className="relative px-6 md:px-10">
            <div className="overflow-hidden rounded-[2rem]">
              <div
                className="flex transition-transform duration-700 ease-juicy"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
              >
                {techCourses.map((course, i) => (
                  <div
                    key={course.id}
                    className="w-1/2 flex-shrink-0 px-4 md:px-5 py-2"
                  >
                    <CourseCard course={course} onEnroll={handleEnroll} index={i} />
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / Next buttons - juicy style */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute -left-1 md:-left-3 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 glass border-gradient rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-juicy z-10 transition-all duration-300 ${
                currentIndex === 0 ? 'opacity-40 cursor-not-allowed grayscale' : 'hover:-translate-y-1/2 hover:-translate-x-1 active:scale-95'
              }`}
              aria-label="Previous courses"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className={`absolute -right-1 md:-right-3 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 glass border-gradient rounded-full flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-juicy z-10 transition-all duration-300 ${
                currentIndex >= maxIndex ? 'opacity-40 cursor-not-allowed grayscale' : 'hover:-translate-y-1/2 hover:translate-x-1 active:scale-95'
              }`}
              aria-label="Next courses"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {!isMobile && (
          <div className="mt-10 md:mt-12 flex flex-col items-center gap-5">
            <div className="flex items-center gap-3 p-2 glass rounded-full border border-white/60 shadow-soft">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-juicy ${
                    index === currentIndex
                      ? 'w-10 bg-gradient-brand shadow-soft'
                      : 'w-2.5 bg-gray-300 hover:bg-primary/40 hover:w-5'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <p className="text-sm font-semibold text-gray-500 badge-gradient px-4 py-1.5">
              Showing {currentIndex + 1}–{Math.min(currentIndex + itemsPerSlide, techCourses.length)} of {techCourses.length} courses
            </p>
          </div>
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
