"use client"

import { useState, useEffect } from "react"
import { Menu, X, Github, Linkedin, Mail, ArrowRight, ExternalLink, Eye } from 'lucide-react'
import { portfolioData } from "@/lib/portfolio-data"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: true
          }))
        }
      })
    }, observerOptions)

    document.querySelectorAll('[data-observe]').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800 backdrop-blur-md bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-cyan-400 animate-fade-in">{portfolioData.profile.name.split(" ").slice(0, 2).join(" ")}</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection("about")} className="text-slate-300 hover:text-cyan-400 transition hover:scale-105">
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-300 hover:text-cyan-400 transition hover:scale-105"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-cyan-400 transition hover:scale-105"
            >
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-slate-300 hover:text-cyan-400 transition hover:scale-105">
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-300 hover:text-cyan-400 transition hover:scale-105"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-cyan-400">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-800 bg-slate-950 animate-slide-down">
            <div className="flex flex-col gap-4 px-6 py-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-6 md:py-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold text-balance">
                Software <span className="text-cyan-400">Engineer</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">{portfolioData.profile.bio}</p>
              <div className="flex gap-4 pt-6">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition hover:scale-105 active:scale-95"
                >
                  Get in touch <ArrowRight size={18} />
                </button>
                <a
                  href={portfolioData.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition hover:scale-105 active:scale-95"
                >
                  <Github size={20} /> GitHub
                </a>
                <a
                href={portfolioData.profile.resume}
                 target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition hover:scale-105 active:scale-95"
                >
                 <Eye size={20} />  View CV 
              </a>
              </div>
            </div>
            {/* Profile Photo */}
            <div className="flex justify-center animate-fade-in-right">
              <img
                src={portfolioData.profile.photo || "/placeholder.svg"}
                alt={portfolioData.profile.name}
                className="w-full max-w-sm rounded-lg border-2 border-cyan-400/30 hover:border-cyan-400 transition hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" data-observe className={`max-w-6xl mx-auto px-6 py-20 border-t border-slate-800 transition-opacity duration-1000 ${visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 animate-fade-in-left">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-slate-300 leading-relaxed animate-fade-in-up">
              <p>
                Hello! I'm Khaled, a Software Engineer and Technical Project Coordinator at IPMagiX, where I help coordinate technical projects and guide teams toward successful outcomes.
              </p>
              <p>
                As a 2025 Computer Science graduate from Assiut University, I specialize in building robust, scalable applications using .NET for the backend and modern frameworks like React and Angular.
              </p>
              <p>
                My passion lies in clean architecture and system reliability, skills I developed during internships at companies like EJADA, Egabi Solutions, and AZM Squad. I thrive on solving complex technical challenges, from implementing secure authentication to designing distributed database solutions.
              </p>
               <p>
                Beyond coding, I am committed to leadership and knowledge sharing. During my time as Students Union President, I led technical initiatives, organized hackathons, and actively mentored junior developers, fostering a collaborative and growth-oriented environment.              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 space-y-4 hover:border-cyan-400/50 transition hover:shadow-lg hover:shadow-cyan-500/10 animate-fade-in-right">
              <h3 className="text-cyan-400 font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-cyan-400">Education:</span> B.S. Computer Science, Assiut University (2025)
                </div>
                <div>
                  <span className="text-cyan-400">Status:</span> Technical Project Coordinator
                </div>
                <div>
                  <span className="text-cyan-400">Location:</span> {portfolioData.profile.location}
                </div>
                <div>
                  <span className="text-cyan-400">Languages:</span> Arabic (Native), English (B2)
                </div>
                <div>
                  <span className="text-cyan-400">Focus:</span> Software Engineer, Backend .NET, Project Management
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" data-observe className={`max-w-6xl mx-auto px-6 py-20 border-t border-slate-800 transition-all duration-1000 ${visibleSections['experience'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 animate-fade-in-left">Experience</h2>
          <div className="space-y-8">
            {portfolioData.experience.map((job, i) => (
              <div key={i} className="border-l-2 border-cyan-400 pl-6 pb-8 hover:border-cyan-300 transition animate-fade-in-up" style={{animationDelay: `${i * 100}ms`}}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2 hover:translate-x-1 transition">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-cyan-400">{job.company}</p>
                  </div>
                  <span className="text-sm text-slate-400">{job.period}</span>
                </div>
                <p className="text-slate-300">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" data-observe className={`max-w-6xl mx-auto px-6 py-20 border-t border-slate-800 transition-all duration-1000 ${visibleSections['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 animate-fade-in-left">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, i) => (
              <div
                key={project.id}
                className="border border-slate-700 rounded-lg p-6 hover:border-cyan-400 transition bg-slate-800/30 flex flex-col hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 animate-fade-in-up"
                style={{animationDelay: `${i * 100}ms`}}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded hover:bg-cyan-500/40 transition">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <ul className="text-sm text-slate-400 space-y-1 mb-6 flex-grow">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 hover:translate-x-1 transition">
                      <span className="text-cyan-400 mt-1">•</span> {h}
                    </li>
                  ))}
                </ul>
                {/* Repo and Demo Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition hover:scale-110"
                    >
                      <Github size={16} /> Repository
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 transition hover:scale-110"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" data-observe className={`max-w-6xl mx-auto px-6 py-20 border-t border-slate-800 transition-all duration-1000 ${visibleSections['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 animate-fade-in-left">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioData.skills.map((skillGroup, i) => (
              <div key={i} className="space-y-4 animate-fade-in-up" style={{animationDelay: `${i * 100}ms`}}>
                <h3 className="text-lg font-semibold text-cyan-400">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-full text-sm hover:border-cyan-400 hover:text-cyan-400 transition hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteering & Leadership */}
        <section id="leadership" data-observe className={`max-w-6xl mx-auto px-6 py-20 border-t border-slate-800 transition-all duration-1000 ${visibleSections['leadership'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 animate-fade-in-left">Leadership & Volunteering</h2>
          <div className="space-y-4">
            {portfolioData.leadership.map((item, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center md:justify-between p-4 border border-slate-700 rounded-lg hover:border-cyan-400 transition hover:bg-slate-800/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:translate-x-1 animate-fade-in-up"
                style={{animationDelay: `${i * 100}ms`}}
              >
                <div>
                  <h3 className="font-semibold text-cyan-400">{item.role}</h3>
                  <p className="text-slate-400">{item.org}</p>
                </div>
                <span className="text-sm text-slate-500 mt-2 md:mt-0">{item.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" data-observe className={`max-w-6xl mx-auto px-6 py-20 border-t border-slate-800 transition-all duration-1000 ${visibleSections['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl font-bold mb-12 text-center animate-fade-in">Let's Work Together</h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-center text-slate-300 leading-relaxed animate-fade-in-up">
              I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
              want to say hi, feel free to get in touch!
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href={`mailto:${portfolioData.profile.email}`}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-slate-950 font-semibold rounded-lg hover:bg-cyan-400 transition hover:scale-105 active:scale-95 animate-fade-in-up"
              >
                <Mail size={20} /> Email Me
              </a>
              <a
                href={portfolioData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition hover:scale-105 active:scale-95 animate-fade-in-up"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href={portfolioData.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition hover:scale-105 active:scale-95 animate-fade-in-up"
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href={portfolioData.profile.resume}
                target="_blank"                
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition hover:scale-105 active:scale-95 animate-fade-in-up"
              >
                <Eye size={20} />  View CV 
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 mt-20">
          <div className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-500 text-sm animate-fade-in">
            <p>© 2025 {portfolioData.profile.name}. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
