import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-zinc-800 shadow-xl rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-red-700">
          <h1 className="text-3xl font-bold text-white">About Jay Bhatade</h1>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <img 
            src="https://jaybhatade.carrd.co/assets/images/image01.jpg?v=a1bd9279" 
            alt="Jay Bhatade" 
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <p className="text-lg mb-4">
            Jay Bhatade is a skilled web and app developer with expertise in React, Android development, 
            WordPress, and various other technologies. He is the creator of Streambox, an innovative 
            movie streaming application that offers HD free movie streaming with AI-powered recommendations.
          </p>
          <h2 className="text-2xl font-semibold text-gray-100 mb-3">Skills</h2>
          <ul className="list-disc list-inside mb-4">
            <li>React</li>
            <li>Android Development</li>
            <li>WordPress</li>
            <li>AI Integration</li>
            <li>Full-stack Web Development</li>
          </ul>
          <h2 className="text-2xl font-semibold text-gray-100 mb-3">Streambox App</h2>
          <p className="text-lg mb-4 text-red-700 font-bold">
            Note: This App is for Project purpose only and it does not promote piracy
          </p>
          <p className="text-lg mb-4">
            Streambox is a cutting-edge movie streaming platform that offers:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>HD free movie streaming</li>
            <li>AI-powered movie recommendations</li>
            <li>User-friendly interface</li>
            <li>Extensive movie library</li>
          </ul>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://github.com/jaybhatade" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/jaybhatade" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:jay@example.com" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaEnvelope size={24} />
            </a>
            <a href="https://jaybhatade.com" className="text-gray-400 hover:text-white transition-colors duration-200">
              <FaGlobe size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
