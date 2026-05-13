import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/95 rounded-2xl shadow-lg p-8 backdrop-blur-md animate-fadeInUp">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-600">
            <p>Last updated: May 11, 2026</p>

            <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services provided by CoachEmmy (hereinafter "CoachEmmy," "we," "us," or "our"), 
              you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
              please do not use our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">2. Services Offered</h2>
            <p>
              CoachEmmy offers the following services:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Career Services (Crypto Coaching, Faceless AI Content Creation, Graphics Design)</li>
                <li>Tech Courses (HTML, CSS, JavaScript, Python, Machine Learning, Git)</li>
                <li>Web Development Services</li>
                <li>Travel & Tourism Services</li>
              </ul>
            </p>

            <h2 className="text-xl font-semibold text-gray-900">3. Payment Terms</h2>
            <p>
              All payments must be made in Nigerian Naira (NGN) unless otherwise specified. Payment can be made via:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Bank transfer (Wema Bank, Opay, Kuda Bank)</li>
                <li>Mobile money transfer</li>
                <li>Cryptocurrency (for crypto-related services)</li>
              </ul>
            </p>

            <h2 className="text-xl font-semibold text-gray-900">4. User Responsibilities</h2>
            <p>
              You agree to provide accurate and complete information when registering for our services. 
              You are responsible for maintaining the confidentiality of your account information and 
              for all activities that occur under your account.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">5. Intellectual Property</h2>
            <p>
              All content, materials, and intellectual property provided through our services are the property 
              of CoachEmmy or our licensed providers. You may not reproduce, distribute, or use any content 
              without our prior written consent.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">6. Disclaimers</h2>
            <p>
              CoachEmmy provides services for educational and informational purposes only. We do not guarantee 
              any specific results or outcomes from our services. Trading cryptocurrencies and investing involve 
              significant risks, and you should never invest more than you can afford to lose.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to our services at any time, 
              without prior notice, for any reason, including but not limited to violation of these Terms.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">8. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of any changes by posting 
              the updated Terms on our website. Your continued use of our services after the effective 
              date of the updated Terms constitutes your acceptance of the changes.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Email: coachemmyb@gmail.com</li>
                <li>WhatsApp: +86 18 2025 61437</li>
              </ul>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex justify-end">
            <button
              onClick={() => window.history.back()}
              className="px-12 py-4 bg-red-500 text-white rounded-xl font-bold text-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;