'use client';
import Navbar from "./components/Navbar";
import ProjectsPage from "./components/Projects";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ContactSection from "./components/Contact";
import { useState } from "react";
import HomePage from "./components/HomePage";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const [contactZnx, setcontactZnx] = useState(15);

  useGSAP(() => {
    ScrollTrigger.defaults({
      toggleActions: "play none none reverse",
    });
  

    gsap.to('.video-section', {
      x: '-100%',
      scrollTrigger: {
        trigger: '.main-section',
        start: '20% top',
        end: '30% top',
        scrub: 1,
      },
    });

    gsap.to('.contact-section', {
      scrollTrigger: {
        trigger: '.main-section',
        start: 'top top',
        end: 'bottom top',
        pin : ".contact-section",
        scrub: 1,
      },
    });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-section',
        start: '88% top',
        end: '97% top',
        scrub: 1,
        onLeave: () => {
          console.log("1")
          setcontactZnx(60);

        },
        onEnterBack:()=> {
          console.log("2")
          setcontactZnx(10);
        }
      },
    });

    tl.to('.project_section', { x: '+100%' });

  }, []);
  
  return (
    <div className="relative w-full"> 
      <Navbar/>
        <div className=" relative w-full h-[290vh] main-section">
          <HomePage/>
          <ProjectsPage/>
          <ContactSection contactZnx= {contactZnx}/>
        </div>
    </div>
  );
}
