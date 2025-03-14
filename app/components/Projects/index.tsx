import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { projects } from '../../constants/projects';
import Image from 'next/image';


gsap.registerPlugin(ScrollTrigger);

const ProjectsPage = () => {
  useGSAP(() => {
    const projectItems = document.querySelectorAll('.project-items');
    gsap.to(".project_section", {
      scrollTrigger: {
        trigger: ".main-section",
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: '.project_section',
      }
    });

    projectItems.forEach((item, index) => {
      const nextIndex = index + 1;
      const hasNextItem = nextIndex < projectItems.length;
      const itemHeight = (item as HTMLElement).offsetHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: `130%+=${index * itemHeight} 5%`,
          end: `130%+=${(index + 1) * itemHeight} 30%`,
          scrub: 1,
        }
      });

      if (hasNextItem) {
        tl.to(item, {
          x: '-10%',
          y: '+10%',
          opacity: 0,
          ease: 'power2.inOut',
        }, 0).to(`.project-items-${index + 1}`, {
          opacity: 1,
        }, 0)
      }
    });
  }, []);

  return (
    
    <div className="absolute top-0 z-20 project_section w-full flex flex-col justify-center items-center gap-10 min-h-screen">
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
      <h2 className="text-4xl sm:text-5xl font-bold text-white">Projects</h2>
      <div className='relative w-full flex flex-wrap justify-center items-center gap-6'>
        {projects.map((project, index) => (
          <div key={index}
            className={`project-items project-items-${index} flex flex-col md:flex-row items-center justify-center ${index !== 0 ? 'opacity-0 absolute' : ''}`}
            style={{
              zIndex: `${projects.length - index}`,
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              className="rounded-lg h-40 md:h-70 lg:h-96 object-cover lg:block hidden"
              width={500} height={300} 

            />
            <div className="flex flex-col gap-4 border-y py-4 px-6 border-cyan-300 bg-black bg-opacity-50 rounded-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-cyan-500">{project.name}</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-cyan-900/30 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-base sm:text-lg">{project.description}</p>
              {project.features.length > 0 && (
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;