import React from 'react';
import profile from './assets/student.png';

const PortfolioHeader: React.FC = () => {
    const vision =
        'As a software developer, I always aspire to make the world a better place using my programming skills in the realm of digitizing every aspect of life.';
    const createdAt = '2023-09-01T00:00:00Z';
    const lastUpdated = '2024-09-06T00:00:00Z';

    return (
        <header className="bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 p-6 md:p-10 rounded-lg  text-gray-800  shadow-green-400 shadow-2xl ">
            <h4 className="text-center font-bold text-2xl underline mb-5 font-serif text-green-500">Portfolio</h4>
            <div className="flex flex-col md:flex-row items-center md:justify-between md:space-x-10 space-y-8 md:space-y-0">
                {/* Profile Section */}
                <div className="flex flex-col items-center md:w-1/3">
                    <img
                        src={profile}
                        alt="Profile"
                        className="w-64 h-64 rounded-full object-cover border-4 border-green-500 shadow-lg mb-4"
                    />
                    <h2 className="text-3xl font-bold text-gray-900">Enock Mwema</h2>
                    <p className="md:text-lg text-sm font-light text-gray-600">Full Stack Developer | React, Node.js, TypeScript</p>
                    <p className="md:text-sm text-xs font-light text-gray-500">Co-Founder BlackieNetworks  </p>
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
                            <a href="https://github.com" className="text-blue-600 hover:text-blue-800 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-1.96c-3.21.7-3.88-1.35-3.88-1.35-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.02 1.77 2.67 1.26 3.32.97.1-.73.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.2-3.08-.12-.29-.52-1.46.12-3.05 0 0 .98-.31 3.2 1.18A11.14 11.14 0 0 1 12 6.67c1.07.01 2.14.15 3.14.43 2.2-1.48 3.18-1.18 3.18-1.18.65 1.59.24 2.76.12 3.05.75.8 1.2 1.82 1.2 3.08 0 4.43-2.7 5.41-5.28 5.7.41.35.77 1.04.77 2.09v3.1c0 .31.21.67.8.56 4.57-1.52 7.86-5.83 7.86-10.91C23.5 5.73 18.27.5 12 .5z"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com" className="text-blue-600 hover:text-blue-800 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.78 24 1.77 24h20.46c.97 0 1.77-.78 1.77-1.75V1.75C24 .78 23.22 0 22.23 0zM7.06 20.45H3.54V9.04h3.52v11.41zm-1.76-13a2.05 2.05 0 1 1 0-4.1 2.05 2.05 0 0 1 0 4.1zM20.45 20.45h-3.52v-5.67c0-1.36-.03-3.11-1.9-3.11-1.9 0-2.19 1.48-2.19 3v5.78h-3.52V9.04h3.38v1.56h.05c.47-.89 1.6-1.83 3.3-1.83 3.53 0 4.18 2.32 4.18 5.35v6.33z"/>
                                </svg>
                            </a>
                            <a href="https://portfolio.com" className="text-blue-600 hover:text-blue-800 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.01 8.01 0 0 1-8 8z"/>
                                </svg>
                            </a>
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
        </header>
    );
};

export default PortfolioHeader;
