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
    "Figmamk"
  ];

  return (
    <section  className='max-w-[800px]' >
      <div className="w-full flex flex-col gap-8">
        <h2 className="text-4xl font-bold text-white ">
          My Skills
        </h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item border border-cyan-500 rounded-lg w-32  p-2 text-center transform transition duration-300 hover:scale-105"
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