import { about } from '../../portfolio';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="relative animate-fadeInLeft">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white">
              <img 
                src="/images/logo.png"
                alt="CoachEmmy"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 animate-bounceSoft"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg animate-bounceSoft">
              10+
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Welcome to <span className="text-primary relative inline-block">
                CoachEmmy
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <ellipse cx="100" cy="4" rx="80" ry="4" className="fill-current" />
                </svg>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto lg:mx-0 animate-fadeInRight" style={{ animationDelay: '0.2s' }}>
              {about.description}
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          {about.resume && (
            <a
              href={about.resume}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 inline-flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 animate-fadeIn"
              style={{ animationDelay: '0.4s' }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          )}
          
          <div className="flex gap-4 justify-center">
            {about.social.github && (
              <a
                href={about.social.github}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 animate-fadeIn hover:-translate-y-0.5"
                style={{ animationDelay: '0.5s' }}
              >
                GitHub
              </a>
            )}
            
            {about.social.linkedin && (
              <a
                href={about.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 animate-fadeIn hover:-translate-y-0.5"
                style={{ animationDelay: '0.6s' }}
              >
                LinkedIn
              </a>
            )}
          </div>
        </div> */}

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '85+', label: 'Students Trained' },
            { number: '39+', label: 'Projects Completed' },
            { number: '7+', label: 'Years Experience' },
            { number: '98%', label: 'Customer Satisfaction' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="animate-fadeIn hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${0.7 + index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;