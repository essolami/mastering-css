"use client";

import React, { useState } from "react";
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

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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

  const handleCardClick = (topicId: string) => {
    // In a real Next.js app, you would use Next.js router
    // For demo purposes, we'll just show an alert
    alert(`Navigate to /${topicId} page`);
    // In Next.js, you would use:
    // import { useRouter } from 'next/router';
    // const router = useRouter();
    // router.push(`/${topicId}`);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden min-h-[70vh] flex items-center justify-center">
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
          {cssTopics.map((topic, index) => (
            <div
              key={topic.id}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                hoveredCard === topic.id ? "z-10" : ""
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredCard(topic.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(topic.id)}
            >
              {/* Card */}
              <div
                className={`relative h-48 rounded-2xl ${topic.bgPattern} ${topic.color} p-6 shadow-xl transition-all duration-300 group-hover:shadow-2xl overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white/90 transform transition-transform duration-300 group-hover:scale-110">
                      {topic.icon}
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/60 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed flex-grow">
                    {topic.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Animation */}
              <style jsx>{`
                @keyframes float {
                  0%,
                  100% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-10px);
                  }
                }
                .group:hover {
                  animation: float 2s ease-in-out infinite;
                }
              `}</style>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center text-slate-400">
          <p>© 2025 Mastering CSS with Hamza Essolami.</p>
        </div>
      </footer>
    </div>
  );
}
