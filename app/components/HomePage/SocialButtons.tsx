import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialButtons = () => {
  return (
    <div className='social-section flex flex-col gap-6 items-center z-40'>
      <h1 className="text-4xl font-bold social-button">Connect with Me</h1>
      <div className="flex items-center gap-4">
        <button className='bg-cyan-800 py-1 px-2 rounded-2xl social-button hover:px-6 transition-all duration-300'>
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-white" />
        </button>
        <button className='bg-cyan-800 py-1 px-2 rounded-2xl social-button hover:px-6 transition-all duration-300'>
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white" />
        </button>
        <button className='bg-cyan-800 py-1 px-2 rounded-2xl social-button hover:px-6 transition-all duration-300'>
          <FontAwesomeIcon icon={faTelegram} size="2x" className="text-white" />
        </button>
        <button className='bg-cyan-800 py-1 px-2 rounded-2xl social-button hover:px-6 transition-all duration-300'>
          <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white" />
        </button>
        <button className='bg-cyan-800 py-1 px-2 rounded-2xl social-button hover:px-6 transition-all duration-300'>
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SocialButtons;