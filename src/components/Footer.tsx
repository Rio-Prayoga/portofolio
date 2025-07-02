import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Rio Prayoga Portfolio</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Passionate fullstack developer and UI/UX enthusiast, creating digital solutions 
              that make a difference. Always learning, always growing.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rio-prayoga"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:riopray38@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Projects', id: 'projects' },
                { name: 'Experience', id: 'experience' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:riopray38@gmail.com" className="hover:text-white transition-colors">
                  riopray38@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+6285840469673" className="hover:text-white transition-colors">
                  +62-858-4046-9673
                </a>
              </li>
              <li>Yogyakarta, Indonesia</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} Rio Prayoga Portfolio. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> Rio Prayoga
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;