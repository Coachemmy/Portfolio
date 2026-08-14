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
  const typingIntervalRef = useRef(null);
  const messagesEndRef = useRef(null);

  const clearStreaming = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearStreaming();
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const streamText = (messageId, fullText, onDone) => {
    let i = 0;
    // ~25 chars per 100ms feels natural; for very long replies speed it up slightly
    const delay = fullText.length > 500 ? 10 : 18;

    typingIntervalRef.current = setInterval(() => {
      setMessages(prev => prev.map(m =>
        m.id === messageId
          ? { ...m, text: fullText.slice(0, i) }
          : m
      ));
      i++;
      if (i > fullText.length) {
        clearStreaming();
        if (onDone) onDone();
      }
    }, delay);
  };

const handleSend = async () => {
    if (!inputValue.trim()) return;

    // If AI is still typing out the last answer, cancel the stream so we don't have competing updates
    clearStreaming();

    const nextId = messages.length + 1;

    const userMessage = {
      id: nextId,
      sender: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString()
    };

    const pendingBotId = nextId + 1;

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    const apiKey = process.env.REACT_APP_GROQ_API_KEY;

    if (!apiKey) {
      const fallbackText = 'I apologize, but the chat service is currently unavailable. Please contact us directly via WhatsApp at +86 18 2025 61437 or email at coachemmyb@gmail.com for assistance.';
      setMessages(prev => [...prev, {
        id: pendingBotId,
        sender: 'bot',
        text: '',
        timestamp: new Date().toLocaleTimeString()
      }]);
      setIsTyping(false);
      streamText(pendingBotId, fallbackText);
      return;
    }

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'llama-3.1-8b-instant',
          messages: [
            {
              role: 'system',
              content: `You are CoachEmmy AI — the powerful AI sales & support assistant for CoachEmmy's portfolio website. CoachEmmy (Emmanuel Abiola) is a Software/AI Engineer & Educator based in Nigeria with 8+ years of experience, 85+ students trained, and 39+ projects completed.

PERSONALITY:
- Confident, friendly, professional — speak like a knowledgeable senior coach
- Use natural Nigerian/African English (not too formal)
- When asked about pricing or services, be specific and complete. It's OK to give a structured breakdown
- If user sounds interested, proactively suggest they reach out via WhatsApp to enroll

CONTACT:
- WhatsApp: +86 18 2025 61437  (or wa.me/8618202561437)
- Email: coachemmyb@gmail.com
- Payment accepted: Bank transfer (GTBank & Opay), Paystack on enrollment
- 6-week courses: full payment required before access
- Certificates issued on completion
- Lifetime access to course content
- Sessions: WhatsApp groups + Zoom, all recorded

====================
SERVICES & PRICING
====================

1. TECH COURSES (6 weeks each, lifetime access, WhatsApp support)
   • HTML Fundamentals — ₦49,999
   • CSS Styling Mastery — ₦49,999
   • JavaScript Development — ₦79,999
   • Python Programming — ₦119,999
   • Machine Learning — ₦179,999
   • Git & Version Control — ₦59,999

2. CAREER / 1-ON-1 COACHING
   • Crypto Coaching — ₦149,999  (Trading strategies, Technical analysis, Portfolio & risk management, DeFi/staking, Real-time insights)
   • Faceless AI Content Creation — ₦99,999  (AI video tools, Niche selection, Content automation, YouTube SEO, Monetization, Channel growth tactics)
   • Graphics Design — ₦99,999 per project  (Logos, branding, social media, flyers, banners, business cards, custom illustrations)

3. TRAVEL & CAREER CONSULTING
   • China Travel Consultation — ₦49,999 per session  (Visa guidance, relocation, expat advice, documentation checklist, business travel planning)
   • Tech Career Consulting — ₦79,999 per session  (Tech path recommendation, learning roadmap, CV + LinkedIn + Roadmap review, mentorship, industry insights)
   • Currency Exchange (NGN ↔ Yuan) — Contact CoachEmmy on WhatsApp for current rate

4. WEB DEVELOPMENT (AI-Enabled, full websites)
   • Personal & Small Business — ₦399,999 (range ₦399,999 – ₦699,999) | 1–3 weeks
   • NGO & Educational — ₦1,199,999 (range ₦799,999 – ₦1,499,999) | 3–6 weeks
   • E-commerce & Enterprise — ₦1,999,999 (range ₦1,999,999 – ₦4,999,999) | 4–12 weeks

RULES:
1. Always quote the EXACT prices above. Never use old/approximate figures
2. If user asks about pricing → give the full category list for that service area
3. If user asks which course to start with → recommend "HTML → CSS → JavaScript" for web, or "Python → Machine Learning" for AI
4. Keep responses friendly and structured; don't ramble, but be complete when it's a pricing/service question
5. If unsure, end with: "For detailed info and to enroll, send a message to CoachEmmy on WhatsApp at +86 18 2025 61437!"`
            },
            ...messages.filter(m => m.id > 1).map(m => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            })),
            { role: 'user', content: userMessage.text }
          ],
          max_tokens: 600,
          temperature: 0.6
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
      }

      const data = await response.json();

      if (!data.choices || !data.choices[0]?.message?.content) {
        throw new Error('Invalid API response format');
      }

      const replyText = data.choices[0].message.content;

      // First add an empty bot message, then stream text into it
      setMessages(prev => [...prev, {
        id: pendingBotId,
        sender: 'bot',
        text: '',
        timestamp: new Date().toLocaleTimeString()
      }]);

      // Hide the 3-dot "typing" indicator now that the bot bubble exists.
      // The "typing cursor" feeling comes from the streaming characters below.
      setIsTyping(false);

      streamText(pendingBotId, replyText);
    } catch (error) {
      const errorText = `I'm having trouble connecting to the AI service right now. Please contact CoachEmmy directly via WhatsApp at +86 18 2025 61437 or email at coachemmyb@gmail.com for assistance.`;
      setMessages(prev => [...prev, {
        id: pendingBotId,
        sender: 'bot',
        text: '',
        timestamp: new Date().toLocaleTimeString()
      }]);
      setIsTyping(false);
      streamText(pendingBotId, errorText);
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
        className={`fixed bottom-16 right-4 md:top-[90%] md:right-2 z-40 px-4 md:px-6 py-3 rounded-full bg-gradient-to-r from-black to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
          isOpen ? 'bg-red-500' : 'hover:scale-105'
        }`}
      >
        {isOpen ? (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="font-semibold text-sm hidden md:inline">Close</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="font-semibold text-sm hidden md:inline">CoachEmmy AI Assistant</span>
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 left-2 right-2 md:bottom-40 md:right-6 md:left-auto z-40 w-auto md:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp max-h-[70vh] md:max-h-none flex flex-col">
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
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-[200px] max-h-[300px] md:h-80 md:max-h-none">
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