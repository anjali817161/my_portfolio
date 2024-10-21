import React from 'react';

const skills = [
  { name: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { name: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" },
  { name: "Java", logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/OsvJava2.png" },
  { name: "DSA", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cb/KHOPCA_3D_example_2.png" },
  { name: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg" },
  { name: "ReactJs", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { name: "Redux", logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" },
  { name: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" },
  { name: "Tailwind CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg" },
  { name: "Firebase", logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" },
  { name: "Generative AI", logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png" },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center bg-slate-50 justify-center bg-cover bg-center">
      <h2 className="text-5xl font-serif text-center my-10 mb-20 underline text-purple-800 bg-opacity-70 p-5 slide-down">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={skill.name} 
            className={`flex mb-10 flex-col justify-center items-center scale-in delay-${index % 4}`}>
            <div className="w-48 h-48 flex justify-center mx-5 hover:shadow-2xl items-center rounded-full bg-white shadow-lg">
              <img src={skill.logo} alt={skill.name} className="w-28 h-28" />
            </div>
            <h3 className="text-center mt-2 text-xl font-semibold text-gray-700">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
