import { useState, useEffect, useRef } from 'react';
import { webServices } from '../../portfolio';
import FloatingBubbles from '../FloatingBubbles/FloatingBubbles';

const WebServices = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const WHATSAPP_NUMBER = '8618202561437';

  const handleContactUs = (service) => {
    setSelectedService(service);
    setShowContactForm(true);
    setFormData({ ...formData, service: service.title });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setIsSubmitted(true); };

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `Hi CoachEmmy! I'm interested in ${selectedService?.title} website development.\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nMy WhatsApp: ${formData.whatsapp}\nService: ${selectedService?.title}\nBudget Range: ${selectedService?.priceRange}\n\n${formData.message ? `Message: ${formData.message}` : ''}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setShowContactForm(false);
    setIsSubmitted(false);
    setFormData({ fullName: '', email: '', whatsapp: '', service: '', message: '' });
  };

  const handleCloseModal = () => {
    setShowContactForm(false);
    setIsSubmitted(false);
    setFormData({ fullName: '', email: '', whatsapp: '', service: '', message: '' });
  };

  const cardTints = [
    'from-primary/18 via-skyblue/15 to-secondary/15',
    'from-mint/18 via-primary/10 to-violet/15',
    'from-accent/15 via-peach/15 to-hotpink/15',
  ];

  return (
    <section id="web-services" ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-skyblue/5 to-cyan-50/40" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-gradientMesh" />
      <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
      <div className="absolute top-10 -right-20 w-80 h-80 rounded-full bg-skyblue/15 blur-3xl animate-aurora pointer-events-none" />
      <div className="absolute bottom-10 -left-10 w-96 h-96 rounded-full bg-primary/15 blur-3xl animate-aurora pointer-events-none" style={{ animationDelay: '-6s' }} />

      <FloatingBubbles count={6} color="gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}`}>
          <span className="btn--chip mb-5">
            <span>💻</span>
            Web Development
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-space tracking-tighter-2">
            <span className="text-gradient-brand">Web</span> Development Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional website development for individuals, businesses, and organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {webServices.map((service, index) => (
            <div
              key={service.id}
              className={`tilt-3d-wrap transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-md'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="tilt-3d h-full">
                <div className="relative h-full card-modern border-gradient group p-5 md:p-8 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cardTints[index % cardTints.length]} opacity-50 pointer-events-none group-hover:opacity-80 transition-opacity duration-500`} />
                  <div className="absolute inset-0 shine-overlay opacity-40 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute -top-20 -right-16 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none group-hover:scale-125 transition-all duration-700" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="relative tilt-layer-deep mb-6">
                      <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-20 blur-md group-hover:opacity-45 transition-opacity duration-500 group-hover:animate-pulseGlow" />
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-3xl glass border border-white/60 shadow-soft flex items-center justify-center transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                        <span className="text-5xl md:text-6xl group-hover:animate-wiggle inline-block transition-transform duration-500">
                          {service.icon}
                        </span>
                      </div>
                    </div>

                    <div className="tilt-layer-mid">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 font-space tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base font-bold text-gradient-brand mb-4">
                        {service.tagline}
                      </p>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="tilt-layer-mid mb-2">
                      <div className="flex items-center justify-between text-sm md:text-base mb-1">
                        <span className="badge-gradient px-3 py-1">{service.duration}</span>
                      </div>
                      <div className="mb-6">
                        <div className="text-xs md:text-sm text-gray-500 mb-1 font-semibold uppercase tracking-wide">Price Range:</div>
                        <span className="font-extrabold text-2xl md:text-3xl text-gradient-brand font-space tracking-tight">
                          {service.priceRange}
                        </span>
                      </div>
                    </div>

                    <ul className="tilt-layer-mid space-y-3 mb-8 flex-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 group/item">
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
                        onClick={() => handleContactUs(service)}
                        className="btn btn--primary w-full rounded-2xl text-sm md:text-base shine-overlay"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                          Reach Out →
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

      {showContactForm && (
        <div className="fixed inset-0 z-[60] overflow-y-auto animate-fadeIn">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleCloseModal} />

            <div className="relative bg-white rounded-3xl shadow-card-hover max-w-lg w-full p-6 md:p-8 max-h-[92vh] overflow-y-auto glass border border-white/70 animate-popIn">
              {/* decorative gradient corner */}
              <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-brand opacity-20 blur-3xl pointer-events-none" />
              <div className="absolute inset-0 shine-overlay opacity-30 pointer-events-none rounded-3xl" />

              {!isSubmitted ? (
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-juicy">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-space tracking-tight">
                        Let's Discuss Your Project
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 ml-15">
                    Fill in your details and we'll get back to you shortly via WhatsApp for a personalized quote.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name', required: true },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your.email@example.com', required: true },
                      { name: 'whatsapp', label: 'My WhatsApp Number', type: 'tel', placeholder: '+234 xxx xxx xxxx', required: true },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-sm font-bold text-gray-700 mb-1.5">
                          {f.label} <span className="text-hotpink">*</span>
                        </label>
                        <input
                          type={f.type}
                          name={f.name}
                          required={f.required}
                          value={formData[f.name]}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/30 transition-all duration-300 outline-none"
                          placeholder={f.placeholder}
                        />
                      </div>
                    ))}

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Service Interest</label>
                      <input
                        type="text"
                        value={selectedService?.title}
                        readOnly
                        className="w-full px-4 py-3 rounded-2xl bg-gradient-brand-soft border border-primary/15 font-semibold text-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1.5">Project Details (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent hover:border-primary/30 transition-all duration-300 outline-none resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-2xl bg-gradient-brand text-white font-bold shadow-juicy hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 shine-overlay"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Continue to WhatsApp
                    </button>
                  </form>
                </div>
              ) : (
                <div className="relative z-10 text-center py-6">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-30 blur-md animate-glowRing" />
                    <div className="relative w-full h-full rounded-full glass border border-white/80 flex items-center justify-center animate-bounceSoft">
                      <svg className="w-12 h-12 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 font-space tracking-tight">
                    Ready to Connect!
                  </h3>
                  <p className="text-gray-600 mb-7 leading-relaxed">
                    Click below to send your project inquiry directly via WhatsApp
                  </p>

                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold hover:from-green-600 hover:to-emerald-600 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 shadow-juicy shine-overlay"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Open WhatsApp Chat
                  </button>

                  <button
                    onClick={handleCloseModal}
                    className="mt-5 px-6 py-2 text-gray-500 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-300 font-semibold"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebServices;
