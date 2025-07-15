'use client';
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, MessageCircle, ChevronDown, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "zkInspire",
      description:
        "A decentralized platform where creators can submit ideas anonymously using ZK proofs, enabling unbiased evaluations and privacy-preserving inspiration flows.",
      tech: ["ZK", "UniSwap v4", "Zora", "Next.js", "Solidity"],
      github: "https://github.com/0xsmit49/zkInspire",
      demo: "https://zk-inspire.vercel.app/", // replace with actual demo if available
    },
    {
      title: "ChainMorph",
      description:
        "Cross-chain morphing protocol enabling dynamic NFTs to evolve based on real-world or onchain inputs, powered by Chainlink Functions and VRF.",
      tech: ["Chainlink","Avalanche","Cross chain Interoperability", "Solidity", "Hardhat", "Next.js", "NFT"],
      github: "https://github.com/0xsmit49/ChainMorph",
      demo: "https://chainmorph.vercel.app/", // replace with actual demo if available
    },
    {
      title: "ZK-AgentMesh",
      description:
        "An open deployment network for AI agents using Akash decentralized compute, with ZK proofs for attribution, privacy, and trustless execution.",
      tech: ["Akash", "ZK", "Docker", "Next.js", "CDP wallet","x402pay"],
      github: "https://github.com/0xsmit49/ZK-AgentMesh",
      demo: "https://zk-agentmesh.vercel.app/", // replace with actual demo if available
    },
  ];
  

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React/Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 70 },
    { name: "MongoDB", level: 75 }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-teal-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-teal-400">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['home', 'about', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors hover:text-teal-400 ${
                      activeSection === section ? 'text-teal-400' : 'text-white'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-teal-400 hover:text-teal-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize text-white hover:text-teal-400"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-black"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
            Smit Bafna
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies and creative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-teal-500 hover:bg-teal-600 text-black px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-teal-400" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg mx-auto flex items-center justify-center">
                <User size={120} className="text-black" />
              </div>
            </div>
            <div>
  <h3 className="text-2xl font-semibold mb-4 text-teal-400">gm! I'm a Web3-native developer</h3>
  <p className="text-gray-300 mb-6 leading-relaxed">
  With over 2 years of experience in full-stack and smart contract development, I focus on building
  scalable decentralized applications. My work spans from writing secure on-chain logic to designing
  intuitive interfaces that connect users with blockchain systems.
</p>
<p className="text-gray-300 mb-6 leading-relaxed">
  I've contributed to projects involving zero-knowledge proofs, cross-chain interoperability, and decentralized compute.
  This includes developing gas-efficient Solidity contracts, integrating oracles, and deploying infrastructure on platforms.
</p>
<p className="text-gray-300 mb-6 leading-relaxed">
  Outside of development, I'm active in the Web3 ecosystem through hackathons, open-source contributions,
  and ongoing exploration of areas like L2 scaling, modular architectures, and cryptographic primitives.
</p>

  <div className="flex space-x-4">
    <a
      href="https://github.com/Smitbafna"
      className="text-teal-400 hover:text-teal-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github size={24} />
    </a>
    <a
      href="https://www.linkedin.com/in/smit-bafna-bb99372a3/"
      className="text-teal-400 hover:text-teal-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin size={24} />
    </a>
    <a
      href="https://x.com/bafnasmit_49"
      className="text-teal-400 hover:text-teal-300 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Mail size={24} />
    </a>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-teal-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden border border-teal-500/20 hover:border-teal-500/50 transition-all transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
                  <Code size={64} className="text-black" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-teal-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-teal-500/20 text-teal-400 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className="text-teal-400 hover:text-teal-300 transition-colors">
                      <Github size={20} />
                    </a>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12 text-teal-400">Get In Touch</h2>
    <p className="text-xl text-gray-300 mb-12">
      I'm always open to discussing new opportunities and interesting projects.
    </p>
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <a
        href="https://x.com/bafnasmit_49"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center group transform transition-transform hover:scale-105"
      >
        <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="text-black" size={24} />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-teal-400">Twitter/X</h3>
        <p className="text-gray-300 group-hover:underline">x.com/bafnasmit_49</p>
      </a>

      <a
        href="https://github.com/Smitbafna"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center group transform transition-transform hover:scale-105"
      >
        <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Github className="text-black" size={24} />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-teal-400">GitHub</h3>
        <p className="text-gray-300 group-hover:underline">github.com/Smitbafna</p>
      </a>

      <a
        href="https://linkedin.com/in/smit-bafna-bb99372a3"
        target="_blank"
        rel="noopener noreferrer"
        className="text-center group transform transition-transform hover:scale-105"
      >
        <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Linkedin className="text-black" size={24} />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-teal-400">LinkedIn</h3>
        <p className="text-gray-300 group-hover:underline">linkedin.com/in/smit-bafna-bb99372a3</p>
      </a>
    </div>

    {/* <a
  href="mailto:bafnasmit@gmail.com"
  className="bg-teal-500 hover:bg-teal-600 text-black px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
>
  Send Message
</a> */}

  </div>
</section>


      {/* Footer */}
      <footer className="py-8 px-4 border-t border-teal-500/20">
        <div className="max-w-4xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Smit Bafna. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}