// src/components/About/About.js
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { about } from '../../portfolio';
import CryptoModal from '../CryptoModal/CryptoModal';
import { useState } from 'react';
import './About.css';

const About = () => {
  const { name, role, description, resume, social } = about;
  const [isCryptoModalOpen, setIsCryptoModalOpen] = useState(false);

  return (
    <div className='about center' style={{ marginTop: '20px' }}>
      {name && (
        <h1
          style={{
            marginTop: '150px',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          Welcome Onboard To <br />
          <span className='about__name' style={{ color: 'red' }}>
            {name}
          </span>
        </h1>
      )}

      {role && (
        <h2 className='about__role' style={{ fontSize: '20px' }}>
          Who am I: A {role}
        </h2>
      )}
      <p
        className='about__desc'
        style={{ marginTop: '10px', textAlign: 'center' }}
      >
        {description}
      </p>

      <div className='mt-6 border pt-6'>
        <button
          onClick={() => setIsCryptoModalOpen(true)}
          style={{
            padding: '1.55rem 2.0rem',
            backgroundColor: '#FFBE0B',
            marginTop: '1rem',
            fontSize: '1rem',
            color: 'black',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
        >
          💰 Start Crypto Coaching
        </button>
      </div>

      {/* 💰 Faceless BUTTON — placed prominently */}
      <div className='mt-6 border pt-6'>
        <button
          // onClick={() => setIsCryptoModalOpen(true)}
          style={{
            padding: '1.55rem 2.0rem',
            backgroundColor: 'white',
            marginTop: '1rem',
            fontSize: '1rem',
            color: 'black',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
        >
          Start Faceless AI Content Creation <br /> (COMING SOON)
        </button>
      </div>

      <div
        className='about__contact center'
        style={{ marginTop: '6%', gap: '0%', textAlign: 'center' }}
      >
        {resume && (
          <a href={resume} target='_blank' rel='noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github.trim()}
                target='_blank'
                rel='noreferrer'
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin.trim()}
                target='_blank'
                rel='noreferrer'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>

      <CryptoModal
        isOpen={isCryptoModalOpen}
        onClose={() => setIsCryptoModalOpen(false)}
      />
    </div>
  );
};

export default About;