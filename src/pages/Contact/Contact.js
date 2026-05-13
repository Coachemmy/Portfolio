import { useState } from 'react';
import { contact } from '../../portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or want to work together? Fill out the form below and I'll get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Message Sent Successfully!
                </h3>

                <p className="text-gray-600 mb-8">
                  Thank you for reaching out, <span className="font-semibold">{formData.name}</span>! I will get back to you soon.
                </p>

                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Other Ways to Reach Me
              </h3>

              <div className="space-y-6">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">{contact.email}</p>
                  </div>
                </a>

                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="font-medium text-gray-900">{contact.phone}</p>
                  </div>
                </a>

                <a
                  href={contact.social?.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <p className="font-medium text-gray-900">Connect with us</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Response
              </h3>
              <p className="text-gray-600 mb-4">
                I typically respond to all inquiries within 24-48 hours. For urgent matters, please reach out via WhatsApp.
              </p>
              <p className="text-sm text-gray-500">
                Available for: Tech Coaching, Crypto Consulting, Freelance Projects, Speaking Engagements
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;