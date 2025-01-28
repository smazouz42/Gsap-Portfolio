import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTelegram, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialButtons = () => {
  return (
    <div className='flex flex-col gap-6 items-center'>
      <h1 className="text-4xl text-cyan-100 social-button">Connect with Me</h1>
      <div className="flex items-center gap-4">
        <button className='bg-cyan-800 py-1 px-2 rounded-2xl social-button hover:px-8'>
          <FontAwesomeIcon icon={faGithub} size="2x" className="text-white" />
        </button>
        <button className='bg-cyan-800 py-1 px-2 rounded-2xl social-button hover:px-8'>
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white" />
        </button>
        <button className='bg-cyan-800 py-1 px-2 rounded-2xl social-button hover:px-8'>
          <FontAwesomeIcon icon={faTelegram} size="2x" className="text-white" />
        </button>
        <button className='bg-cyan-800 py-1 px-2 rounded-2xl social-button hover:px-8'>
          <FontAwesomeIcon icon={faTwitter} size="2x" className="text-white" />
        </button>
        <button className='bg-cyan-800 py-1 px-2 rounded-2xl social-button hover:px-8'>
          <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SocialButtons; 