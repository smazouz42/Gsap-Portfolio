'use client'
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  useEffect(() => {
    gsap.to('.img-container', {
      scale: 52,
      ease: 'ease',
      scrollTrigger: {
        trigger: '.video-section',
        scrub: 2,
        start: 'top top',
        end: '+=50%',
        pin: true,
      },
    });
  }, []);

  return (
    <section className="video-section">
      <div className="relative h-screen w-screen">
        <video className='object-cover' src="/Binary-Code.mp4" autoPlay loop muted/>
      </div>
      <div className="img-container absolute top-0 h-scrren w-screen">
        <img src="/window.png" alt="" className="abject-cover h-full w-full" />
      </div>
    </section>
  );
};

export default VideoSection;
