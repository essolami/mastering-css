"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Code,
  Eye,
  Play,
  Square,
  Layers,
  Grid,
  RotateCcw,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";

type Types = "block" | "inline" | "inline-block" | "flex" | "grid" | "none";

type DisplayType = {
  value: Types;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const DisplayPage = () => {
  const [activeDisplay, setActiveDisplay] = useState<Types>("block");
  const [copiedCode, setCopiedCode] = useState(false);

  const displayTypes: DisplayType[] = [
    {
      value: "block",
      name: "Block",
      description:
        "Elements take up the full width available and stack vertically",
      icon: <Square className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      value: "inline",
      name: "Inline",
      description:
        "Elements only take up as much width as needed and sit side by side",
      icon: <Layers className="w-5 h-5" />,
      color: "bg-green-500",
    },
    {
      value: "inline-block",
      name: "Inline-Block",
      description:
        "Combines inline and block - sits side by side but can have width/height",
      icon: <Grid className="w-5 h-5" />,
      color: "bg-purple-500",
    },
    {
      value: "flex",
      name: "Flex",
      description:
        "Creates a flexible container where items can be arranged and aligned",
      icon: <Layers className="w-5 h-5" />,
      color: "bg-orange-500",
    },
    {
      value: "grid",
      name: "Grid",
      description:
        "Creates a two-dimensional layout system for complex layouts",
      icon: <Grid className="w-5 h-5" />,
      color: "bg-red-500",
    },
    {
      value: "none",
      name: "None",
      description: "Element is completely removed from the document flow",
      icon: <Eye className="w-5 h-5" />,
      color: "bg-gray-500",
    },
  ];

  const codeExamples = {
    block: `/* Block elements stack vertically */
.block-element {
  display: block;
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  background: #3b82f6;
}`,
    inline: `/* Inline elements sit side by side */
.inline-element {
  display: inline;
  padding: 8px 15px;
  margin: 5px;
  background: #10b981;
}`,
    "inline-block": `/* Inline-block: best of both worlds */
.inline-block-element {
  display: inline-block;
  width: 120px;
  height: 60px;
  padding: 10px;
  margin: 5px;
  background: #8b5cf6;
}`,
    flex: `/* Flexible container */
.flex-container {
  display: flex;
  gap: 10px;
  padding: 20px;
}

.flex-item {
  flex: 1;
  padding: 15px;
  background: #f97316;
}`,
    grid: `/* Grid layout */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
}

.grid-item {
  padding: 15px;
  background: #ef4444;
}`,
    none: `/* Hidden from view */
.hidden-element {
  display: none;
}

/* Element is completely removed */`,
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeDisplay]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const renderExample = () => {
    switch (activeDisplay) {
      case "block":
        return (
          <div className="space-y-3">
            <div className="w-full h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-medium">
              Block Element 1
            </div>
            <div className="w-full h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-medium">
              Block Element 2
            </div>
            <div className="w-full h-16 bg-blue-500 rounded-lg flex items-center justify-center text-white font-medium">
              Block Element 3
            </div>
          </div>
        );

      case "inline":
        return (
          <div className="space-y-2">
            <div>
              <span className="inline bg-green-500 text-white px-4 py-2 rounded mr-2">
                Inline 1
              </span>
              <span className="inline bg-green-500 text-white px-4 py-2 rounded mr-2">
                Inline 2
              </span>
              <span className="inline bg-green-500 text-white px-4 py-2 rounded mr-2">
                Inline 3
              </span>
            </div>
            <div>
              <span className="inline bg-green-500 text-white px-4 py-2 rounded mr-2">
                Inline 4
              </span>
              <span className="inline bg-green-500 text-white px-4 py-2 rounded mr-2">
                Inline 5
              </span>
            </div>
          </div>
        );

      case "inline-block":
        return (
          <div className="space-y-2">
            <div>
              <div className="inline-block w-24 h-16 bg-purple-500 rounded-lg mr-2  items-center justify-center text-white text-sm">
                Box 1
              </div>
              <div className="inline-block w-24 h-16 bg-purple-500 rounded-lg mr-2 items-center justify-center text-white text-sm">
                Box 2
              </div>
              <div className="inline-block w-24 h-16 bg-purple-500 rounded-lg mr-2 items-center justify-center text-white text-sm">
                Box 3
              </div>
            </div>
            <div>
              <div className="inline-block w-32 h-20 bg-purple-500 rounded-lg mr-2 items-center justify-center text-white text-sm">
                Different Size
              </div>
              <div className="inline-block w-20 h-12 bg-purple-500 rounded-lg mr-2 items-center justify-center text-white text-sm">
                Small
              </div>
            </div>
          </div>
        );

      case "flex":
        return (
          <div className="flex gap-3 p-4 bg-slate-800 rounded-lg">
            <div className="flex-1 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-medium">
              Flex Item 1
            </div>
            <div className="flex-1 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-medium">
              Flex Item 2
            </div>
            <div className="flex-1 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-white font-medium">
              Flex Item 3
            </div>
          </div>
        );

      case "grid":
        return (
          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-800 rounded-lg">
            <div className="h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-medium">
              Grid 1
            </div>
            <div className="h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-medium">
              Grid 2
            </div>
            <div className="h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-medium">
              Grid 3
            </div>
            <div className="h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-medium">
              Grid 4
            </div>
            <div className="h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-medium">
              Grid 5
            </div>
            <div className="h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-medium">
              Grid 6
            </div>
          </div>
        );

      case "none":
        return (
          <div className="space-y-3">
            <div className="w-full h-16 bg-gray-500 rounded-lg flex items-center justify-center text-white font-medium">
              Visible Element 1
            </div>
            <div className="w-full h-16 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 font-medium opacity-50 relative">
              <span className="absolute inset-0 flex items-center justify-center">
                Hidden Element (display: none)
              </span>
              <div className="absolute inset-0 bg-red-500/20 rounded-lg"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 font-bold">
                HIDDEN
              </div>
            </div>
            <div className="w-full h-16 bg-gray-500 rounded-lg flex items-center justify-center text-white font-medium">
              Visible Element 2
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <Link href="/">
                  <ArrowLeft className="w-5 h-5 text-slate-400" />
                </Link>
              </button>
              <div className="flex items-center gap-2">
                <Square className="w-6 h-6 text-blue-400" />
                <h1 className="text-2xl font-bold text-white">
                  CSS Display Property
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Interactive Demo
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-4">
            What is Display?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            The <code>display</code> property in CSS defines how an element
            behaves in the document flow. It controls whether an element is
            treated as a block, inline, flex container, grid, or hidden
            altogether. Understanding the <code>display</code> property is
            essential for constructing responsive and flexible web layouts.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Display Types */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Display Types
              </h2>

              <div className="space-y-3">
                {displayTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setActiveDisplay(type.value)}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 text-left group ${
                      activeDisplay === type.value
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-slate-700 hover:border-slate-600 hover:bg-slate-700/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-8 h-8 rounded-lg ${type.color} flex items-center justify-center text-white`}
                      >
                        {type.icon}
                      </div>
                      <span className="font-semibold text-white">
                        {type.name}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Examples and Code */}
          <div className="lg:col-span-2 space-y-6">
            {/* Visual Example */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-green-400" />
                  Visual Example:{" "}
                  {displayTypes.find((t) => t.value === activeDisplay)?.name}
                </h2>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <Play className="w-4 h-4 text-green-400" />
                  Live Preview
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-6 border border-slate-700/30">
                {renderExample()}
              </div>
            </div>

            {/* Code Example */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-purple-400" />
                  CSS Code
                </h2>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-400">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="bg-slate-900 rounded-xl p-6 border border-slate-700/30">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-slate-400 text-sm ml-2">
                    styles.css
                  </span>
                </div>
                <pre className="text-slate-300 font-mono text-sm overflow-x-auto">
                  <code>{codeExamples[activeDisplay]}</code>
                </pre>
              </div>
            </div>

            {/* Key Points */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-yellow-400" />
                Key Points
              </h2>

              <div className="space-y-4">
                {activeDisplay === "block" && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Takes up the full width of its container
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Always starts on a new line
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Can have width, height, margin, and padding
                      </p>
                    </div>
                  </div>
                )}

                {activeDisplay === "inline" && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Only takes up as much width as needed
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Sits on the same line as other inline elements
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Cannot have width or height set
                      </p>
                    </div>
                  </div>
                )}

                {activeDisplay === "inline-block" && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Combines inline and block behaviors
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Can sit side by side with other elements
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Can have width, height, and all box model properties
                      </p>
                    </div>
                  </div>
                )}

                {activeDisplay === "flex" && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Creates a flexible container for child elements
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Items can grow, shrink, and align flexibly
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Great for one-dimensional layouts
                      </p>
                    </div>
                  </div>
                )}

                {activeDisplay === "grid" && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Creates a two-dimensional layout system
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Perfect for complex layouts with rows and columns
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        More powerful than flexbox for 2D layouts
                      </p>
                    </div>
                  </div>
                )}

                {activeDisplay === "none" && (
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Completely removes the element from the page
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Element takes up no space in the layout
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                      <p className="text-slate-300">
                        Different from visibility: hidden (which keeps space)
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
