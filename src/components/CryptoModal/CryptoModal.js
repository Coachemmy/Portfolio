// src/components/CryptoModal/CryptoModal.jsx
import { useState, useEffect } from 'react';

const CryptoModal = ({ isOpen, onClose }) => {
  const [cryptoPrices, setCryptoPrices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [showFreeSessionCard, setShowFreeSessionCard] = useState(false);

  // Fetch live crypto prices when modal opens
  useEffect(() => {
    if (!isOpen) {
      setShowPaymentDetails(false);
      setShowFreeSessionCard(false);
      setLoading(true);
      return;
    }

    const fetchPrices = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,cardano,solana&vs_currencies=usd'
        );
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setCryptoPrices(data);
      } catch (err) {
        console.error('Error fetching crypto prices:', err);
        setCryptoPrices(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, [isOpen]);

  // Handle "Start Free Crypto Session"
  const handleLearnCrypto = () => {
    setShowFreeSessionCard(true);
  };

  // Handle "Enroll Now"
  const handleDiamondPayment = () => {
    setShowPaymentDetails(true);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '500px',
          backgroundColor: 'white',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#6b7280',
            cursor: 'pointer',
            zIndex: 10,
          }}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(to right, #FFBE0B, #dc2626)',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', margin: 0 }}>
            🚀 Crypto Coaching
          </h2>
        </div>

        {/* Body */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {!showPaymentDetails && !showFreeSessionCard ? (
            <>
              <p style={{ color: '#374151', margin: 0, textAlign: 'center' }}>
                Get expert guidance on Bitcoin, Ethereum, trading, wallets, and more!
              </p>

              {/* 🔢 Live Crypto Prices */}
              <div style={{ backgroundColor: '#f9fafb', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ fontWeight: 'bold', marginBottom: '12px', color: '#1f2937' }}>
                  📈 Top Coins (USD)
                </h4>
                {loading ? (
                  <p style={{ textAlign: 'center', color: '#6b7280' }}>Loading prices...</p>
                ) : cryptoPrices ? (
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {Object.entries(cryptoPrices).map(([coin, priceData]) => (
                      <li
                        key={coin}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          padding: '6px 0',
                          borderBottom: '1px solid #e5e7eb',
                        }}
                      >
                        <span style={{ textTransform: 'capitalize', fontWeight: '500' }}>{coin}</span>
                        <strong>
                          ${priceData.usd.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </strong>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ textAlign: 'center', color: '#ef4444' }}>Failed to load prices</p>
                )}
              </div>

              {/* 💬 WhatsApp Chat Button */}
              <a
                href="https://wa.me/8618202561437?text=Hi%20CoachEmmy%2C%20I%27m%20interested%20in%20crypto%20coaching!"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '12px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '16px',
                }}
              >
                💬 Chat on WhatsApp
              </a>

              {/* 💡 Free Session Button */}
              <button
                onClick={handleLearnCrypto}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: '#16a34a',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                💡 Start Free Crypto Session
              </button>

              {/* 💎 Premium Section */}
              <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center', color: 'black', margin: 0 }}>
                  💎 Diamond Batch Coaching
                </h3>
                <p style={{ color: '#374151', textAlign: 'center', marginTop: '8px', marginBottom: '8px' }}>
                  Personalized 1-on-1 sessions • Weekly strategy calls • Portfolio review
                </p>
                <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', color: '#dc2626', margin: '8px 0' }}>
                  ₦20,000
                </p>
                <button
                  onClick={handleDiamondPayment}
                  style={{
                    width: '100%',
                    marginTop: '12px',
                    padding: '12px',
                    backgroundColor: '#fbbf24',
                    color: 'black',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                  }}
                >
                  🔒 Enroll Now (Bank Transfer)
                </button>
              </div>
            </>
          ) : showPaymentDetails ? (
            /* 💰 Payment Instructions Card */
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontWeight: 'bold', color: '#1f2937' }}>💳 Make Payment via Bank Transfer</h3>
              <p style={{ color: '#6b7280', marginTop: '8px' }}>
                Pay ₦20,000 to any of the accounts below, then email your payment receipt.
              </p>

              <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Opay Account */}
                <div style={{ backgroundColor: '#fffbeb', padding: '16px', borderRadius: '10px', border: '1px solid #fbbf24' }}>
                  <h4 style={{ margin: '0 0 8px', color: '#c2410c' }}>📱 Opay</h4>
                  <p style={{ margin: '4px 0' }}><strong>Account Name:</strong> Ogundapo Emmanuel</p>
                  <p style={{ margin: '4px 0' }}><strong>Account Number:</strong> 8131309335</p>
                </div>

                {/* Wema Account */}
                <div style={{ backgroundColor: '#eff6ff', padding: '16px', borderRadius: '10px', border: '1px solid #3b82f6' }}>
                  <h4 style={{ margin: '0 0 8px', color: '#1d4ed8' }}>🏦 Wema Bank</h4>
                  <p style={{ margin: '4px 0' }}><strong>Account Name:</strong> Ogundapo Emmanuel</p>
                  <p style={{ margin: '4px 0' }}><strong>Account Number:</strong> 0237520119</p>
                </div>
              </div>

              <p style={{ marginTop: '20px', fontWeight: 'bold', color: '#dc2626' }}>
                📩 After payment, forward your receipt to:<br />
                <a href="mailto:coachemmyb@gmail.com" style={{ color: '#1d4ed8' }}>
                  coachemmyb@gmail.com
                </a>
              </p>

              <button
                onClick={() => setShowPaymentDetails(false)}
                style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  backgroundColor: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                ← Back
              </button>
            </div>
          ) : showFreeSessionCard ? (
            /* 📘 Free Session Card */
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontWeight: 'bold', color: '#1f2937' }}>📚 Your Free Crypto Starter Kit</h3>
              <p style={{ color: '#6b7280', marginTop: '8px' }}>
                Download your guide and connect for 1-on-1 coaching.
              </p>

              <div style={{ marginTop: '20px' }}>
                {/* PDF Download */}
                <a
                  href="/crypto-starter-guide.pdf" // 👈 Replace with your actual PDF path or URL
                  download
                  style={{
                    display: 'inline-block',
                    padding: '12px 24px',
                    backgroundColor: '#16a34a',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    marginTop: '10px',
                  }}
                >
                  📥 Download PDF Guide
                </a>

                <p style={{ marginTop: '20px', color: '#374151' }}>
                  Then message me directly for your free coaching session:
                </p>

                <a
                  href="https://wa.me/8618202561437?text=Hi%20CoachEmmy%2C%20I%20downloaded%20the%20free%20guide%20and%20want%20my%201-on-1%20session!"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: '10px',
                    padding: '12px 24px',
                    backgroundColor: '#25D366',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  💬 Message Me on WhatsApp
                </a>
              </div>

              <button
                onClick={() => setShowFreeSessionCard(false)}
                style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  backgroundColor: '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                ← Back
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CryptoModal;