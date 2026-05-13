import { services } from '../../portfolio';

const Services = () => {
  const getColorClasses = (color) => {
    const colorMap = {
      yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      blue: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      green: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      indigo: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      red: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert coaching and training programs to help you master cryptocurrency, 
            AI content creation, and modern tech skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                service.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-bold bg-primary text-white rounded-full">
                    POPULAR
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-6xl mb-4">{service.icon}</div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                
                <p className="text-sm font-medium text-primary mb-4">
                  {service.tagline}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <span>Duration</span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {service.duration}
                    </span>
                  </div>
                  {service.price && (
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Price</span>
                      <span className="font-bold text-2xl text-primary">
                        ₦{service.price.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
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

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    service.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Enroll Now
                </button>
              </div>

              <div className={`h-1 w-full bg-gradient-to-r ${getColorClasses(service.color)}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;