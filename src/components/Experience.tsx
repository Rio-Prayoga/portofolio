import React from 'react';
import { Users, Code, Palette, Database, TestTube, FileText } from 'lucide-react';

const Experience = () => {
  const roles = [
    {
      title: 'Project Manager',
      icon: <Users className="w-6 h-6" />,
      description: 'Mengelola timeline proyek, koordinasi tim, dan memastikan deliverables sesuai target',
      responsibilities: [
        'Perencanaan dan penjadwalan proyek',
        'Koordinasi antar anggota tim',
        'Monitoring progress dan quality control',
        'Komunikasi dengan stakeholder'
      ],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Fullstack Developer',
      icon: <Code className="w-6 h-6" />,
      description: 'Mengembangkan aplikasi web end-to-end dari frontend hingga backend',
      responsibilities: [
        'Pengembangan frontend dengan React/Next.js',
        'Implementasi backend API dan database',
        'Integrasi sistem dan deployment',
        'Code review dan optimization'
      ],
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'UI/UX Designer',
      icon: <Palette className="w-6 h-6" />,
      description: 'Merancang antarmuka pengguna yang intuitif dan pengalaman pengguna yang optimal',
      responsibilities: [
        'Penelitian pengguna dan analisis kebutuhan',
        'Pembuatan wireframe dan prototype',
        'Desain visual dan sistem desain',
        'Usability testing dan iterasi'
      ],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Data Entry Specialist',
      icon: <Database className="w-6 h-6" />,
      description: 'Mengelola dan mengisi data sistem dengan akurasi tinggi',
      responsibilities: [
        'Input dan validasi data sistem',
        'Pembuatan dataset untuk testing',
        'Dokumentasi struktur data',
        'Quality assurance data integrity'
      ],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Quality Assurance',
      icon: <TestTube className="w-6 h-6" />,
      description: 'Memastikan kualitas produk melalui testing dan validasi sistematis',
      responsibilities: [
        'Functional dan UI testing',
        'Bug identification dan reporting',
        'Test case development',
        'Performance dan security testing'
      ],
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Technical Writer',
      icon: <FileText className="w-6 h-6" />,
      description: 'Menyusun dokumentasi teknis dan proposal proyek yang komprehensif',
      responsibilities: [
        'Pembuatan dokumentasi API',
        'User manual dan guide',
        'Proposal dan presentasi proyek',
        'Technical specification'
      ],
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  const projectStats = [
    { label: 'Projects Completed', value: '15+', description: 'Individual & Team Projects' },
    { label: 'Websites Built', value: '2', description: 'Complete Solo Development' },
    { label: 'Team Members', value: '20+', description: 'Collaborated Across Projects' },
    { label: 'Success Rate', value: '95%', description: 'On-time Project Delivery' }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Versatile roles I've taken on in various projects, from solo development to team collaboration
          </p>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {projectStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-rose-50 rounded-lg p-6 mb-4">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900">{stat.label}</div>
              </div>
              <p className="text-sm text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${role.color}`}>
                  {role.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{role.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{role.description}</p>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                <ul className="space-y-1">
                  {role.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="text-sm text-gray-600 flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Project Highlights */}
        <div className="bg-gradient-to-r from-blue-50 to-rose-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Highlights</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Solo Development Achievement</h4>
              <p className="text-gray-600 mb-4">
                Berhasil menyelesaikan 2 website kompleks secara mandiri dalam waktu 6 bulan, 
                mencakup seluruh aspek dari perencanaan hingga deployment.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Full-Stack Development
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  UI/UX Design
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                  Project Management
                </span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Team Leadership</h4>
              <p className="text-gray-600 mb-4">
                Memimpin tim dalam berbagai proyek kuliah, mengelola tugas dan deadline, 
                serta memastikan kualitas deliverables yang konsisten.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                  Team Coordination
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full">
                  Quality Assurance
                </span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                  Documentation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;