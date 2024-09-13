import React, { useState } from 'react';
import  webtweet from "./assets/webtweet.png"
import websystem from "./assets/websystem.png"
import Edumax from "./assets/Edumax.jpeg"

type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  challenges: string;
  solutions: string;
  imageUrl: string; // You can use an image path or URL.
  liveDemo?: string; // Optional live demo URL.
  githubUrl: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Campus WebSystem',
    description: 'BlackieWebsystem is a versatile web platform designed to manage various digital services, offering functionalities like content distribution, laundry services, tutoring, internet services, event management, product advertising, and data bundles management..',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'TypeScript','websockets'],
    challenges: 'Getting a real-time  communication flow between the user and the other was a major problem ',
    solutions: 'Used WebSockets for real-time data updates and batch API calls for optimized performance.',
    imageUrl: websystem,
    liveDemo: 'https://blackiewebp.fly.dev', // Replace with your live demo URL
    githubUrl: 'https://github.com/Enockay/BlackieWebSystem',
  },
  {
    id: 2,
    title: 'WebTweets',
    description: 'WebTweet is the ultimate platform for amplifying tweets! With WebTweet, users can easily access and interact with their Twitter accounts through USSD (Unstructured Supplementary Service Data) codes. Whether youre on the go or prefer using USSD for quick access, WebTweet has got you covered.',
    techStack: ['React', 'Node.js', 'chat.js', 'Tailwind CSS',"TypeScript", 'Express','MongoDB','twitterAuth'],
    challenges: 'Extracting data from social media platforms became a major problem still getting the user social media auths and intergrating them with the system.',
    solutions: 'Applied ouths from the social media platforms though all didnt work i got for twitter  thats why i got stuck but i normally reapply frequently untill they grant me.',
    imageUrl: webtweet,
    liveDemo : 'https://webtweets.vercel.app',
    githubUrl: 'https://github.com/Enockay/webtweets',
  },
  {
    id: 2,
    title: 'Edumax',
    description: 'Edumax is a comprehensive school management system designed to streamline various administrative and academic tasks. The system is built using modern web technologies and provides a robust platform for managing student information, teacher portals, and parent access to student results.',
    techStack: ['React', 'Node.js', 'chat.js', 'Tailwind CSS',"TypeScript", 'Express','MongoDB'],
    challenges: 'Intergrating the  the two portals for teachers and for the  parents ',
    solutions: 'After Thara research i managed to interlink both the  portals but shairing one server to be one in a saas form',
    imageUrl: Edumax,
    liveDemo : 'https://etim.vercel.app/login',
    githubUrl: 'https://github.com/Enockay/Edumax',
  },
  // Add more projects here...
];

const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const toggleDetails = (id: number) => {
    setSelectedProject(prevId => (prevId === id ? null : id));
  };

  return (
    <section className="bg-gray-400 py-12">
      <div className="container mx-auto px-4">
        <h2 className="md:text-2xl text-xl font-bold text-center mb-4 text-blue-900">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Project Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 rounded-full text-sm text-gray-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View More Button */}
                <button
                  onClick={() => toggleDetails(project.id)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 focus:outline-none"
                >
                  {selectedProject === project.id ? 'Hide Details' : 'View Details'}
                </button>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <div className="mt-4">
                    <h4 className="text-xl font-bold text-gray-900">Challenges & Solutions</h4>
                    <p className="text-gray-700 mt-2">
                      <strong>Challenges:</strong> {project.challenges}
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Solutions:</strong> {project.solutions}
                    </p>

                    {/* Links */}
                    <div className="mt-4 flex gap-4">
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                        >
                          Live Demo
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
