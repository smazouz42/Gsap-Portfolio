"use client";
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'

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
        end: "+=20%",
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

    gsap.to('.txt-bottom', {
      autoAlpha: 0,
      letterSpacing: 0,
      duration: 1.5,
      scrollTrigger: {
        start: 1,
      },
    });

    gsap.fromTo('.title',
      { scale:0 },
      { scale:1, duration: 1.5, delay: 0.9, scrollTrigger: { start: 1 } }
    );

    gsap.fromTo('.description',
      { y: '50%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1.5, delay: 1.2, scrollTrigger: { start: 1 } }
    );

    gsap.fromTo('.photo-container',
      { scale:0 },
      { scale:1, duration: 1.5, delay: 1.2, scrollTrigger: { start: 1 } }
    );

    gsap.to('.border-segment', {
      rotation: 360,
      duration: 10,
      ease: "none",
      repeat: -1,
    });

    

  }, []);

  return (
    <section className="video-section relative h-screen w-screen font-fira overflow-hidden">
      <div className="relative h-full w-full -z-20 flex items-center justify-center flex-col">
        <div className='w-full px-10 flex'>
          <div className="w-full  md:w-1/2">
            <div className="overflow-hidden">
              <h1 className="title text-4xl md:text-6xl font-bold mb-6">
                Said Mazouz
              </h1>
            </div>
            <div className="overflow-hidden">
              <p className="description text-xl text-gray-400 ">
                A passionate developer dedicated to creating beautiful and functional web experiences.
                With expertise in modern web technologies, I bring ideas to life through clean code and
                innovative solutions.
              </p>
            </div>
          </div>

          <div className="hidden md:block w-1/2">
            <div className="photo-container relative w-[400px] h-[400px] mx-auto">
              <div className="absolute inset-[-10px] rounded-full">
                <div className="border-segment absolute inset-0 border-4 border-black rounded-full bg-cyan-500"
                  style={{
                    clipPath: `polygon(
                      0 0, 40% 0, 40% 40%,
                      60% 40%, 60% 0, 100% 0,
                      100% 60%, 60% 60%,
                      60% 100%, 40% 100%,
                      40% 60%, 0 60%
                    )`,
                    transform: 'rotate(45deg)'
                  }}>
                </div>
              </div>

              <div className="absolute inset-[0px] rounded-full overflow-hidden">
                <img
                  src="/my-picture.jpg"
                  alt="Profile Photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          
        </div>


        <div className="absolute inset-0 -z-30">
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
      <div className="img-container absolute top-0 h-full w-full">
        <img src="/window.png" alt="" className="object-cover h-full w-full" />
      </div>

      <div className="text-content absolute top-0 h-screen w-screen flex flex-col items-center justify-center">
        <div className='flex flex-col relative -left-[15%] '>
          <div className="left overflow-hidden ">
            <div className="text-[35px] animtion">
              between
            </div>
          </div>
          <div className="left overflow-hidden ">
            <div className="text-[100px] animtion  overflow-hidden">
              Reality
            </div>
          </div>
        </div>
        <div className='flex flex-col relative left-[15%] '>
          <div className="right  overflow-hidden -z-10 ">
            <div className="text-[100px] animtion overflow-hidden">
              &
            </div>
          </div>
          <div className="right  overflow-hidden ">
            <div className=" text-[100px] animtion overflow-hidden ">
              Dream
            </div>
          </div>
        </div>
      </div>
      <p className="txt-bottom translate-y-[150px] uppercase text-[12px] tracking-[12px] font-light">
        Building the future, one line at a time
      </p>
    </section>
  );
};



export default VideoSection;
