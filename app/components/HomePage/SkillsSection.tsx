import React from 'react';

const SkillsSection = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS / Sass",
    "Tailwind CSS",
    "GSAP",
    "Git",
    "Figma"
  ];

  return (
    <section className="max-w-[800px]">
      <div className="w-full flex flex-col gap-8">
        <h2 className="md:text-4xl text-3xl font-bold text-white skill-item">
          My Skills
        </h2>
        <div className="flex flex-wrap gap-4 ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border skill-item border-cyan-500 rounded-lg w-32 p-2 text-center transform transition duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(0,255,255,0.7)] hover:cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
