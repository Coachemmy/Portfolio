import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faq } from '../../portfolio';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-50/50 via-white to-white" />
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-aurora pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fadeUp">
          <span className="btn--chip mb-5">
            <span>❓</span>
            Help Center
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-space tracking-tighter-2">
            Frequently Asked <span className="text-gradient-brand">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Everything you need to know about my services and courses
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="group relative animate-fadeUp"
                style={{ animationDelay: `${0.1 + index * 0.06}s` }}
              >
                <div className={`relative overflow-hidden rounded-3xl glass border transition-all duration-500 ease-juicy ${
                  isOpen
                    ? 'border-primary/30 shadow-juicy'
                    : 'border-white/60 hover:border-primary/20 hover:shadow-soft'
                }`}>
                  {/* Tinted bg when open */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/6 to-hotpink/5 transition-opacity duration-500 ${
                    isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                  }`} />
                  <div className={`absolute inset-0 shine-overlay pointer-events-none transition-opacity duration-500 ${
                    isOpen ? 'opacity-40' : 'opacity-0 group-hover:opacity-30'
                  }`} />

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="relative z-10 w-full px-5 md:px-7 py-5 md:py-6 text-left flex items-center justify-between gap-5"
                  >
                    <div className="flex items-start gap-4">
                      {/* Number accent */}
                      <div className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-2xl flex items-center justify-center font-extrabold text-sm transition-all duration-500 ${
                        isOpen
                          ? 'bg-gradient-brand text-white shadow-juicy scale-110'
                          : 'bg-white/80 border border-primary/15 text-primary group-hover:scale-105'
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <span className={`text-base md:text-xl font-bold transition-colors duration-300 ${
                        isOpen ? 'text-primary' : 'text-gray-900 group-hover:text-gray-800'
                      }`}>
                        {item.question}
                      </span>
                    </div>

                    <div className={`flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isOpen
                        ? 'bg-gradient-brand text-white rotate-180 shadow-juicy'
                        : 'bg-white/80 border border-primary/15 text-primary group-hover:scale-110 group-hover:border-primary/40'
                    }`}>
                      <svg
                        className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`relative z-10 overflow-hidden transition-all duration-500 ease-juicy ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 md:px-7 pb-6 md:pb-7 ml-13 md:ml-14 pl-0 md:pl-0">
                      <div className="ml-13">
                        <div className="pl-13 md:pl-[72px] -mt-2">
                          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="relative mt-14 md:mt-16 overflow-hidden rounded-[2rem] animate-fadeUp" style={{ animationDelay: '0.5s' }}>
          <div className="absolute inset-0 bg-gradient-brand" />
          <div className="absolute inset-0 shine-overlay opacity-50" />
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-hotpink/25 blur-3xl" />

          <div className="relative z-10 p-8 md:p-12 text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-semibold mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              I respond within 24 hours
            </div>
            <h3 className="text-2xl md:text-4xl font-extrabold mb-4 font-space tracking-tight">
              Still have questions?
            </h3>
            <p className="text-white/90 mb-8 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
              Can't find the answer you're looking for? Reach out to me directly and I'll get back to you super fast!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-primary font-bold hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 shadow-juicy"
            >
              <span>💬</span>
              Contact Me
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
