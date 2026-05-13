import { pricing } from '../../portfolio';

const Pricing = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the perfect learning plan for your goals. All courses include lifetime access and certificates.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            6-Week Tech Courses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.courses.map((course, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {course.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {course.duration}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-gray-500 dark:text-gray-400">₦</span>
                    <span className="text-4xl font-bold text-primary">
                      {course.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
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
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Personalized Coaching
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 border-2 border-yellow-200 dark:border-yellow-700">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {pricing.coaching.crypto.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {pricing.coaching.crypto.description}
                </p>
                <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                  {pricing.coaching.crypto.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pricing.coaching.crypto.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0"
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
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105">
                Start Coaching
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border-2 border-purple-200 dark:border-purple-700">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {pricing.coaching.faceless.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {pricing.coaching.faceless.description}
                </p>
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                  {pricing.coaching.faceless.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pricing.coaching.faceless.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0"
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
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
                Start Coaching
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need a Custom Plan?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Looking for corporate training or custom curriculum? Let's discuss your specific needs and create a tailored learning experience.
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;