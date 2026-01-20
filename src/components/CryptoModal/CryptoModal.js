// src/components/CryptoModal/CryptoModal.js
import { useState, useEffect } from 'react';

const CryptoModal = ({ isOpen, onClose }) => {
  const [cryptoPrices, setCryptoPrices] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch live crypto prices when modal opens
  useEffect(() => {
    if (!isOpen) return;

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

  // Handle "Learn Crypto" → WhatsApp
  const handleLearnCrypto = () => {
    const confirmed = window.confirm(
      'You are about to start a live session with CoachEmmy (No To Poverty) for crypto coaching. Continue?'
    );
    if (confirmed) {
      window.open('https://wa.me/2348131309335', '_blank');
    }
  };

  // Handle Diamond Batch Payment via Paystack
  const handleDiamondPayment = () => {
    // ⚠️ Replace 'YOUR_PUBLIC_KEY' with your actual Paystack public key
    const paystackPublicKey = 'YOUR_PUBLIC_KEY'; 

    if (!window.PaystackPop) {
      alert('Payment system not loaded. Please refresh and try again.');
      return;
    }

    const handler = window.PaystackPop.setup({
      key: paystackPublicKey,
      email: 'coachemmyb@gmail.com',
      amount: 2000000, // ₦20,000 in kobo (1 NGN = 100 kobo)
      currency: 'NGN',
      ref: 'DIAMOND_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money'],
      callback: (response) => {
        alert(`✅ Payment successful!\nReference: ${response.reference}\nYou'll be contacted shortly for onboarding.`);
        // Optional: Send to your backend to record enrollment
      },
      onClose: () => {
        alert('Payment was not completed.');
      },
    });
    handler.openIframe();
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
            href="https://wa.me/2348131309335?text=Hi%20CoachEmmy%2C%20I%27m%20interested%20in%20crypto%20coaching!"
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

          {/* 💡 Learn Crypto Button */}
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
            onMouseOver={(e) => (e.target.style.backgroundColor = '#15803d')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#16a34a')}
          >
            💡 Start Free Crypto Session
          </button>

          {/* 💎 Premium Section */}
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '16px' }}>
            <h3
              style={{
                fontWeight: 'bold',
                fontSize: '20px',
                textAlign: 'center',
                color: 'black',
                margin: 0,
              }}
            >
              💎 Diamond Batch Coaching
            </h3>
            <p
              style={{
                color: '#374151',
                textAlign: 'center',
                marginTop: '8px',
                marginBottom: '8px',
              }}
            >
              Personalized 1-on-1 sessions • Weekly strategy calls • Portfolio review
            </p>
            <p
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '20px',
                color: '#dc2626',
                margin: '8px 0',
              }}
            >
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
              onMouseOver={(e) => (e.target.style.backgroundColor = '#f59e0b')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#fbbf24')}
            >
              🔒 Enroll Now (Secure Payment)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoModal;