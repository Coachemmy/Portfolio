import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

const PolicyModal = ({ isOpen, onClose, policy }) => {
  if (!isOpen || !policy) return null;

  const content = {
    'terms': {
      title: 'Terms of Service',
      lastUpdated: 'May 11, 2026',
      sections: [
        {
          heading: '1. Acceptance of Terms',
          text: `By accessing or using the services provided by CoachEmmy (hereinafter "CoachEmmy," "we," "us," or "our"),
          you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
          please do not use our services.`
        },
        {
          heading: '2. Services Offered',
          text: `CoachEmmy offers the following services:
          • Career Services (Crypto Coaching, Faceless AI Content Creation, Graphics Design)
          • Tech Courses (HTML, CSS, JavaScript, Python, Machine Learning, Git)
          • Web Development Services
          • Travel & Tourism Services`
        },
        {
          heading: '3. Payment Terms',
          text: `All payments must be made in Nigerian Naira (NGN) unless otherwise specified. Payment can be made via:
          • Bank transfer (Wema Bank, Opay, Kuda Bank)
          • Mobile money transfer
          • Cryptocurrency (for crypto-related services)`
        },
        {
          heading: '4. User Responsibilities',
          text: `You agree to provide accurate and complete information when registering for our services.
          You are responsible for maintaining the confidentiality of your account information and
          for all activities that occur under your account.`
        },
        {
          heading: '5. Intellectual Property',
          text: `All content, materials, and intellectual property provided through our services are the property
          of CoachEmmy or our licensed providers. You may not reproduce, distribute, or use any content
          without our prior written consent.`
        },
        {
          heading: '6. Disclaimers',
          text: `CoachEmmy provides services for educational and informational purposes only. We do not guarantee
          any specific results or outcomes from our services. Trading cryptocurrencies and investing involve
          significant risks, and you should never invest more than you can afford to lose.`
        },
        {
          heading: '7. Termination',
          text: `We reserve the right to terminate or suspend your access to our services at any time,
          without prior notice, for any reason, including but not limited to violation of these Terms.`
        },
        {
          heading: '8. Changes to Terms',
          text: `We may update these Terms from time to time. We will notify you of any changes by posting
          the updated Terms on our website. Your continued use of our services after the effective
          date of the updated Terms constitutes your acceptance of the changes.`
        },
        {
          heading: '9. Contact Us',
          text: `If you have any questions about these Terms, please contact us at:
          • Email: coachemmyb@gmail.com
          • WhatsApp: +86 18 2025 61437`
        }
      ]
    },
    'privacy': {
      title: 'Privacy Policy',
      lastUpdated: 'May 11, 2026',
      sections: [
        {
          heading: '1. Introduction',
          text: `CoachEmmy ("we," "us," or "our") is committed to protecting the privacy of our users ("you" or "your").
          This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.`
        },
        {
          heading: '2. Information We Collect',
          text: `We may collect the following types of personal information:
          • Name and contact information (email, phone number, WhatsApp number)
          • Payment information (for course/service enrollment)
          • Usage data (how you interact with our website)
          • Communication history (WhatsApp messages, emails)`
        },
        {
          heading: '3. How We Use Your Information',
          text: `We use your personal information for the following purposes:
          • To provide and deliver our services
          • To process payments and manage your account
          • To communicate with you about our services
          • To improve our website and services
          • To send you important updates and notifications`
        },
        {
          heading: '4. Data Protection',
          text: `We implement appropriate technical and organizational measures to protect your personal information
          from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet
          or electronic storage is completely secure, and we cannot guarantee absolute security.`
        },
        {
          heading: '5. Sharing Your Information',
          text: `We will not sell, rent, or share your personal information with third parties except:
          • When required by law or legal process
          • To trusted service providers who assist us in delivering our services
          • With your explicit consent`
        },
        {
          heading: '6. Your Rights',
          text: `You have the right to:
          • Access the personal information we hold about you
          • Correct any inaccurate or incomplete information
          • Request deletion of your personal information
          • Opt out of receiving marketing communications`
        },
        {
          heading: '7. Changes to This Policy',
          text: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting
          the updated policy on our website. Your continued use of our services after the effective date
          constitutes your acceptance of the changes.`
        },
        {
          heading: '8. Contact Us',
          text: `If you have any questions about this Privacy Policy, please contact us at:
          • Email: coachemmyb@gmail.com
          • WhatsApp: +86 18 2025 61437`
        }
      ]
    },
    'refund': {
      title: 'Refund Policy',
      lastUpdated: 'May 11, 2026',
      sections: [
        {
          heading: '1. Refund Eligibility',
          text: `Refunds are available under the following conditions:
          • Course/service not yet started: Full refund available
          • Course/service partially completed: Pro-rated refund based on progress
          • Technical issues preventing access: Full refund available`
        },
        {
          heading: '2. Refund Process',
          text: `To request a refund, please follow these steps:
          1. Contact us via WhatsApp or email with your order details
          2. Provide a reason for the refund request
          3. Our team will review your request within 3 business days
          4. Approved refunds will be processed within 5-7 business days`
        },
        {
          heading: '3. Non-Refundable Items',
          text: `The following items are non-refundable:
          • Digital products (e-books, templates, guides) once downloaded
          • Completed courses/services
          • Consultation fees for travel services
          • Graphics design projects once approved`
        },
        {
          heading: '4. Cancellation Policy',
          text: `You may cancel your enrollment up to 48 hours before the course start date for a full refund.
          After this period, a 20% cancellation fee will apply.`
        },
        {
          heading: '5. Payment Method for Refunds',
          text: `Refunds will be processed to the original payment method.
          If you paid via bank transfer, please provide your bank account details for the refund.`
        },
        {
          heading: '6. Contact Us',
          text: `If you have any questions about our refund policy, please contact us at:
          • Email: coachemmyb@gmail.com
          • WhatsApp: +86 18 2025 61437`
        }
      ]
    }
  };

  const policyContent = content[policy];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-fadeIn">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xl animate-fadeIn" onClick={onClose} />
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative bg-white/95 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn backdrop-blur-md">
          <button
            onClick={onClose}
            className="sticky top-4 left-full float-right mr-4 -mt-4 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-600 hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
          >
            <CloseIcon />
          </button>

          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{policyContent.title}</h1>
            <p className="text-sm text-gray-500 mb-6">Last updated: {policyContent.lastUpdated}</p>

            <div className="space-y-6 text-gray-600">
              {policyContent.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{section.heading}</h2>
                  <p className="whitespace-pre-line">{section.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={onClose}
                className="px-12 py-4 bg-red-500 text-white rounded-xl font-bold text-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;