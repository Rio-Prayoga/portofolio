import React from 'react';
import { ExternalLink, Github, Monitor, Smartphone, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution dengan admin dashboard dan customer interface. Fitur lengkap termasuk manajemen produk, keranjang belanja, dan sistem pembayaran.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'JWT'],
      role: 'Fullstack Developer',
      type: 'Solo Project',
      demoUrl: 'https://demo-ecommerce.vercel.app',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      features: ['Admin Dashboard', 'Customer Interface', 'Payment Integration', 'Inventory Management']
    },
    {
      title: 'University Management System',
      description: 'Sistem manajemen universitas dengan multiple role (admin, dosen, mahasiswa). Mencakup manajemen mata kuliah, jadwal, dan nilai.',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth'],
      role: 'Fullstack Developer & UI Designer',
      type: 'Solo Project',
      demoUrl: 'https://university-system.vercel.app',
      githubUrl: 'https://github.com/yourusername/university-system',
      features: ['Multi-role Access', 'Course Management', 'Grade System', 'Schedule Management']
    },
    {
      title: 'Task Management App',
      description: 'Aplikasi manajemen tugas dengan fitur kolaborasi tim, deadline tracking, dan progress monitoring.',
      image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      role: 'Frontend Developer & Project Manager',
      type: 'Team Project',
      demoUrl: 'https://task-management-app.vercel.app',
      githubUrl: 'https://github.com/yourusername/task-management',
      features: ['Team Collaboration', 'Real-time Updates', 'Deadline Tracking', 'Progress Analytics']
    },
    {
      title: 'Portfolio Website',
      description: 'Website portofolio responsive dengan desain modern dan animasi yang smooth. Dibangun dengan performa optimal.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      role: 'Frontend Developer & UI/UX Designer',
      type: 'Solo Project',
      demoUrl: 'https://portfolio-website.vercel.app',
      githubUrl: 'https://github.com/yourusername/portfolio',
      features: ['Responsive Design', 'Smooth Animations', 'SEO Optimized', 'Fast Loading']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcase of my work ranging from full-stack applications to UI/UX design projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <span className="px-2 py-1 bg-white/90 text-gray-900 text-xs font-medium rounded">
                    {project.type}
                  </span>
                  {project.type === 'Solo Project' ? (
                    <Monitor className="w-4 h-4 text-white" />
                  ) : (
                    <Users className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                      title="View Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                      title="View Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-900 mb-2 block">My Role:</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {project.role}
                  </span>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-900 mb-2 block">Technologies:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <span className="text-sm font-medium text-gray-900 mb-2 block">Key Features:</span>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;