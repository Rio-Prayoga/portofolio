import React from 'react';
import { Calendar, Clock, ArrowRight, Brain, Code, Trophy } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Bagaimana Saya Menyelesaikan 2 Website Sendirian',
      excerpt: 'Cerita di balik pengembangan dua website kompleks secara mandiri, dari planning hingga deployment. Tips dan trik yang saya pelajari dalam perjalanan solo development.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Development',
      icon: <Code className="w-5 h-5" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Belajar Coding dengan AI: Tanpa YouTube, Tanpa Tutorial',
      excerpt: 'Mengapa saya memilih AI sebagai mentor coding utama dan bagaimana metode ini mengubah cara saya belajar programming. Pro, kontra, dan lessons learned.',
      date: '2024-01-08',
      readTime: '6 min read',
      category: 'Learning',
      icon: <Brain className="w-5 h-5" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Memperjuangkan Nilai yang Adil: Pengalaman Project Manager',
      excerpt: 'Bagaimana saya mengatasi tantangan dalam proyek kelompok dan memastikan kontribusi setiap anggota tim mendapat pengakuan yang layak.',
      date: '2024-01-01',
      readTime: '5 min read',
      category: 'Leadership',
      icon: <Trophy className="w-5 h-5" />,
      color: 'bg-green-100 text-green-600'
    }
  ];

  const learningJourney = [
    {
      phase: 'Discovery',
      title: 'Menemukan Passion di Web Development',
      description: 'Awal mula tertarik dengan coding dan memutuskan untuk fokus pada web development'
    },
    {
      phase: 'Learning',
      title: 'Eksplorasi AI-Powered Learning',
      description: 'Mengembangkan metode belajar unik dengan AI sebagai mentor utama'
    },
    {
      phase: 'Practice',
      title: 'Solo Projects & Team Collaboration',
      description: 'Mengaplikasikan knowledge dalam proyek nyata, baik individual maupun tim'
    },
    {
      phase: 'Growth',
      title: 'Continuous Improvement',
      description: 'Terus berkembang dan berbagi pengalaman dengan komunitas'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Dev Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sharing experiences, insights, and lessons learned from my coding journey
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 ${post.color.split(' ')[0]}`} />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`flex items-center px-3 py-1 rounded-full ${post.color}`}>
                    {post.icon}
                    <span className="ml-2 text-sm font-medium">{post.category}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('id-ID', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Learning Journey Timeline */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Learning Journey</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {learningJourney.map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  {index < learningJourney.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-rose-500 transform translate-x-8" />
                  )}
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <span className="text-sm font-medium text-blue-600 mb-2 block">{item.phase}</span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Tertarik dengan perjalanan saya? Mari terhubung dan berbagi pengalaman!
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-rose-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-rose-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Let's Connect
          </button>
        </div>
        </div>
        </section>
          );
        };


export default Blog;