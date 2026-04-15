'use client'

import { SplineScene } from "@/components/ui/splite"
import AnimatedShaderBackground from "@/components/ui/animated-shader-background"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Linkedin, Github, Mail, Terminal, Code2, ExternalLink, AppWindow } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)

  const roles = [
    "Software Engineer",
    "iOS Developer",
    "Founder",
    "GT Grad Student"
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    let currentIndex = 0
    let isDeleting = false
    let timeout: NodeJS.Timeout

    const type = () => {
      if (!isDeleting && currentIndex <= currentRole.length) {
        setTypewriterText(currentRole.slice(0, currentIndex))
        currentIndex++
        timeout = setTimeout(type, 100)
      } else if (!isDeleting && currentIndex > currentRole.length) {
        timeout = setTimeout(() => {
          isDeleting = true
          type()
        }, 2000)
      } else if (isDeleting && currentIndex >= 0) {
        setTypewriterText(currentRole.slice(0, currentIndex))
        currentIndex--
        timeout = setTimeout(type, 50)
      } else if (isDeleting && currentIndex < 0) {
        isDeleting = false
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    type()
    return () => clearTimeout(timeout)
  }, [roleIndex])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-slate-300 relative overflow-x-hidden">
      {/* Animated Shader Background */}
      <AnimatedShaderBackground />

      {/* Grid Pulse Background */}
      <div className="fixed inset-0 pointer-events-none z-[1] animate-grid-pulse" style={{
        backgroundImage: `
          linear-gradient(rgba(108, 99, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(108, 99, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}></div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#6C63FF]/30 shadow-lg shadow-[#6C63FF]/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="#home" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] via-white to-[#6C63FF] hover:from-[#6C63FF] hover:via-[#8078FF] hover:to-white transition-all duration-300 tracking-tight flex items-center gap-2 group">
              <Terminal className="w-5 h-5 text-[#6C63FF] group-hover:text-white transition-colors" />
              <span className="font-mono">&lt;KT /&gt;</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-slate-300 hover:text-white transition-all text-sm font-medium group"
                >
                  <span className="font-mono text-[#6C63FF]/60 text-xs mr-1">{String(index + 1).padStart(2, '0')}.</span>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#6C63FF] to-[#8078FF] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-300 hover:text-[#6C63FF] transition-colors p-2 border border-[#6C63FF]/30 rounded hover:border-[#6C63FF]/50 hover:shadow-lg hover:shadow-[#6C63FF]/20"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-[#6C63FF]/30 pt-4 bg-[#0a0a0a]/80 backdrop-blur-md rounded-lg p-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-[#6C63FF] pl-4"
                >
                  <span className="font-mono text-[#6C63FF]/60 text-xs mr-2">{String(index + 1).padStart(2, '0')}.</span>
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-8 pt-20 relative z-10">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left content */}
            <div className="flex-1 space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] via-white to-[#6C63FF] drop-shadow-[0_0_30px_rgba(108,99,255,0.3)]">
                    Khamari Thompson
                  </span>
                </h1>

                {/* Typewriter Role */}
                <div className="h-12 flex items-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#6C63FF] font-mono">
                    {typewriterText}
                    <span className="animate-pulse">|</span>
                  </h2>
                </div>

                <p className="text-xl md:text-2xl text-[#F0F0F0] font-semibold">
                  I build things that ship.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#work"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#6C63FF] to-[#8078FF] text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6C63FF]/50 text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View My Work
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8078FF] to-[#6C63FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="#contact"
                  className="px-8 py-4 border-2 border-[#6C63FF] text-[#F0F0F0] rounded-lg font-semibold hover:bg-[#6C63FF]/10 transition-all hover:shadow-lg hover:shadow-[#6C63FF]/30 backdrop-blur-sm hover:text-white text-center"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-6">
                <Link
                  href="https://github.com/KhamariThompson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-[#6C63FF]/30 text-slate-400 hover:text-[#6C63FF] hover:border-[#6C63FF]/50 transition-all hover:shadow-lg hover:shadow-[#6C63FF]/20 backdrop-blur-sm group"
                >
                  <Github size={24} className="group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/khamarithompson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-[#6C63FF]/30 text-slate-400 hover:text-[#6C63FF] hover:border-[#6C63FF]/50 transition-all hover:shadow-lg hover:shadow-[#6C63FF]/20 backdrop-blur-sm group"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right content - Spline 3D Scene */}
            <div className="flex-1 w-full h-[500px] hidden md:block relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6C63FF]/20 via-transparent to-[#8078FF]/20 rounded-2xl blur-3xl"></div>
              <div className="relative border-2 border-[#6C63FF]/30 rounded-2xl overflow-hidden backdrop-blur-sm shadow-2xl shadow-[#6C63FF]/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8078FF] to-transparent animate-pulse"></div>
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
              {/* Corner Accents */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#6C63FF] rounded-tl-lg"></div>
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#8078FF] rounded-tr-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#8078FF] rounded-bl-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#6C63FF] rounded-br-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#6C63FF] mb-2">
              <span className="text-[#6C63FF]/60 font-mono text-lg mr-3">[01]</span>
              ABOUT_ME
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#6C63FF] via-[#8078FF] to-transparent rounded-full"></div>
          </div>

          <div className="space-y-8">
            {/* Bio */}
            <div className="bg-gradient-to-br from-[#6C63FF]/5 via-transparent to-[#8078FF]/5 border border-[#6C63FF]/30 rounded-xl p-8 backdrop-blur-sm hover:border-[#6C63FF]/50 transition-all hover:shadow-lg hover:shadow-[#6C63FF]/10">
              <p className="text-[#F0F0F0] text-lg leading-relaxed">
                GT CS grad student specializing in Computing Systems. Former SWE intern at Starz.
                Founder of <Link href="https://nighthouse.tech" target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] hover:text-[#8078FF] font-semibold underline decoration-[#6C63FF]/30 hover:decoration-[#6C63FF] transition-colors">Night House</Link>,
                a software studio. I build consumer apps, infrastructure tools, and whatever I think is missing from the world.
              </p>
            </div>

            {/* Stat Pills */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: "4+ Years Building", icon: Code2 },
                { label: "3 Apps Shipped", icon: AppWindow },
                { label: "1,000+ Users", icon: Terminal }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#6C63FF]/10 to-[#8078FF]/10 border border-[#6C63FF]/30 hover:border-[#6C63FF]/60 transition-all hover:shadow-md hover:shadow-[#6C63FF]/20 backdrop-blur-sm"
                >
                  <stat.icon className="w-5 h-5 text-[#6C63FF] group-hover:scale-110 transition-transform" />
                  <span className="text-[#F0F0F0] font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="py-32 px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#6C63FF] mb-2">
              <span className="text-[#6C63FF]/60 font-mono text-lg mr-3">[02]</span>
              SELECTED_WORK
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#6C63FF] via-[#8078FF] to-transparent rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 100Days */}
            <div className="group relative block">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] via-[#8078FF] to-[#6C63FF] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-[#6C63FF]/10 via-[#0a0a0a] to-transparent border-2 border-[#6C63FF]/30 rounded-2xl p-6 backdrop-blur-sm hover:border-[#6C63FF]/60 transition-all duration-300 group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6C63FF]/30 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#6C63FF]/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#6C63FF] shadow-lg shadow-[#6C63FF]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#8078FF] shadow-lg shadow-[#8078FF]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F0F0F0] shadow-lg shadow-white/50"></div>
                  </div>
                  <AppWindow className="w-4 h-4 text-[#6C63FF]" />
                </div>

                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#6C63FF] mb-3 group-hover:from-[#6C63FF] group-hover:to-[#8078FF] transition-all">
                    100Days
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Mobile-first iOS habit tracker built with <span className="text-[#6C63FF] font-semibold">SwiftUI</span>, <span className="text-[#8078FF] font-semibold">Firebase</span>, and <span className="text-[#F0F0F0] font-semibold">RevenueCat</span>. Available on App Store.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['SwiftUI', 'Firebase', 'RevenueCat', 'iOS'].map((tech) => (
                    <span key={tech} className="text-xs text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full border border-[#6C63FF]/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="https://apps.apple.com/us/app/100days-habit-tracker/id6744754614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#6C63FF] font-semibold group-hover:gap-3 transition-all mt-auto"
                >
                  App Store
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>

            {/* 10K Steps+ */}
            <div className="group relative block">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8078FF] via-[#6C63FF] to-[#8078FF] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-[#8078FF]/10 via-[#0a0a0a] to-transparent border-2 border-[#6C63FF]/30 rounded-2xl p-6 backdrop-blur-sm hover:border-[#6C63FF]/60 transition-all duration-300 group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6C63FF]/30 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#6C63FF]/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#8078FF] shadow-lg shadow-[#8078FF]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#6C63FF] shadow-lg shadow-[#6C63FF]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F0F0F0] shadow-lg shadow-white/50"></div>
                  </div>
                  <Terminal className="w-4 h-4 text-[#6C63FF]" />
                </div>

                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#8078FF] mb-3 group-hover:from-[#8078FF] group-hover:to-[#6C63FF] transition-all">
                    10K Steps+
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    iOS health app built with <span className="text-[#6C63FF] font-semibold">SwiftUI</span>, <span className="text-[#8078FF] font-semibold">HealthKit</span>, and <span className="text-[#F0F0F0] font-semibold">Firebase</span>. 1,000+ active users.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['SwiftUI', 'HealthKit', 'Firebase', 'iOS'].map((tech) => (
                    <span key={tech} className="text-xs text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full border border-[#6C63FF]/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="https://github.com/KhamariThompson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#6C63FF] font-semibold group-hover:gap-3 transition-all mt-auto"
                >
                  GitHub
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>

            {/* OptionsRisk Calculator */}
            <div className="group relative block">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6C63FF] via-[#8078FF] to-[#6C63FF] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-[#6C63FF]/10 via-[#0a0a0a] to-transparent border-2 border-[#6C63FF]/30 rounded-2xl p-6 backdrop-blur-sm hover:border-[#6C63FF]/60 transition-all duration-300 group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6C63FF]/30 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#6C63FF]/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#6C63FF] shadow-lg shadow-[#6C63FF]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#F0F0F0] shadow-lg shadow-white/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#8078FF] shadow-lg shadow-[#8078FF]/50"></div>
                  </div>
                  <Code2 className="w-4 h-4 text-[#6C63FF]" />
                </div>

                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#6C63FF] mb-3 group-hover:from-[#6C63FF] group-hover:to-[#8078FF] transition-all">
                    OptionsRisk Calculator
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Options trading risk calculator built with <span className="text-[#6C63FF] font-semibold">React</span>, <span className="text-[#8078FF] font-semibold">TypeScript</span>, <span className="text-[#F0F0F0] font-semibold">Tailwind</span>, and Finnhub API.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'TypeScript', 'Tailwind', 'Finnhub API'].map((tech) => (
                    <span key={tech} className="text-xs text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full border border-[#6C63FF]/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="https://optionsriskcalculator.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#6C63FF] font-semibold group-hover:gap-3 transition-all mt-auto"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>

            {/* StudyPilotAI */}
            <div className="group relative block">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#8078FF] via-[#6C63FF] to-[#8078FF] rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

              <div className="relative bg-gradient-to-br from-[#8078FF]/10 via-[#0a0a0a] to-transparent border-2 border-[#6C63FF]/30 rounded-2xl p-6 backdrop-blur-sm hover:border-[#6C63FF]/60 transition-all duration-300 group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#6C63FF]/30 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#6C63FF]/20">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#F0F0F0] shadow-lg shadow-white/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#8078FF] shadow-lg shadow-[#8078FF]/50"></div>
                    <div className="w-3 h-3 rounded-full bg-[#6C63FF] shadow-lg shadow-[#6C63FF]/50"></div>
                  </div>
                  <Terminal className="w-4 h-4 text-[#6C63FF]" />
                </div>

                <div className="mb-6 flex-grow">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#8078FF] mb-3 group-hover:from-[#8078FF] group-hover:to-[#6C63FF] transition-all">
                    StudyPilotAI
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    AI-powered study plan generator built with <span className="text-[#6C63FF] font-semibold">React</span>, <span className="text-[#8078FF] font-semibold">Node.js</span>, and <span className="text-[#F0F0F0] font-semibold">OpenAI API</span>.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['React', 'Node.js', 'OpenAI API', 'TypeScript'].map((tech) => (
                    <span key={tech} className="text-xs text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full border border-[#6C63FF]/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="https://study-pilot-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#6C63FF] font-semibold group-hover:gap-3 transition-all mt-auto"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#6C63FF] mb-2">
              <span className="text-[#6C63FF]/60 font-mono text-lg mr-3">[03]</span>
              EXPERIENCE_LOG
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#6C63FF] via-[#8078FF] to-transparent rounded-full"></div>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6C63FF] via-[#8078FF] to-[#6C63FF] opacity-50"></div>
            <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#8078FF] via-[#6C63FF] to-[#8078FF] opacity-30 blur-sm"></div>

            <div className="space-y-12">
              {/* Georgia Tech */}
              <div className="relative grid md:grid-cols-[200px_1fr] gap-8 group">
                {/* Timeline Dot */}
                <div className="absolute left-[-6px] md:left-[114px] top-6 w-4 h-4 rounded-full bg-[#6C63FF] shadow-lg shadow-[#6C63FF]/50 border-4 border-[#0a0a0a] animate-pulse z-10"></div>
                <div className="absolute left-[-10px] md:left-[110px] top-4 w-6 h-6 rounded-full bg-[#6C63FF]/20 blur-md"></div>

                {/* Date */}
                <div className="md:text-right pl-8 md:pl-0">
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/30 backdrop-blur-sm">
                    <span className="text-xs text-[#6C63FF] font-mono tracking-wider">AUG 2025 - DEC 2027</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="bg-gradient-to-br from-[#6C63FF]/5 via-transparent to-[#8078FF]/5 border border-[#6C63FF]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#6C63FF]/50 transition-all hover:shadow-xl hover:shadow-[#6C63FF]/10 group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-slate-200 mb-2 flex items-center gap-2 flex-wrap">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#6C63FF]">M.S. Computer Science</span>
                    <span className="text-slate-500">@</span>
                    <Link href="https://www.gatech.edu/" target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] hover:text-[#8078FF] transition-colors underline decoration-[#6C63FF]/30">
                      Georgia Tech
                    </Link>
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Pursuing a Master of Science in Computer Science with a specialization in <span className="text-[#6C63FF] font-semibold">Computing Systems</span>. Expected graduation December 2027.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Computing Systems', 'Operating Systems', 'Computer Networks'].map((tag) => (
                      <span key={tag} className="text-xs text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full border border-[#6C63FF]/20 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Night House */}
              <div className="relative grid md:grid-cols-[200px_1fr] gap-8 group">
                <div className="absolute left-[-6px] md:left-[114px] top-6 w-4 h-4 rounded-full bg-[#8078FF] shadow-lg shadow-[#8078FF]/50 border-4 border-[#0a0a0a] animate-pulse z-10"></div>
                <div className="absolute left-[-10px] md:left-[110px] top-4 w-6 h-6 rounded-full bg-[#8078FF]/20 blur-md"></div>

                <div className="md:text-right pl-8 md:pl-0">
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/30 backdrop-blur-sm">
                    <span className="text-xs text-[#6C63FF] font-mono tracking-wider">2024 - PRESENT</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#8078FF]/5 via-transparent to-[#6C63FF]/5 border border-[#6C63FF]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#6C63FF]/50 transition-all hover:shadow-xl hover:shadow-[#6C63FF]/10 group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-slate-200 mb-2 flex items-center gap-2 flex-wrap">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#8078FF]">Founder</span>
                    <span className="text-slate-500">@</span>
                    <Link href="https://nighthouse.tech" target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] hover:text-[#8078FF] transition-colors underline decoration-[#6C63FF]/30">
                      Night House
                    </Link>
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Software studio building <span className="text-[#6C63FF] font-semibold">consumer apps</span> and <span className="text-[#8078FF] font-semibold">client products</span>. Focus on iOS development and full-stack web applications.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['iOS Development', 'Full-Stack', 'Product Design'].map((tag) => (
                      <span key={tag} className="text-xs text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full border border-[#6C63FF]/20 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Starz */}
              <div className="relative grid md:grid-cols-[200px_1fr] gap-8 group">
                <div className="absolute left-[-6px] md:left-[114px] top-6 w-4 h-4 rounded-full bg-[#6C63FF] shadow-lg shadow-[#6C63FF]/50 border-4 border-[#0a0a0a] z-10"></div>
                <div className="absolute left-[-10px] md:left-[110px] top-4 w-6 h-6 rounded-full bg-[#6C63FF]/20 blur-md"></div>

                <div className="md:text-right pl-8 md:pl-0">
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/30 backdrop-blur-sm">
                    <span className="text-xs text-[#6C63FF] font-mono tracking-wider">JUN 2024 - AUG 2024</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#6C63FF]/5 via-transparent to-[#8078FF]/5 border border-[#6C63FF]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#6C63FF]/50 transition-all hover:shadow-xl hover:shadow-[#6C63FF]/10 group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-slate-200 mb-2 flex items-center gap-2 flex-wrap">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#6C63FF]">Software Engineer Intern</span>
                    <span className="text-slate-500">@</span>
                    <Link href="https://www.starz.com/" target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] hover:text-[#8078FF] transition-colors underline decoration-[#6C63FF]/30">
                      Starz Entertainment
                    </Link>
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Built on <span className="text-[#6C63FF] font-semibold">OTT media pipeline</span>, developed microservices with <span className="text-[#8078FF] font-semibold">Redis caching</span>, managed <span className="text-[#F0F0F0] font-semibold">AWS infrastructure</span>, and implemented monitoring with Splunk.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Microservices', 'Redis', 'AWS', 'Splunk'].map((tag) => (
                      <span key={tag} className="text-xs text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full border border-[#6C63FF]/20 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FL Dept of Agriculture */}
              <div className="relative grid md:grid-cols-[200px_1fr] gap-8 group">
                <div className="absolute left-[-6px] md:left-[114px] top-6 w-4 h-4 rounded-full bg-[#8078FF] shadow-lg shadow-[#8078FF]/50 border-4 border-[#0a0a0a] z-10"></div>
                <div className="absolute left-[-10px] md:left-[110px] top-4 w-6 h-6 rounded-full bg-[#8078FF]/20 blur-md"></div>

                <div className="md:text-right pl-8 md:pl-0">
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/30 backdrop-blur-sm">
                    <span className="text-xs text-[#6C63FF] font-mono tracking-wider">JAN 2024 - AUG 2025</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#8078FF]/5 via-transparent to-[#6C63FF]/5 border border-[#6C63FF]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#6C63FF]/50 transition-all hover:shadow-xl hover:shadow-[#6C63FF]/10 group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-slate-200 mb-2 flex items-center gap-2 flex-wrap">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#8078FF]">CS Specialist</span>
                    <span className="text-slate-500">@</span>
                    <span className="text-[#6C63FF]">FL Dept of Agriculture</span>
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Developed solutions using <span className="text-[#6C63FF] font-semibold">Power Platform</span>, created dashboards with <span className="text-[#8078FF] font-semibold">Power BI</span>, and automated processes to improve operational efficiency.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Power Platform', 'Power BI', 'Process Automation'].map((tag) => (
                      <span key={tag} className="text-xs text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full border border-[#6C63FF]/20 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAMU */}
              <div className="relative grid md:grid-cols-[200px_1fr] gap-8 group">
                <div className="absolute left-[-6px] md:left-[114px] top-6 w-4 h-4 rounded-full bg-[#6C63FF] shadow-lg shadow-[#6C63FF]/50 border-4 border-[#0a0a0a] z-10"></div>
                <div className="absolute left-[-10px] md:left-[110px] top-4 w-6 h-6 rounded-full bg-[#6C63FF]/20 blur-md"></div>

                <div className="md:text-right pl-8 md:pl-0">
                  <div className="inline-block px-3 py-1 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/30 backdrop-blur-sm">
                    <span className="text-xs text-[#6C63FF] font-mono tracking-wider">MAY 2025</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#6C63FF]/5 via-transparent to-[#8078FF]/5 border border-[#6C63FF]/30 rounded-xl p-6 backdrop-blur-sm hover:border-[#6C63FF]/50 transition-all hover:shadow-xl hover:shadow-[#6C63FF]/10 group-hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-slate-200 mb-2 flex items-center gap-2 flex-wrap">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#6C63FF]">B.S. Computer Science, Cum Laude</span>
                    <span className="text-slate-500">@</span>
                    <Link href="https://www.famu.edu/" target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] hover:text-[#8078FF] transition-colors underline decoration-[#6C63FF]/30">
                      Florida A&M University
                    </Link>
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Graduated with a Bachelor of Science in Computer Science with honors. Focused on software engineering fundamentals and system design.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Computer Science', 'Software Engineering', 'Cum Laude'].map((tag) => (
                      <span key={tag} className="text-xs text-[#6C63FF] bg-[#6C63FF]/10 px-3 py-1 rounded-full border border-[#6C63FF]/20 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee Section */}
      <section id="skills" className="py-32 px-8 relative z-10 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#6C63FF] mb-2">
              <span className="text-[#6C63FF]/60 font-mono text-lg mr-3">[04]</span>
              TECH_STACK
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#6C63FF] via-[#8078FF] to-transparent rounded-full"></div>
          </div>

          {/* Marquee Container */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="flex gap-6 mx-3">
                    {['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'Swift', 'React', 'Node.js', 'SwiftUI', 'Firebase', 'AWS', 'Docker', 'PostgreSQL', 'Redis', 'Git'].map((tech) => (
                      <div
                        key={`${tech}-${idx}`}
                        className="group flex items-center gap-3 px-6 py-4 rounded-lg bg-gradient-to-r from-[#6C63FF]/10 to-[#8078FF]/10 border border-[#6C63FF]/30 hover:border-[#6C63FF]/60 transition-all backdrop-blur-sm"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#8078FF] shadow-lg shadow-[#6C63FF]/50 group-hover:animate-pulse"></div>
                        <span className="text-[#F0F0F0] text-lg font-semibold font-mono">{tech}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#6C63FF] mb-2">
              <span className="text-[#6C63FF]/60 font-mono text-lg mr-3">[05]</span>
              CONNECT
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-[#6C63FF] via-[#8078FF] to-transparent rounded-full mx-auto"></div>
          </div>

          {/* Contact Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#6C63FF] via-[#8078FF] to-[#6C63FF] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-gradient-to-br from-[#6C63FF]/5 via-transparent to-[#8078FF]/5 border-2 border-[#6C63FF]/30 rounded-3xl p-12 backdrop-blur-sm">
              <div className="relative z-10 text-center space-y-8">
                <h3 className="text-3xl md:text-5xl font-bold text-slate-200 leading-tight">
                  Let's Build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] via-[#8078FF] to-[#6C63FF] animate-gradient-x">
                    Something
                  </span>
                </h3>

                <p className="text-[#888] leading-relaxed max-w-2xl mx-auto text-lg">
                  Open to <span className="text-[#6C63FF] font-semibold">collaborations</span> and solving <span className="text-[#8078FF] font-semibold">interesting problems</span>.
                </p>

                <div className="pt-6">
                  <Link
                    href="mailto:Khamari11@gmail.com"
                    className="group/btn inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#6C63FF] via-[#8078FF] to-[#6C63FF] text-white rounded-xl font-bold text-lg overflow-hidden relative transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#6C63FF]/50"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      Khamari11@gmail.com
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8078FF] via-[#6C63FF] to-[#8078FF] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>

                <div className="pt-8 flex justify-center gap-6">
                  <Link
                    href="https://www.linkedin.com/in/khamarithompson/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social p-4 rounded-xl border-2 border-[#6C63FF]/30 text-slate-400 hover:text-[#6C63FF] hover:border-[#6C63FF]/50 transition-all hover:shadow-lg hover:shadow-[#6C63FF]/20 backdrop-blur-sm hover:-translate-y-1"
                  >
                    <Linkedin size={28} className="group-hover/social:scale-110 transition-transform" />
                  </Link>
                  <Link
                    href="https://github.com/KhamariThompson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social p-4 rounded-xl border-2 border-[#6C63FF]/30 text-slate-400 hover:text-[#6C63FF] hover:border-[#6C63FF]/50 transition-all hover:shadow-lg hover:shadow-[#6C63FF]/20 backdrop-blur-sm hover:-translate-y-1"
                  >
                    <Github size={28} className="group-hover/social:scale-110 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#6C63FF] rounded-tl-2xl opacity-50"></div>
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#8078FF] rounded-tr-2xl opacity-50"></div>
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#8078FF] rounded-bl-2xl opacity-50"></div>
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#6C63FF] rounded-br-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#6C63FF]/20 relative z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-[#6C63FF]" />
              <p className="text-slate-400 text-sm font-mono">
                <span className="text-[#6C63FF]">{"<"}</span>
                Built by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F0F0F0] to-[#6C63FF] font-semibold">
                  Khamari Thompson
                </span>
                <span className="text-[#6C63FF]">{" />"}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 text-slate-500 text-sm font-mono">
              <div className="w-2 h-2 rounded-full bg-[#6C63FF] animate-pulse shadow-lg shadow-[#6C63FF]/50"></div>
              <span>&copy; 2026</span>
              <span className="text-[#6C63FF]">|</span>
              <span>v3.0.electric</span>
            </div>
          </div>

          <div className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent opacity-30"></div>
        </div>
      </footer>
    </main>
  )
}
