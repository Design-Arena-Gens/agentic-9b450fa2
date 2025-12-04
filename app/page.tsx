'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your interest! We\'ll be in touch soon.')
    setEmail('')
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">Startup</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            Innovation
            <br />
            <span className="gradient-text">Simplified</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
            Transform your boldest ideas into reality with cutting-edge solutions designed for tomorrow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg hover:shadow-2xl hover:scale-105 transition transform">
              Start Your Journey
            </button>
            <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg hover:bg-gray-900 hover:text-white transition">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 text-center mb-20">Everything you need to succeed</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                description: 'Built for speed and performance without compromise'
              },
              {
                icon: '🎨',
                title: 'Beautiful Design',
                description: 'Pixel-perfect interfaces that users love'
              },
              {
                icon: '🔒',
                title: 'Secure by Default',
                description: 'Enterprise-grade security from day one'
              },
              {
                icon: '📱',
                title: 'Fully Responsive',
                description: 'Works seamlessly on all devices'
              },
              {
                icon: '🚀',
                title: 'Scalable',
                description: 'Grow from startup to enterprise effortlessly'
              },
              {
                icon: '💎',
                title: 'Premium Support',
                description: '24/7 support from our expert team'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group gradient-border p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { number: '10K+', label: 'Active Users' },
              { number: '99.9%', label: 'Uptime' },
              { number: '500+', label: 'Companies' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">Built for the Future</h2>
              <p className="text-xl text-gray-600 mb-6">
                We believe in creating products that don't just meet today's needs, but anticipate tomorrow's challenges.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of experts combines cutting-edge technology with thoughtful design to deliver solutions that truly make a difference.
              </p>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-indigo-600 opacity-80 transform rotate-6"></div>
              <div className="absolute inset-0 aspect-square rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-600 opacity-80 transform -rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of companies already using our platform
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-gray-300 focus:border-purple-600 focus:outline-none text-lg"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg hover:shadow-lg hover:scale-105 transition transform"
              >
                Join Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">Startup</div>
              <p className="text-gray-400">Innovation simplified for everyone</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Startup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
