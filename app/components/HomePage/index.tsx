"use client";
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import DescriptionSection from './DescriptionSection';
import SocialButtons from './SocialButtons';
import PhotoSection from './PhotoSection';
import TextContent from './TextContent';
import ProjectsPage from '../Projects';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  useGSAP(() => {
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });

    gsap.to('.img-container', {
      scale: 52,
      ease: "ease",
      scrollTrigger: {
        trigger: '.video-section',
        scrub: 1,
        start: "top top",
        end: "+=200%",
        pin: true,
      },
    });

    gsap.to('.video-section', {
      x: "-100%",
      duration: 1,
      scrollTrigger: {
        trigger: '.video-section',
        scrub: 1,
        start: "94px 10%",
        end : "bottom 120%",
        markers:true,
        pin: true,
      },
    });

    gsap.to('.right', {
      autoAlpha: 0,
      x: 500,
      duration: 1.5,
      scrollTrigger: {
        start: 1,
      },
    });

    gsap.to('.left', {
      autoAlpha: 0,
      x: -500,
      duration: 1.5,
      scrollTrigger: {
        start: 1,
      },
    });

    gsap.fromTo('.animtion',
      { y: '100%' },
      { y: '0%', duration: 3 }
    );

    gsap.fromTo('.title',
      { scale: 0 },
      { scale: 1, duration: 1.5, delay: 0.9, scrollTrigger: { start: 1 } }
    );

    gsap.fromTo('.description',
      { y: '50%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1.5, delay: 1.2, scrollTrigger: { start: 1 } }
    );

    gsap.fromTo('.photo-container',
      { scale: 0 },
      { scale: 1, duration: 1.5, delay: 1.2, scrollTrigger: { start: 1 } }
    );

    gsap.to('.border-segment', {
      rotation: 360,
      duration: 10,
      ease: "none",
      repeat: -1,
    });

    const buttons = document.querySelectorAll('.social-button');
    buttons.forEach((button, index) => {
      gsap.fromTo(button,
        { y: 100, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, delay: 3 + index * 0.2, ease: "power2.out", scrollTrigger: { start: 1 } }
      );
    });

    gsap.to('.txt-bottom', {
      autoAlpha: 0,
      letterSpacing: -10,
      duration: 1,
      scrollTrigger: {
        start: 1
      }
    })

  }, []);

  return (
      <section className="video-section relative h-screen w-screen overflow-hidden">
        <div className="relative h-full w-full flex items-center justify-center flex-col gap-10">
          <div className='w-full px-10 flex z-20'>
            <div className="w-full md:w-1/2">
              <div className="overflow-hidden">
                <h1 className="title text-4xl md:text-6xl font-bold mb-6">
                  Said Mazouz
                </h1>
              </div>
              <DescriptionSection />
            </div>

            <div className="hidden md:block w-1/2">
              <PhotoSection />
            </div>
          </div>
          <SocialButtons />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black bg-opacity-80" />
            <video
              className="object-cover h-full w-full opacity-100"
              src="/Binary-Code.mp4"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <div className='w-screen h-screen'>
          <div className="img-container absolute top-0 h-full w-full z-30">
            <img src="/window.png" alt="" className="object-cover h-full w-full" />
          </div>
          <TextContent />
        </div>
      </section>
  );
};

export default VideoSection;
