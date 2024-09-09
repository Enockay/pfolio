import React, { useState } from 'react';

// Skill logos (replace with actual paths)
import reactLogo from './assets/react.png';
import typescriptLogo from './assets/typescript.jpeg';
import tailwindLogo from './assets/tailwind.jpeg';
import nodeLogo from './assets/node.png';
import mongodbLogo from './assets/mongodb.jpeg';
import expressLogo from './assets/express.png';

type Skill = {
  index: number;
  name: string;
  description: string;
  logo: string;
};

const skills: Skill[] = [
  {
    index: 1,
    name: 'React',
    description: "React is like that friend who always knows the best route during traffic. Whether it's navigating state management or creating components, it gets you there faster! When I first got into front-end development, React blew my mind with its modularity and reusable components. It made me feel like I could finally conquer the UI world without losing my sanity. Seriously, once you go React, it's hard to go back.",
    logo: reactLogo,
  },
  {
    index: 2,
    name: 'TypeScript',
    description: "Ah, TypeScript, the guardrail that keeps me from driving my projects off a cliff. Initially, I was a pure JavaScript fan, but I kept running into type errors like they were potholes on a highway. So, one day I tried TypeScript while setting up a Vite-React project, and, boy, did it give me errors. But, thanks to a certain friendly AI (shoutout to ChatGPT), I powered through it. Now, I can’t start a project without TypeScript – it’s like putting on my seatbelt before starting the car.",
    logo: typescriptLogo,
  },
  {
    index: 3,
    name: 'Tailwind CSS',
    description: "Tailwind is the superhero cape for every CSS developer. Once, I was battling CSS files while designing a school system, and let me tell you, the responsiveness was a nightmare. Then, a fellow developer casually mentioned Tailwind, and I decided to give it a try. It was like finding a magical spellbook that made everything fall into place. Now, building responsive UIs is almost fun... almost.",
    logo: tailwindLogo,
  },
  {
    index: 4,
    name: 'Node.js',
    description: "Node.js is like JavaScript’s cooler, backend cousin who also DJs at weekends. My journey started when I was choosing between Ruby and Node.js for full-stack development. Let’s just say, after reading about Node, I felt like I had found my rhythm. The fact that I could carry over my JavaScript knowledge to build scalable backend systems was a game-changer. It’s almost like cheating—but totally legal!",
    logo: nodeLogo,
  },
  {
    index: 5,
    name: 'MongoDB',
    description: "MongoDB is like the NoSQL equivalent of that giant, flexible Tupperware that fits anything you throw at it. As I started working with databases, I realized how beautifully MongoDB integrates with Node.js. It’s document-oriented, which makes scaling easy, and when your data grows faster than your to-do list, it doesn’t break a sweat. Plus, no complex SQL queries to ruin your day!",
    logo: mongodbLogo,
  },
  {
    index: 6,
    name: 'Express',
    description: "Express is like Node’s best friend that knows how to make life easier. Setting up servers from scratch is fun—said no one ever. So when I found Express, I instantly felt at home. It’s minimal, flexible, and handles routes and middleware like a boss. Now, my backend work is less ‘trial and error’ and more ‘plug and play’. I mean, who doesn’t love a bit of efficiency?",
    logo: expressLogo,
  },
];

const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(prevSkill => (prevSkill?.name === skill.name ? null : skill));
  };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 md:py-12 py-4 md:px-4 px-2">
      <div className="w-full mx-auto">
        <h3 className="md:text-3xl text-2xl font-extrabold text-white mb-8 text-center tracking-wider transition duration-500">
          Technical Skills 🚀
        </h3>

        {/* Skill Bar (Horizontal Scroll on Small Screens) */}
        <div className="flex w-full overflow-x-auto scrollbar-hide md:space-x-6 space-x-3 pb-4 items-center justify-center transition-all duration-500">
          {skills.map((skill) => (
            <div
              key={skill.index}
              className={`flex-shrink-0 md:p-4 p-3 rounded-lg cursor-pointer transition-all duration-500 ease-in-out shadow-lg transform hover:scale-110
                ${selectedSkill?.name === skill.name ? 'bg-indigo-700 text-white' : 'bg-white text-gray-900'}`}
              onClick={() => handleSkillClick(skill)}
              aria-expanded={selectedSkill?.name === skill.name}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="md:w-14 md:h-14 w-5 h-5 rounded-full object-cover border-2 border-gray-300"
                />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Description Box */}
        {selectedSkill && (
          <div
            className={`mt-8 w-full bg-white p-6 shadow-lg rounded-lg transform transition-transform duration-500 ease-in-out 
              ${selectedSkill ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{selectedSkill.name}</h4>
            <p className="text-gray-950 leading-relaxed">{selectedSkill.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
