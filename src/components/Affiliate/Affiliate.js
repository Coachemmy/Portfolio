import { useState } from 'react';
import FloatingBubbles from '../FloatingBubbles/FloatingBubbles';

const Affiliate = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    bankName: '',
    accountName: '',
    accountNumber: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '8618202561437';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `🤝 NEW AFFILIATE APPLICATION\n\n` +
      `👤 Full Name: ${formData.fullName}\n` +
      `📧 Email: ${formData.email}\n` +
      `📱 WhatsApp: ${formData.whatsapp}\n` +
      `🏦 Bank Name: ${formData.bankName}\n` +
      `👤 Account Name: ${formData.accountName}\n` +
      `🔢 Account Number: ${formData.accountNumber}\n` +
      (formData.message ? `📝 Message: ${formData.message}\n` : '') +
      `\nI'm interested in becoming an affiliate partner!`
    );

    setIsSubmitted(true);
    
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    }, 1000);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-50 via-indigo-50/50 to-pink-50/30 overflow-hidden">
      <FloatingBubbles count={8} color="primary" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Affiliate Program
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Earn 13% commission on every successful referral. Partner with us and grow together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-4">
              <img
                src="/images/affliate.png"
                alt="Business partnership"
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl font-bold text-primary">13%</div>
                <div className="text-sm text-gray-500">Commission</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl font-bold text-primary">₦20K+</div>
                <div className="text-sm text-gray-500">Avg Earning</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-gray-500">Affiliates</div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Apply Now
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bank Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="bankName"
                        required
                        value={formData.bankName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="e.g., Wema Bank"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="accountName"
                        required
                        value={formData.accountName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Account name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Account Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="accountNumber"
                        required
                        value={formData.accountNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="0123456789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about yourself and why you want to partner with us..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Application Submitted!
                </h3>

                <p className="text-gray-600 mb-4">
                  Thank you, {formData.fullName}! Your affiliate application has been received.
                </p>

                <p className="text-sm text-gray-500">
                  We'll contact you shortly via WhatsApp {formData.whatsapp} to discuss next steps.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">High Commissions</h3>
            <p className="text-gray-600 text-sm">
              Earn 13% on every successful referral - one of the highest rates in the industry.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
            <p className="text-gray-600 text-sm">
              Track your referrals and earnings in real-time with our dashboard.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Weekly Payouts</h3>
            <p className="text-gray-600 text-sm">
              Get paid weekly directly to your bank account. No waiting for months!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affiliate;