import { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! I am CoachEmmy AI. How can I assist you today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const websiteKnowledge = `
CoachEmmy Portfolio Website Information:

Courses Offered:
- Tech Courses: HTML, CSS, JavaScript, Python, Machine Learning, Git (6 weeks duration, ₦20,000 each)
- Career Services: Crypto Coaching, Faceless AI Content Creation (₦35,000)
- Web Services: Website Development (₦100,000 - ₦1,000,000 depending on complexity)
- Travel & Tourism: Consultancy, relocation assistance, currency exchange guidance
- Affiliate Program: 13% commission per referral

Contact Information:
- WhatsApp: +86 18 2025 61437
- Email: coachemmyb@gmail.com
- Location: Nigeria

Payment Methods:
- Paystack integration for secure online payments
- Bank transfer options available

Frequently Asked Questions:
1. How do I enroll in a course? 
   - Click "Enroll Now" on any course, fill out the form, and complete payment via Paystack.
2. What payment methods are accepted?
   - Paystack (card payments) and bank transfers are accepted.
3. How do I contact support?
   - WhatsApp is the preferred method: +86 18 2025 61437
4. Are there any free resources?
   - Yes, some free guides are available for download.
5. Is there an affiliate program?
   - Yes, 13% commission on referrals.
`;

const getSmartResponse = (userInput) => {
  const lowerInput = userInput.toLowerCase();
  
  const responses = {
    course: [
      "I offer several tech courses including HTML, CSS, JavaScript, Python, Machine Learning, and Git. Each course is 6 weeks long and costs ₦20,000. Would you like more details about any specific course?",
      "Our courses cover web development (HTML, CSS, JavaScript) and programming (Python, Machine Learning, Git). All are 6 weeks at ₦20,000 each. Which one interests you?"
    ],
    crypto: [
      "Our Crypto Coaching service costs ₦35,000 and covers cryptocurrency trading strategies, analysis, and investment guidance. Would you like to enroll?",
      "Crypto Coaching is available for ₦35,000. It includes personalized guidance on crypto trading and investment. Contact us via WhatsApp to get started!"
    ],
    price: [
      "Tech courses are ₦20,000 each (6 weeks). Career services like Crypto Coaching are ₦35,000. Web services range from ₦100k-₦1M depending on requirements.",
      "Pricing varies by service: Tech courses at ₦20k, Career services at ₦35k, Web services from ₦100k-₦1M. Which service are you interested in?"
    ],
    contact: [
      "You can reach us via WhatsApp at +86 18 2025 61437 or email at coachemmyb@gmail.com. We respond fastest on WhatsApp!",
      "Best way to contact us is through WhatsApp: +86 18 2025 61437. We're available to help with any questions!"
    ],
    enroll: [
      "To enroll, click on any course card and select 'Enroll Now'. Fill out the form with your details and complete payment via Paystack. Let us know if you need assistance!",
      "Enrollment is easy! Click 'Enroll Now' on your chosen course, fill the form, and pay via Paystack. We'll confirm your enrollment via WhatsApp."
    ],
    affiliate: [
      "Our affiliate program offers 13% commission on every referral. To join, fill out the affiliate application form on our website. Start earning today!",
      "Join our affiliate program and earn 13% commission per referral! Apply through the affiliate section on our site."
    ],
    web: [
      "Web services start at ₦100,000 and go up to ₦1,000,000 depending on project complexity. Contact us with your requirements for a personalized quote.",
      "We build websites ranging from ₦100k-₦1M. Send us your project details via WhatsApp for a custom quote!"
    ],
    travel: [
      "Our Travel & Tourism services include consultancy, relocation assistance, and currency exchange guidance. Contact us for personalized advice!",
      "We offer travel consultancy, relocation help, and currency exchange guidance. Message us on WhatsApp for details!"
    ],
    hello: [
      "Hello! I'm CoachEmmy AI. How can I assist you today? I can help with course information, pricing, enrollment, or any other questions!",
      "Hi there! Welcome to CoachEmmy. What would you like to know about our courses or services?"
    ],
    help: [
      "I'm here to help! I can provide information about courses, pricing, enrollment, or how to contact us. What would you like to know?",
      "How can I assist you today? Feel free to ask about our tech courses, career services, web development, or travel consultancy!"
    ],
    default: [
      `Here's some information about CoachEmmy:\n\n${websiteKnowledge}\n\nIs there anything specific you'd like to know?`,
      `Thanks for asking! Here's what CoachEmmy offers:\n\n${websiteKnowledge}\n\nHow can I help you further?`
    ]
  };

  if (lowerInput.includes('course') || lowerInput.includes('courses') || lowerInput.includes('learn')) {
    return responses.course[Math.floor(Math.random() * responses.course.length)];
  } else if (lowerInput.includes('crypto') || lowerInput.includes('bitcoin') || lowerInput.includes('trading')) {
    return responses.crypto[Math.floor(Math.random() * responses.crypto.length)];
  } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('how much')) {
    return responses.price[Math.floor(Math.random() * responses.price.length)];
  } else if (lowerInput.includes('contact') || lowerInput.includes('whatsapp') || lowerInput.includes('email')) {
    return responses.contact[Math.floor(Math.random() * responses.contact.length)];
  } else if (lowerInput.includes('enroll') || lowerInput.includes('register') || lowerInput.includes('sign up')) {
    return responses.enroll[Math.floor(Math.random() * responses.enroll.length)];
  } else if (lowerInput.includes('affiliate') || lowerInput.includes('referral') || lowerInput.includes('commission')) {
    return responses.affiliate[Math.floor(Math.random() * responses.affiliate.length)];
  } else if (lowerInput.includes('web') || lowerInput.includes('website') || lowerInput.includes('development')) {
    return responses.web[Math.floor(Math.random() * responses.web.length)];
  } else if (lowerInput.includes('travel') || lowerInput.includes('tourism') || lowerInput.includes('relocation')) {
    return responses.travel[Math.floor(Math.random() * responses.travel.length)];
  } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
    return responses.hello[Math.floor(Math.random() * responses.hello.length)];
  } else if (lowerInput.includes('help') || lowerInput.includes('assist')) {
    return responses.help[Math.floor(Math.random() * responses.help.length)];
  }
  
  return responses.default[Math.floor(Math.random() * responses.default.length)];
};

const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const apiKey = process.env.REACT_APP_CHATBOT_API_KEY;
    
    if (!apiKey || apiKey === 'sk-xxx') {
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: 'I apologize, but the chat service is currently unavailable. Please contact us directly via WhatsApp at +86 18 2025 61437 or email at coachemmyb@gmail.com for assistance.',
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      return;
    }

    try {
      console.log('Sending request to DeepSeek API...');
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: `You are CoachEmmy AI, a helpful AI assistant for CoachEmmy's portfolio website.
              
              CoachEmmy offers these services:
              - Tech Courses: HTML, CSS, JavaScript, Python, Machine Learning, Git (6 weeks each, ₦20,000)
              - Career Services: Crypto Coaching, Faceless AI Content Creation (₦35,000)
              - Web Services: Website building (₦100,000 - ₦1,000,000)
              - Travel & Tourism: Consultancy, relocation, currency exchange
              - Affiliate Program: 13% commission per referral
              
              Contact:
              - WhatsApp: +86 18 2025 61437
              - Email: coachemmyb@gmail.com
              - Location: Nigeria
              
              Answer questions friendly, helpful, and professionally. Keep responses concise but informative.`
            },
            {
              role: 'user',
              content: inputValue
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      console.log('API Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);
      
      if (!data.choices || !data.choices[0]?.message?.content) {
        throw new Error('Invalid API response format');
      }

      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: data.choices[0].message.content,
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chatbot API error:', error.message);
      
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: `I'm having trouble connecting to the AI service right now. Please contact CoachEmmy directly via WhatsApp at +86 18 2025 61437 or email at coachemmyb@gmail.com for assistance.`,
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed top-[90%] border-r-white right-2 z-40 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
          isOpen ? 'bg-red-500' : 'hover:scale-105'
        }`}
      >
        {isOpen ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="font-semibold text-sm">Close</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="font-semibold text-sm">AI Assistant</span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-32 right-6 z-40 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary px-6 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">CoachEmmy AI</h3>
                <p className="text-xs text-white/70">Online - Available to help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/60' : 'text-gray-400'}`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 px-4 py-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;