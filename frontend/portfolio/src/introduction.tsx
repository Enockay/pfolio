import React from 'react';
import { useIntersectionObserver } from './useIntersectionObserver'; 
import profile from "./assets/student.png";

const Introduction: React.FC = () => {
  const { ref, isVisible } = useIntersectionObserver(); // Get visibility and reference

  const fullIntroduction = `
    I am a passionate software developer with a keen interest in solving real-world problems through innovative programming. 
    My expertise lies in building web applications using modern technologies like React, TypeScript, Node.js, and Tailwind CSS.
    I believe in the power of technology to simplify and enhance everyday life, making the world more connected and efficient. 
    Constant learning and adaptability define my approach to software development, where every challenge is an opportunity to grow and innovate.
  `;

  const summaryIntroduction = `
    Passionate software developer skilled in React, TypeScript, Node.js, and Tailwind CSS. Driven by innovation and solving real-world problems.
  `;

  return (
    <section
      ref={ref} // Attach the observer to this section
      className={`bg-gradient-to-r from-lime-200 via-teal-200 to-blue-300 transition-colors duration-500 ease-in-out md:py-10 md:px-6 py-6 px-4 mt-5 shadow-lg rounded-lg 
      ${isVisible ? 'animate-fadeInUp' : 'opacity-0'} // Trigger animation when visible
      `}
    >
      <div className="shadow-2xl p-7 shadow-purple-300 flex flex-col md:flex-row items-center justify-between mx-auto max-w-6xl">
        {/* Left Side - Introduction Text */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 md:mr-12 text-center md:text-left">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">About Me</h3>

          {/* Full Text for larger screens */}
          <p className="text-gray-700 leading-relaxed text-lg hidden md:block">
            {fullIntroduction.trim()}
          </p>

          {/* Summary Text for smaller screens */}
          <p className="text-gray-700 leading-relaxed text-lg block md:hidden">
            {summaryIntroduction.trim()}
          </p>
        </div>

        {/* Right Side - Profile Picture */}
        <div className="md:w-1/2 w-full flex justify-center mt-7">
          <img
            src={profile}
            alt="Profile"
            className="w-72 h-72 object-cover border-4 border-gray-300 shadow-lg rounded-full transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
