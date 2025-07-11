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
  Sparkles,
  MessageCircle,
  Brain,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const brainstormingQuestion = [
    {
      category: "Architecture",
      question:
        "How do you approach scalable CSS architecture in large applications?",
      answer: `
        <p>
          I start by creating simple and clear class names using methods like <strong>BEM</strong> or <strong>OOCSS</strong>. This makes the code easier to understand and maintain.<br/>
          Then, I build styles for each component separately, like buttons, cards, or headers, so their styles don’t affect other parts of the app.<br/>
          I use <strong>CSS Modules</strong> or <strong>CSS-in-JS</strong> to keep styles limited to the right components. I also create <strong>design tokens</strong> for things like colors, fonts, and spacing to keep everything consistent.<br/>
          To help the team, I make a <strong>style guide</strong> and follow <strong>Atomic Design</strong> to break the UI into small reusable parts. <br/>
          Finally, I clean up the CSS regularly and help other developers understand and follow the same approach.
        </p>
      `,
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "Performance",
      question:
        "What's your strategy for optimizing CSS performance in production?",
      answer: `
        <p>
          I make sure to load only the CSS we need by using <strong>critical CSS extraction</strong> and removing unused styles with purging tools.<br/>
          I optimize how styles load so they don’t block the page from showing, and I use browser caching to make the site load faster on repeat visits.<br/>
          I also keep my selectors simple to improve performance and use <strong>lazy loading</strong> for styles that are not needed right away.<br/>
          These steps help the website load faster and work smoothly for users.
        </p>
      `,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Problem Solving",
      question: "How do you handle CSS conflicts in a multi-team environment?",
      answer: `
        <p>
          I avoid CSS conflicts by using <strong>namespacing</strong> and keeping styles isolated with tools like <strong>CSS-in-JS</strong> or <strong>Shadow DOM</strong>.<br/>
          I make sure each team knows which parts of the CSS they own and use tools like <strong>PostCSS</strong> to catch possible problems early.<br/>
          Regular <strong>code reviews</strong> and <strong>style audits</strong> also help prevent conflicts and keep the code clean.
        </p>
      `,
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Modern CSS",
      question: "When would you choose CSS Grid over Flexbox, and vice versa?",
      answer: `
        <p>
          I use <strong>CSS Grid</strong> when I need to arrange items in both rows and columns for more complex layouts.<br/>
          I prefer <strong>Flexbox</strong> when I’m aligning items in a single row or column, like in buttons, navbars, or small card layouts.<br/>
          In most real-world projects, I combine both Grid and Flexbox to build flexible and easy-to-maintain layouts.
        </p>
      `,
      color: "from-orange-500 to-red-500",
    },
    {
      category: "Strategy",
      question: "How do you evaluate and adopt new CSS features in production?",
      answer: `
        <p>
          I first check browser support using <strong>caniuse.com</strong> to make sure the feature works on our users' browsers.<br/>
          I use <strong>progressive enhancement</strong> to add new features in a way that doesn’t break the experience for older browsers.<br/>
          I test new features across different browsers and sometimes use <strong>PostCSS plugins</strong> to add fallbacks.<br/>
          I also consider how easy it is for the team to learn and maintain these new features over time.
        </p>
      `,
      color: "from-indigo-500 to-blue-500",
    },
    {
      category: "Accessibility",
      question: "How do you ensure your CSS is accessible to all users?",
      answer: `
        <p>
          I make sure to use <strong>semantic HTML</strong> first and let CSS style the page without breaking accessibility.<br/>
          I avoid using color alone to show important information and make sure there is enough contrast between text and background.<br/>
          I also test the site with <strong>screen readers</strong> and keyboard navigation, and I respect user settings like <strong>prefers-reduced-motion</strong> for people sensitive to animations.
        </p>
      `,
      color: "from-lime-500 to-green-500",
    },
    {
      category: "Maintainability",
      question:
        "What practices help you keep CSS maintainable in the long run?",
      answer: `
        <p>
          I break styles into <strong>small, reusable components</strong> and use clear naming so it's easy to know what each style does.<br/>
          I document design choices and keep removing unused styles to keep the codebase clean.<br/>
          I also add automated tools like <strong>Stylelint</strong> to catch mistakes early and do regular <strong>code reviews</strong> to keep the CSS clear and easy to update.
        </p>
      `,
      color: "from-yellow-500 to-amber-500",
    },
    {
      category: "Tools",
      question: "What tools do you use to streamline your CSS workflow?",
      answer: `
        <p>
          I use tools like <strong>PostCSS</strong> and <strong>Autoprefixer</strong> to make the code work across different browsers.<br/>
          I work with <strong>Tailwind CSS</strong> for fast styling or <strong>Sass</strong> when I need more structure.<br/>
          I also use <strong>Vite</strong> or <strong>Webpack</strong> to bundle and optimize the CSS and <strong>Stylelint</strong> to keep the code clean.
        </p>
      `,
      color: "from-fuchsia-500 to-rose-500",
    },
    {
      category: "Collaboration",
      question: "How do you manage consistent styles across multiple teams?",
      answer: `
        <p>
          I create a <strong>shared design system</strong> and a <strong>component library</strong> so all teams use the same styles and components.<br/>
          I document <strong>design tokens</strong> (like colors, spacing, and fonts) and write clear contribution guidelines.<br/>
          Regular team meetings and automatic style checks during the CI/CD process help keep everything consistent and aligned.
        </p>
      `,
      color: "from-cyan-500 to-sky-500",
    },
    {
      category: "Responsive Design",
      question: "What's your approach to building responsive layouts?",
      answer: `
        <p>
          I follow a <strong>mobile-first</strong> approach, starting with small screens and scaling up for larger ones.<br/>
          I use flexible units like <strong>%</strong>, <strong>rem</strong>, and <strong>vw</strong> to make sure layouts adapt to different screen sizes.<br/>
          I apply <strong>media queries</strong> and use <strong>CSS Grid</strong> or <strong>Flexbox</strong> to adjust the layout. I always test on real devices to make sure everything looks and works as expected.
        </p>
      `,
      color: "from-teal-500 to-green-400",
    },
  ];

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
      <header className="relative overflow-hidden min-h-[70vh] flex items-center justify-center pb-10 bg-gradient-to-br from-slate-900 via-blue-950/30 to-purple-950/30">
        {/* Blurred Glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-32 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2.5s" }}
          ></div>
        </div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Header Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Animated Icon */}
          {/* <div className="inline-flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-150 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-5 rounded-2xl">
              <Code className="w-14 h-14 text-white" />
            </div>
          </div> */}

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Master CSS
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              with Confidence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Build an{" "}
            <span className="text-blue-400 font-semibold">
              intuitive understanding
            </span>{" "}
            of CSS properties with
            <br />
            <span className="text-purple-400 font-semibold">
              clear explanations
            </span>{" "}
            and{" "}
            <span className="text-pink-400 font-semibold">
              interactive examples
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#cssTopics"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Start Learning
              </span>
            </a>

            <a
              href="#cssTopics"
              className="group relative px-8 py-4 border-2 border-blue-400/50 rounded-full font-bold text-blue-400 text-lg transition-all duration-300 hover:scale-105 hover:bg-blue-400/10 hover:border-blue-400"
            >
              <span className="flex items-center gap-2">
                <ChevronRight className="w-5 h-5" /> View Examples
              </span>
            </a>
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
                      <ChevronRight className="w-5 h-5 text-white/60 duration-300 " />
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

      {/* Senior Developer Q&A Section */}
      <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">
                Senior Developer Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Beyond the Basics
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real-world questions and insights from senior developers about CSS
              architecture, performance optimization, and strategic
              decision-making.
            </p>
          </div>

          {/* Q&A Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            {brainstormingQuestion.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="p-6">
                  {/* Question Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`bg-gradient-to-r ${item.color} p-2 rounded-lg flex-shrink-0`}
                    >
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`text-sm font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        >
                          {item.category}
                        </span>
                        <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                        <span className="text-slate-400 text-sm">
                          Senior Level
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white leading-tight">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  {/* Answer */}
                  <div className="ml-14">
                    <div className="bg-slate-900/50 rounded-xl p-4 border-l-4 border-gradient-to-b from-slate-600 to-slate-700">
                      <div
                        className="text-slate-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Level Up Your CSS Skills?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Join thousands of developers who,ve mastered advanced CSS
                concepts and best practices.
              </p>
              <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25">
                Start Advanced Course
              </button>
            </div>
          </div>
        </div>
      </section>

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
