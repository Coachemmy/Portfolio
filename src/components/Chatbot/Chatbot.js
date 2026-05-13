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

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Using OpenAI-compatible API with free tier
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_CHATBOT_API_KEY || 'sk-xxx'}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: `You are CoachEmmy AI, a helpful assistant for CoachEmmy's portfolio website. 
              CoachEmmy offers:
              1. Tech Courses: HTML, CSS, JavaScript, Python, Machine Learning, Git (6 weeks each, ₦20,000)
              2. Career Services: Crypto Coaching, Faceless AI Content Creation (₦35,000)
              3. Web Services: Website building (₦100k-₦1M)
              4. Travel & Tourism: Consultancy, relocation, currency exchange
              5. Affiliate Program: 13% commission per referral
              
              Location: Nigeria
              WhatsApp: +86 18 2025 61437
              Email: coachemmyb@gmail.com
              
              Answer questions friendly and helpful.`
            },
            {
              role: 'user',
              content: inputValue
            }
          ],
          max_tokens: 500
        })
      });

      const data = await response.json();
      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: data.choices?.[0]?.message?.content || 'I apologize, but I cannot answer that right now. Please contact us via WhatsApp for assistance.',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const fallbackResponses = [
        'Thank you for your question! For detailed information, please contact us via WhatsApp at +86 18 2025 61437.',
        'I appreciate your inquiry. Our team will be happy to assist you. Feel free to reach out on WhatsApp.',
        'Great question! Please send us a message on WhatsApp for personalized assistance.',
        'We are here to help! Contact us via WhatsApp for more details.'
      ];

      const botMessage = {
        id: messages.length + 2,
        sender: 'bot',
        text: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
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
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-45' : 'hover:scale-110'
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
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