import React from 'react';
import { motion } from 'framer-motion';
import profile from './assets/student.png';

const PortfolioHeader: React.FC = () => {
    const vision =
        'As a software developer, I always aspire to make the world a better place using my programming skills in the realm of digitizing every aspect of life.';
    const createdAt = '2023-09-01T00:00:00Z';
    const lastUpdated = '2024-09-06T00:00:00Z';

    return (
        <motion.header
            className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 p-6 md:p-10 rounded-lg  text-gray-800  shadow-green-400 shadow-2xl"
            initial={{ opacity: -2 }}
            animate={{ opacity: 2 }}
            transition={{ duration: 3 }}  /* Controls the fade-in speed */
        >
            <h4 className="text-center font-bold text-2xl underline mb-5 font-serif text-blue-950">Portfolio</h4>
            <div className="flex flex-col md:flex-row items-center md:justify-between md:space-x-10 space-y-8 md:space-y-0">
                {/* Profile Section */}
                <div className="flex flex-col items-center md:w-1/3">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-64 h-64 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-4"
                    />
                    <h2 className="text-3xl font-bold text-gray-900">Enock Mwema</h2>
                    <p className="md:text-lg text-sm font-light text-gray-600">Full Stack Developer | React, Node.js, TypeScript</p>
                    <p className="md:text-sm text-xs font-light text-gray-500">Co-Founder BlackieNetworks</p>
                    <p className="md:text-sm text-xs font-light text-gray-500">Based in Chuka, Kenya | Open to Remote Work</p>
                </div>

                {/* Vision and Contact Section */}
                <div className="flex flex-col md:w-2/3 space-y-4">
                    <div className="flex flex-col text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed italic">{vision}</p>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg text-gray-700 font-semibold">Contact:</h4>
                        <p className="text-md text-gray-600">Email: <a href="mailto:enockaymwema@gmail.com" className="text-blue-500 hover:underline">enockaymwema@gmail.com</a></p>
                        <p className="text-md text-gray-600">Call: <a href="tel:0796869402" className="text-blue-500 hover:underline">0796869402</a></p>

                        {/* Social Links */}
                        <div className="mt-4 flex justify-center md:justify-start space-x-4">
                            {/* Add icons */}
                        </div>
                    </div>

                    {/* Dates Section */}
                    <div className="mt-6 text-sm text-gray-500 text-center md:text-left">
                        <p>
                            <span className="font-semibold">Created At:</span> {new Date(createdAt).toLocaleDateString()}
                        </p>
                        <p>
                            <span className="font-semibold">Last Updated:</span> {new Date(lastUpdated).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </motion.header>
    );
};

export default PortfolioHeader;
