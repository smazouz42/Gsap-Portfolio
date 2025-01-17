// components/VideoSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const imgContainerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const imgContainer = imgContainerRef.current;
 

    if (imgContainer) {
      gsap.to(imgContainer, {
        scale: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: imgContainer,
          scrub: 1,
          start: 'top top',
          end: 'bottom',
          pin: true,
        },
      });

    
    }
  }, []);

  return (
    <section className="relative w-screen ">
      <div className="relative w-full h-screen">
        <video
          src="/flower.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover "
        />
        <div
          ref={imgContainerRef}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/window.png"
            alt="Window"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
