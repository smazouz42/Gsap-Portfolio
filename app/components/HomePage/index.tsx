"use client";
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'
import DescriptionSection from './DescriptionSection';
import SocialButtons from './SocialButtons';
import PhotoSection from './PhotoSection';
import TextContent from './TextContent';
import SkillsSection from './SkillsSection';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {

  const [info_znx, setInfo_znx] = React.useState(30);
  useGSAP(() => {
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });

    gsap.to('.img-container', {
      scale: 63,
      ease: "ease",
      scrollTrigger: {
        trigger: '.video-section',
        scrub: 1,
        start: "top top",
        end: "190% bottom",
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

    const social_buttons = document.querySelectorAll('.social-button');
    social_buttons.forEach((button, index) => {
      gsap.fromTo(button,
        { y: 100, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, delay: 1 + index * 0.1, scrollTrigger: { start: 1 } }
      );
    });

    const skills_items = document.querySelectorAll('.skill-item');
    skills_items.forEach((button, index) => {
      gsap.fromTo(button,
        { y: 100, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, delay: 1 + index * 0.2, scrollTrigger: { start: 1 } }
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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'info-section',
        start: 'top top',
        end: '5% top',
        onLeave: () => {
          setInfo_znx(50);
        },
        onEnterBack: () => {
          setInfo_znx(30);
        }
      },
    });

    tl.to('.info-section', {});


  }, []);

  return (
    <section className="absolute top-0 z-40 video-section relative h-screen w-ful overflow-hidden  ">
      <div className="relative h-full w-full flex items-center justify-center flex-col gap-10 info-section">
        <div className={`w-full px-4 sm:px-6 md:px-10 flex flex-col lg:flex-row justify-around gap-10 ${info_znx === 50 ? "z-50" : "z-30"}`}>
          <div className="flex flex-col w-full lg:w-1/2 gap-6 md:gap-10 ">
            <div className='flex flex-col gap-2 md:gap-4'>
              <h1 className="title text-2xl text-3xl md:text-4xl lg:text-6xl font-bold text-white">Said Mazouz</h1>
              <DescriptionSection />
            </div>
            <SkillsSection />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 gap-4 md:gap-6 mt-4 md:mt-0 items-center">
            <PhotoSection />
            <SocialButtons />
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-80" />
          <video
            className="object-cover h-full w-full opacity-100"
            src="/21.mp4"
            autoPlay
            loop
            muted
          />
        </div>
      </div>
      <div className='w-screen h-screen '>
        <div className="img-container absolute top-0 h-full w-full z-40">
          <img src="/window2.png" alt="" className="object-cover h-full w-full"
            
          />
        </div>
        <TextContent />
      </div>
    </section>
  );
};

export default VideoSection;


