import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/95 rounded-2xl shadow-lg p-8 backdrop-blur-md animate-fadeInUp">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-600">
            <p>Last updated: May 11, 2026</p>

            <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
            <p>
              CoachEmmy ("we," "us," or "our") is committed to protecting the privacy of our users ("you" or "your"). 
              This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
            <p>
              We may collect the following types of personal information:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Name and contact information (email, phone number, WhatsApp number)</li>
                <li>Payment information (for course/service enrollment)</li>
                <li>Usage data (how you interact with our website)</li>
                <li>Communication history (WhatsApp messages, emails)</li>
              </ul>
            </p>

            <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
            <p>
              We use your personal information for the following purposes:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>To provide and deliver our services</li>
                <li>To process payments and manage your account</li>
                <li>To communicate with you about our services</li>
                <li>To improve our website and services</li>
                <li>To send you important updates and notifications</li>
              </ul>
            </p>

            <h2 className="text-xl font-semibold text-gray-900">4. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information 
              from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet 
              or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">5. Sharing Your Information</h2>
            <p>
              We will not sell, rent, or share your personal information with third parties except:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>When required by law or legal process</li>
                <li>To trusted service providers who assist us in delivering our services</li>
                <li>With your explicit consent</li>
              </ul>
            </p>

            <h2 className="text-xl font-semibold text-gray-900">6. Your Rights</h2>
            <p>
              You have the right to:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Access the personal information we hold about you</li>
                <li>Correct any inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of receiving marketing communications</li>
              </ul>
            </p>

            <h2 className="text-xl font-semibold text-gray-900">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
              the updated policy on our website. Your continued use of our services after the effective date 
              constitutes your acceptance of the changes.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;