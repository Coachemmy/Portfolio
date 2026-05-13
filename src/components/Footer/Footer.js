import { useState } from 'react';
import { Link } from 'react-router-dom';
import PolicyModal from '../PolicyModal/PolicyModal';

const Footer = () => {
  const [policyModal, setPolicyModal] = useState({ isOpen: false, policy: null });

  const openPolicy = (policy) => {
    setPolicyModal({ isOpen: true, policy });
  };

  const closePolicy = () => {
    setPolicyModal({ isOpen: false, policy: null });
  };

  return (
    <>
      <footer className='bg-white border-t border-gray-200 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
            <div className="md:col-span-2">
              <h3 className='text-2xl font-bold text-primary mb-4'>CoachEmmy</h3>
              <p className='text-gray-600 text-sm mb-4'>
                Empowering individuals with cryptocurrency trading skills, AI content creation knowledge, and modern programming expertise.
              </p>
              <div className='flex gap-4'>
                <a
                  href='https://github.com/coachemmy'
                  target="_blank"
                  rel="noreferrer"
                  className='text-gray-400 hover:text-primary transition-colors'
                >
                  GitHub
                </a>
                <a
                  href='https://linkedin.com/in/coachemmyb'
                  target="_blank"
                  rel="noreferrer"
                  className='text-gray-400 hover:text-primary transition-colors'
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <h4 className='font-semibold text-gray-900 mb-4'>Quick Links</h4>
              <ul className='space-y-2'>
                <li>
                  <Link to='/' className='text-gray-600 hover:text-primary transition-colors text-sm'>Home</Link>
                </li>
                <li>
                  <Link to='/#career-services' className='text-gray-600 hover:text-primary transition-colors text-sm'>Career Services</Link>
                </li>
                <li>
                  <Link to='/#tech-courses' className='text-gray-600 hover:text-primary transition-colors text-sm'>Tech Courses</Link>
                </li>
                <li>
                  <Link to='/projects' className='text-gray-600 hover:text-primary transition-colors text-sm'>Projects</Link>
                </li>
                <li>
                  <Link to='/contact' className='text-gray-600 hover:text-primary transition-colors text-sm'>Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className='font-semibold text-gray-900 mb-4'>Legal</h4>
              <ul className='space-y-2'>
                <li>
                  <button onClick={() => openPolicy('terms')} className='text-gray-600 hover:text-primary transition-colors text-sm'>Terms of Service</button>
                </li>
                <li>
                  <button onClick={() => openPolicy('privacy')} className='text-gray-600 hover:text-primary transition-colors text-sm'>Privacy Policy</button>
                </li>
                <li>
                  <button onClick={() => openPolicy('refund')} className='text-gray-600 hover:text-primary transition-colors text-sm'>Refund Policy</button>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-sm text-gray-500'>
              © {new Date().getFullYear()} CoachEmmy. All rights reserved.
            </p>
            <p className='text-xs text-gray-400'>
              Building innovative solutions since 2019
            </p>
          </div>
        </div>
      </footer>

      <PolicyModal
        isOpen={policyModal.isOpen}
        onClose={closePolicy}
        policy={policyModal.policy}
      />
    </>
  );
};

export default Footer