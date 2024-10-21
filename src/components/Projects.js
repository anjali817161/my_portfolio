import { useEffect, useState } from 'react';

const projects = [
  { 
    id: 1, 
    title: "Chat Bot App", 
    description: "A simple chatbot application that simulates a conversation with users, providing instant responses based on predefined queries.", 
    skills: "HTML, CSS, JavaScript, Bootstrap",
    github: "https://github.com/anjali817161/Chat-Bot-App", 
    live: "https://chat-bot-phi-teal.vercel.app/" 
  },
  { 
    id: 2, 
    title: "Blogging App", 
    description: "A blogging platform that allows users to create, edit, and delete their posts, featuring real-time updates using Firebase.", 
    skills: "React, Firebase", 
    github: "https://github.com/anjali817161/My-Blog-App", 
    live: "https://my-blogging-app-livid.vercel.app/" 
  },
  { 
    id: 3, 
    title: "Movie App", 
    description: "An interactive movie application that lets users search for movies, view details, and manage their favorite lists.", 
    skills: "React", 
    github: "https://github.com/anjali817161/Movie-App", 
    live: "https://my-movie-app-mu.vercel.app/" 
  },
  { 
    id: 4, 
    title: "Super Hero Hunter Game", 
    description: "An exciting game where players can explore different superheroes, view their powers, and engage in thrilling battles.", 
    skills: "HTML, CSS, JavaScript, Bootstrap", 
    github: "https://github.com/anjali817161/superhero.github.io", 
    live: "https://superhero-game-app.vercel.app/" 
  },
];

const Projects = () => {
  const [animateHeading, setAnimateHeading] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateHeading(true);
      setAnimateCards(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative p-10 bg-cover  bg-center" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8SEfC5Q6a5IhFcf0ZHMv1MTV8V5jwO7qWw&s)' }}>
      <div className="absolute inset-0 opacity-50"></div> 
      <h2 className={`text-5xl text-center underline font-serif text-violet-800 relative z-10 transform ${animateHeading ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-700`}>Projects</h2>
      <div className="mt-8 gap-12 mx-32 my-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 relative z-10">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`border p-6 mt-10 rounded-lg bg-gradient-to-r from-emerald-100 to-slate-100 border-none cursor-pointer hover:shadow-2xl max-w-100px shadow relative transform transition-transform duration-700 ${animateCards ? `translate-x-0 delay-${index * 100}` : '-translate-x-full'}`}
            style={{ transitionDelay: `${index * 100}ms` }} 
          >
            <h3 className="font-bold text-2xl text-emerald-950">{project.title}</h3>
            <p className="mt-2 text-lg">{project.description}</p>
            <h4 className="font-bold text-lg text-emerald-900 mt-3">Skills Used:</h4>
            <p className="mt-1 font-semibold">{project.skills}</p>
            <div className="mt-3">
              <a href={project.github} className="text-blue-800 font-semibold text-lg mr-4">GitHub</a>
              <a href={project.live} className="text-red-800 font-semibold text-lg">Link</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
