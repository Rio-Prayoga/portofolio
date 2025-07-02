import React from 'react';
import { Code2, Palette, Users, BookOpen, Brain, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend Development',
      icon: <Code2 className="w-6 h-6" />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend Development',
      icon: <Code2 className="w-6 h-6" />,
      items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Authentication']
    },
    {
      category: 'UI/UX Design',
      icon: <Palette className="w-6 h-6" />,
      items: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems']
    },
    {
      category: 'Project Management',
      icon: <Users className="w-6 h-6" />,
      items: ['Scrum', 'Agile', 'Team Leadership', 'Task Planning', 'Quality Assurance', 'Documentation']
    }
  ];

  const tools = [
    'VS Code', 'Git', 'GitHub', 'Vercel', 'Netlify', 'Figma', 
    'Postman', 'Chrome DevTools', 'Notion', 'Slack'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Hello, I'm Rio Prayoga</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Saya adalah seorang mahasiswa yang passionate dalam pengembangan web fullstack, 
                desain UI/UX, dan manajemen proyek. Dengan pengalaman membangun aplikasi web 
                dari konsep hingga deployment, saya selalu antusias untuk menghadapi tantangan baru.
              </p>
              <p>
                Yang membuat saya unik adalah pendekatan belajar mandiri yang saya terapkan. 
                Saya mengandalkan AI sebagai mentor utama dalam coding, tanpa bergantung pada tutorial YouTube. 
                Metode ini membantu saya mengembangkan kemampuan problem-solving yang kuat dan adaptabilitas tinggi.
              </p>
              <p>
                Dalam proyek kelompok, saya sering mengambil peran sebagai UI/UX designer project manager sekaligus 
                fullstack developer. Saya bangga pernah menyelesaikan 2 website kompleks secara mandiri - 
                mulai dari desain UI, development, hingga pengisian data dan dokumentasi.
              </p>
            </div>

            {/* Unique Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Brain className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">AI-Powered Learning</h4>
                <p className="text-sm text-gray-600">Belajar coding dengan AI tanpa YouTube</p>
              </div>
              <div className="text-center p-4 bg-rose-50 rounded-lg">
                <Zap className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Fast Execution</h4>
                <p className="text-sm text-gray-600">Menyelesaikan 2 website sendirian</p>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-lg">
                <BookOpen className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Self-Directed</h4>
                <p className="text-sm text-gray-600">Otodidak dengan hasil berkualitas</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools I Use</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-rose-50 text-gray-700 rounded-full font-medium hover:from-blue-100 hover:to-rose-100 transition-all duration-200"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;