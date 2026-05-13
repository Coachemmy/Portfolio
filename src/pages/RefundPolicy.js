import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm -z-10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/95 rounded-2xl shadow-lg p-8 backdrop-blur-md animate-fadeInUp">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Refund Policy</h1>
          
          <div className="space-y-6 text-gray-600">
            <p>Last updated: May 11, 2026</p>

            <h2 className="text-xl font-semibold text-gray-900">1. Refund Eligibility</h2>
            <p>
              Refunds are available under the following conditions:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Course/service not yet started: Full refund available</li>
                <li>Course/service partially completed: Pro-rated refund based on progress</li>
                <li>Technical issues preventing access: Full refund available</li>
              </ul>
            </p>

            <h2 className="text-xl font-semibold text-gray-900">2. Refund Process</h2>
            <p>
              To request a refund, please follow these steps:
              <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>Contact us via WhatsApp or email with your order details</li>
                <li>Provide a reason for the refund request</li>
                <li>Our team will review your request within 3 business days</li>
                <li>Approved refunds will be processed within 5-7 business days</li>
              </ol>
            </p>

            <h2 className="text-xl font-semibold text-gray-900">3. Non-Refundable Items</h2>
            <p>
              The following items are non-refundable:
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Digital products (e-books, templates, guides) once downloaded</li>
                <li>Completed courses/services</li>
                <li>Consultation fees for travel services</li>
                <li>Graphics design projects once approved</li>
              </ul>
            </p>

            <h2 className="text-xl font-semibold text-gray-900">4. Cancellation Policy</h2>
            <p>
              You may cancel your enrollment up to 48 hours before the course start date for a full refund. 
              After this period, a 20% cancellation fee will apply.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">5. Payment Method for Refunds</h2>
            <p>
              Refunds will be processed to the original payment method. 
              If you paid via bank transfer, please provide your bank account details for the refund.
            </p>

            <h2 className="text-xl font-semibold text-gray-900">6. Contact Us</h2>
            <p>
              If you have any questions about our refund policy, please contact us at:
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

export default RefundPolicy;