import { useEffect, useState } from 'react';

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative p-8 bg-gradient-to-br from-teal-900 to-sky-900" 
      style={{ minHeight: '100vh' }} 
    >
      <div className="relative z-10 text-center">
        <h2 className={`text-5xl mt-4 font-serif underline text-white transition-transform duration-700 ${animate ? 'translate-y-0' : '-translate-y-full'}`}>
          About Me
        </h2>
        <p className={`mt-6 font-semibold text-lg text-balance text-white transition-transform duration-700 ${animate ? 'translate-y-0' : '-translate-y-full'}`}>
          I am a full stack developer from the Coding Ninja Batch of 2023-2024, with a strong preference for front-end development. My passion lies in creating responsive and visually appealing user interfaces.
        </p>
        
        <div className={`mt-16 bg-transparent border border-white shadow-3xl rounded-3xl w-96 p-10 mx-auto transition-transform duration-700 ${animate ? 'translate-y-0' : 'translate-y-full'}`}>
          <h3 className="text-4xl underline font-semibold text-slate-100">
            Qualifications
          </h3>
          <ul className="list-disc list-inside mt-6 text-lg text-left text-slate-300">
            <li>Full Stack Developer, Coding Ninja (2023-2024)</li>
            <li>B.Ed, 2023 Pass Out from Dr. Br Ambedkar University</li>
            <li>Proficient in HTML, CSS, JavaScript, React, and Bootstrap</li>
            <li>Experience with version control (Git) and collaborative development</li>
            <li>Strong understanding of responsive design principles</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
