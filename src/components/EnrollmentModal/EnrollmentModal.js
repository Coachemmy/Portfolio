import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

const EnrollmentModal = ({ isOpen, onClose, course }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Environment variables
  const WHATSAPP_NUMBER = process.env.REACT_APP_WHATSAPP_NUMBER || '8618202561437';
  const PAYSTACK_PUBLIC_KEY = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || '';
  const EMAIL = process.env.REACT_APP_EMAIL || 'coachemmyb@gmail.com';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendWhatsAppNotification = (transactionRef) => {
    const message = encodeURIComponent(
      `🎉 NEW PAYMENT RECEIVED!\n\n` +
      `━━━━━━━━━━━━━━\n` +
      `📝 TRANSACTION DETAILS\n` +
      `━━━━━━━━━━━━━━\n` +
      `🎓 Course: ${course?.title}\n` +
      `💰 Amount: ₦${course?.price?.toLocaleString()}\n` +
      `🔢 Transaction Ref: ${transactionRef}\n` +
      `📅 Date: ${new Date().toLocaleDateString()}\n` +
      `🕐 Time: ${new Date().toLocaleTimeString()}\n` +
      `━━━━━━━━━━━━━━\n` +
      `👤 STUDENT DETAILS\n` +
      `━━━━━━━━━━━━━━\n` +
      `Full Name: ${formData.fullName}\n` +
      `📧 Email: ${formData.email}\n` +
      `📱 WhatsApp: ${formData.whatsapp}\n` +
      (formData.message ? `💬 Message: ${formData.message}\n` : '') +
      `━━━━━━━━━━━━━━\n` +
      `✅ Payment verified via Paystack\n` +
      `Please confirm enrollment!`
    );
    
    const newWindow = window.open('about:blank', '_blank');
    setTimeout(() => {
      if (newWindow && !newWindow.closed) {
        newWindow.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
      }
    }, 1000);
  };

  const sendEmailNotification = (transactionRef) => {
    const subject = encodeURIComponent(`New Enrollment - ${course?.title} - ${formData.fullName}`);
    const body = encodeURIComponent(
      `New Enrollment Received!\n\n` +
      `Course: ${course?.title}\n` +
      `Amount: ₦${course?.price?.toLocaleString()}\n` +
      `Transaction Ref: ${transactionRef}\n\n` +
      `Student Details:\n` +
      `Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `WhatsApp: ${formData.whatsapp}\n` +
      `Message: ${formData.message || 'None'}`
    );
    
    const emailLink = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`New Enrollment - ${course?.title}\n\nStudent: ${formData.fullName}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nAmount: ₦${course?.price?.toLocaleString()}\nRef: ${transactionRef}`);
    }
  };

  const handlePayment = (e) => {
    e.preventDefault();
    
    if (!PAYSTACK_PUBLIC_KEY) {
      alert('Payment configuration error. Please contact support.');
      return;
    }
    
    setIsProcessing(true);

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: formData.email,
      amount: course?.price * 100, // Paystack uses kobo
      currency: 'NGN',
      ref: `COACHEMMY-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      metadata: {
        course: course?.title,
        fullName: formData.fullName,
        whatsapp: formData.whatsapp,
        message: formData.message,
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "full_name",
            value: formData.fullName
          },
          {
            display_name: "WhatsApp Number",
            variable_name: "whatsapp_number",
            value: formData.whatsapp
          },
          {
            display_name: "Course",
            variable_name: "course",
            value: course?.title
          },
          {
            display_name: "Message",
            variable_name: "message",
            value: formData.message || "None"
          }
        ]
      },
      callback: (response) => {
        setIsProcessing(false);
        setIsSubmitted(true);
        const transactionRef = response.reference;
        sendWhatsAppNotification(transactionRef);
        setTimeout(() => {
          sendEmailNotification(transactionRef);
        }, 2000);
      },
      onClose: () => {
        setIsProcessing(false);
      }
    });

    handler.openIframe();
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsProcessing(false);
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
      message: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

        <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-5 md:p-8 max-h-[90vh] overflow-y-auto">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <CloseIcon />
          </button>

          {!isSubmitted ? (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Enroll Now
                </h2>
                <p className="text-gray-600 text-sm">
                  Course: <span className="font-semibold text-primary">{course?.title}</span>
                </p>
                <p className="text-gray-600 text-sm">
                  Amount: <span className="font-bold text-xl text-primary">₦{course?.price?.toLocaleString()}</span>
                </p>
              </div>

              <form onSubmit={handlePayment} className="space-y-4">
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
                    placeholder="Enter your full name"
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
                    placeholder="your.email@example.com"
                  />
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Any questions or additional information..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Pay Now'
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Secure payment powered by Paystack
                </p>
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
                Payment Successful!
              </h3>

              <p className="text-gray-600 mb-4">
                Thank you, <span className="font-semibold">{formData.fullName}</span>! Your enrollment is confirmed.
              </p>

              <p className="text-sm text-gray-500 mb-6">
                You will receive a confirmation on your WhatsApp <span className="font-medium">{formData.whatsapp}</span> shortly.
              </p>

              <div className="bg-primary/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-primary font-medium">
                  Course: {course?.title}
                </p>
                <p className="text-lg font-bold text-primary">
                  Amount: ₦{course?.price?.toLocaleString()}
                </p>
              </div>

              <p className="text-xs text-gray-400 mb-6">
                CoachEmmy will contact you shortly via WhatsApp with course access details.
              </p>

              <button
                onClick={handleClose}
                className="w-full py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-all duration-300"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;