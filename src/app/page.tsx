import React from "react";
import {
  ChevronRight,
  Code,
  Layout,
  Move,
  Box,
  Layers,
  Grid,
  Palette,
  Zap,
  RotateCcw,
  Maximize,
  Eye,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const cssTopics = [
    {
      id: "display",
      title: "Display",
      description: "Block, inline, flex, grid properties",
      icon: <Layout className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
      bgPattern: "bg-gradient-to-br",
    },
    {
      id: "position",
      title: "Position",
      description: "Static, relative, absolute, fixed",
      icon: <Move className="w-8 h-8" />,
      color: "from-purple-500 to-purple-700",
      bgPattern: "bg-gradient-to-br",
    },
    {
      id: "overflow",
      title: "Overflow",
      description: "Hidden, scroll, auto, visible",
      icon: <Box className="w-8 h-8" />,
      color: "from-green-500 to-green-700",
      bgPattern: "bg-gradient-to-br",
    },
    {
      id: "flexbox",
      title: "Flexbox",
      description: "Flexible layout system",
      icon: <Layers className="w-8 h-8" />,
      color: "from-red-500 to-red-700",
      bgPattern: "bg-gradient-to-br",
    },
    {
      id: "grid",
      title: "Grid",
      description: "Two-dimensional layout",
      icon: <Grid className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-700",
      bgPattern: "bg-gradient-to-br",
    },
    {
      id: "colors",
      title: "Colors",
      description: "RGB, HSL, hex, gradients",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-pink-700",
      bgPattern: "bg-gradient-to-br",
    },
    {
      id: "animations",
      title: "Animations",
      description: "Keyframes, transitions, transforms",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-700",
      bgPattern: "bg-gradient-to-br",
    },
    {
      id: "transforms",
      title: "Transforms",
      description: "Scale, rotate, translate, skew",
      icon: <RotateCcw className="w-8 h-8" />,
      color: "from-teal-500 to-teal-700",
      bgPattern: "bg-gradient-to-br",
    },
    {
      id: "responsive",
      title: "Responsive",
      description: "Media queries, breakpoints",
      icon: <Maximize className="w-8 h-8" />,
      color: "from-orange-500 to-orange-700",
      bgPattern: "bg-gradient-to-br",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden min-h-[70vh] flex items-center justify-center pb-5">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20"></div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute -bottom-40 left-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Particles */}
        <div className="absolute inset-0">
          {[
            { left: "10%", top: "20%", delay: "0s", duration: "2s" },
            { left: "20%", top: "60%", delay: "0.5s", duration: "3s" },
            { left: "30%", top: "80%", delay: "1s", duration: "2.5s" },
            { left: "40%", top: "30%", delay: "1.5s", duration: "3.5s" },
            { left: "50%", top: "70%", delay: "2s", duration: "2.2s" },
            { left: "60%", top: "40%", delay: "2.5s", duration: "3.2s" },
            { left: "70%", top: "90%", delay: "3s", duration: "2.8s" },
            { left: "80%", top: "50%", delay: "0.3s", duration: "3.8s" },
            { left: "90%", top: "10%", delay: "1.2s", duration: "2.3s" },
            { left: "15%", top: "45%", delay: "1.8s", duration: "3.1s" },
            { left: "25%", top: "85%", delay: "2.2s", duration: "2.6s" },
            { left: "35%", top: "15%", delay: "0.8s", duration: "3.4s" },
            { left: "45%", top: "65%", delay: "1.3s", duration: "2.9s" },
            { left: "55%", top: "35%", delay: "2.8s", duration: "3.3s" },
            { left: "65%", top: "75%", delay: "0.2s", duration: "2.4s" },
            { left: "75%", top: "25%", delay: "1.7s", duration: "3.7s" },
            { left: "85%", top: "55%", delay: "2.3s", duration: "2.7s" },
            { left: "95%", top: "95%", delay: "0.7s", duration: "3.9s" },
            { left: "5%", top: "75%", delay: "1.4s", duration: "2.1s" },
            { left: "12%", top: "35%", delay: "2.6s", duration: "3.6s" },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            ></div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Icon with Glow */}
            <div className="inline-flex items-center justify-center mb-8 relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-150 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl">
                <Code className="w-12 h-12 text-white" />
              </div>
            </div>

            {/* Title with Animation */}
            <div className="mb-8 relative">
              <h1 className="text-7xl md:text-8xl font-black mb-4 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Mastering
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  CSS
                </span>
              </h1>

              {/* Glowing underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm opacity-80"></div>
            </div>

            {/* Subtitle with Typewriter Effect */}
            <p className="text-2xl md:text-3xl text-slate-200 mb-8 leading-relaxed font-light">
              Explore the{" "}
              <span className="text-blue-400 font-medium">
                fundamental concepts
              </span>{" "}
              of CSS
              <br />
              through{" "}
              <span className="text-purple-400 font-medium">
                interactive lessons
              </span>{" "}
              and examples
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <a href="#cssTopics">Start Learning</a>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative px-8 py-4 border-2 border-blue-400/50 rounded-full font-bold text-blue-400 text-lg transition-all duration-300 hover:scale-105 hover:bg-blue-400/10 hover:border-blue-400">
                <span className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />

                  <a href="#cssTopics">View Examples</a>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-slate-700/50">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">9+</div>
                <div className="text-slate-400">CSS Topics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  100+
                </div>
                <div className="text-slate-400">Examples</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">∞</div>
                <div className="text-slate-400">Possibilities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll to explore</span>
            <ChevronRight className="w-5 h-5 rotate-90" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12" id="cssTopics">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {cssTopics.map((topic) => (
            <div key={topic.id} className={`relative group cursor-pointer `}>
              {/* Card */}
              <div
                className={`relative h-48 rounded-2xl ${topic.bgPattern} ${topic.color} p-6 shadow-xl  overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full"></div>
                </div>

                {/* Content */}
                <Link href={`/${topic.id}`}>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-white/90 ">{topic.icon}</div>
                      <ChevronRight className="w-5 h-5 text-white/60  " />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 ">
                      {topic.title}
                    </h3>

                    <p className="text-white/80 text-sm leading-relaxed flex-grow">
                      {topic.description}
                    </p>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </Link>

                {/* Animated Border */}
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Product Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-700/50">
                {/* Product Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-bold text-white/20 select-none">
                      CSS
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-3">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    CSS Mastery Course
                  </h3>
                  <p className="text-slate-400">Complete guide to modern CSS</p>
                  <div className="text-3xl font-bold text-blue-400">Free</div>

                  {/* Color Options */}
                  <div className="flex gap-3 pt-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500 ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-800"></div>
                    <div className="w-8 h-8 rounded-full bg-purple-500 hover:ring-2 hover:ring-purple-400 hover:ring-offset-2 hover:ring-offset-slate-800 transition-all cursor-pointer"></div>
                    <div className="w-8 h-8 rounded-full bg-green-500 hover:ring-2 hover:ring-green-400 hover:ring-offset-2 hover:ring-offset-slate-800 transition-all cursor-pointer"></div>
                  </div>

                  {/* Difficulty Level */}
                  <div className="pt-4">
                    <p className="text-sm text-slate-400 mb-2">DIFFICULTY</p>
                    <div className="flex gap-2 overflow-x-scroll">
                      {["Beginner", "Intermediate", "Advanced", "Expert"].map(
                        (level, index) => (
                          <button
                            key={level}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                              index === 0
                                ? "bg-blue-500 text-white"
                                : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                            }`}
                          >
                            {level}
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8 pt-4">
              <div>
                <p className="text-blue-400 text-sm font-semibold mb-2 tracking-wide">
                  STYLE VARIANTS
                </p>
                <h2 className="text-5xl font-bold text-white mb-6">
                  50+ CSS concepts out of the box.
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  The concepts are pre-organized and optimized, so you can
                  master whatever you want right away.
                </p>
              </div>

              {/* CSS Categories */}
              <div className="grid grid-cols-5 gap-6">
                {[
                  { icon: "🎨", name: "Typography", color: "text-blue-400" },
                  { icon: "📐", name: "Sizing", color: "text-green-400" },
                  { icon: "📏", name: "Spacing", color: "text-purple-400" },
                  { icon: "🔲", name: "Border", color: "text-yellow-400" },
                  { icon: "🌈", name: "Background", color: "text-pink-400" },
                ].map((category, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="w-16 h-16 mx-auto mb-3 bg-slate-800 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-slate-700 transition-all duration-300 group-hover:scale-110">
                      {category.icon}
                    </div>
                    <p
                      className={`text-sm font-medium ${category.color} group-hover:text-white transition-colors`}
                    >
                      {category.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Code Preview */}
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700/50 overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-400 text-sm ml-2">
                    styles.css
                  </span>
                </div>
                <div className="font-mono text-sm leading-relaxed relative">
                  <div className="text-slate-500">1</div>
                  <div className="text-slate-500">2</div>
                  <div className="text-slate-500">3</div>
                  <div className="text-slate-500">4</div>
                  <div className="text-slate-500">5</div>
                  <div className="text-slate-500">6</div>
                  <div className="text-slate-500">7</div>
                  <div className="text-slate-500">8</div>

                  <div className="absolute top-0 left-5 right-6 space-y-1">
                    <div className="text-slate-300">
                      <span className="text-blue-400">.hero-section</span>{" "}
                      <span className="text-slate-500">{"{"}</span>
                    </div>
                    <div className="text-slate-300 ml-4">
                      <span className="text-green-400">display</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-orange-400">flex</span>
                      <span className="text-slate-500">;</span>
                    </div>
                    <div className="text-slate-300 ml-4">
                      <span className="text-green-400">justify-content</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-orange-400">center</span>
                      <span className="text-slate-500">;</span>
                    </div>
                    <div className="text-slate-300 ml-4">
                      <span className="text-green-400">align-items</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-orange-400">center</span>
                      <span className="text-slate-500">;</span>
                    </div>
                    <div className="text-slate-300 ml-4">
                      <span className="text-green-400">min-height</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-orange-400">100vh</span>
                      <span className="text-slate-500">;</span>
                    </div>
                    <div className="text-slate-300 ml-4">
                      <span className="text-green-400">background</span>
                      <span className="text-slate-500">:</span>{" "}
                      <span className="text-orange-400">
                        linear-gradient(45deg, #667eea, #764ba2)
                      </span>
                      <span className="text-slate-500">;</span>
                    </div>
                    <div className="text-slate-300">
                      <span className="text-slate-500">{"}"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-slate-800 to-slate-900 border-t border-slate-700/50">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-40 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Mastering CSS
                </h3>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Master the art of CSS with comprehensive tutorials, interactive
                examples, and modern techniques.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: "🐦", label: "Twitter", color: "hover:bg-blue-500" },
                  { icon: "💼", label: "LinkedIn", color: "hover:bg-blue-600" },
                  { icon: "🐙", label: "GitHub", color: "hover:bg-gray-600" },
                  { icon: "📺", label: "YouTube", color: "hover:bg-red-500" },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-lg transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  "Getting Started",
                  "CSS Basics",
                  "Advanced Topics",
                  "Best Practices",
                  "Code Examples",
                  "Cheat Sheet",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CSS Topics */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                CSS Topics
              </h4>
              <ul className="space-y-3">
                {[
                  "Flexbox",
                  "Grid Layout",
                  "Animations",
                  "Responsive Design",
                  "Typography",
                  "Color Theory",
                ].map((topic, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <div className="w-2 h-2 bg-slate-600 rounded-full group-hover:bg-purple-400 transition-colors"></div>
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                Stay Updated
              </h4>
              <p className="text-slate-400 mb-4">
                Get the latest CSS tips and tutorials delivered to your inbox.
              </p>

              <div className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25">
                  Subscribe
                </button>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">10K+</div>
                  <div className="text-xs text-slate-500">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-xs text-slate-500">Lessons</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700/50 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-400 text-sm">
                © 2024 Mastering CSS. All rights reserved. Built with 💙 for
                developers.
              </div>

              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
