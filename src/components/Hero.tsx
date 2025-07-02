import React from 'react';
import { ArrowDown, Code, Palette, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-rose-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <div className="w-28 h-28 rounded-full overflow-hidden">
                  <img
                    src="/img/rio.jpg"
                    alt="Foto Profil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-600">Rio Prayoga</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate <span className="font-semibold text-blue-600">fullstack web developer</span> & 
            <span className="font-semibold text-rose-600"> UI/UX enthusiast</span> who loves creating beautiful, functional digital experiences.
          </p>

          {/* Skills Icons */}
          <div className="flex justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 hover:bg-blue-200 transition-colors">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Developer</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-2 hover:bg-rose-200 transition-colors">
                <Palette className="w-8 h-8 text-rose-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Designer</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-2 hover:bg-teal-200 transition-colors">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">Manager</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
            >
              Get in Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
