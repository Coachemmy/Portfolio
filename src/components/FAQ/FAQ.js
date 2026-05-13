import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faq } from '../../portfolio';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about my services and courses
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Can't find the answer you're looking for? Reach out to me directly.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;