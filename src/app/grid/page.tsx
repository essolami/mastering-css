"use client";

import React, { useState } from "react";
import { ArrowLeft, Layers, LayoutGrid, Copy, Check } from "lucide-react";
import Link from "next/link";

const GridPage = () => {
  const [copiedCode, setCopiedCode] = useState(false);

  const codeExample = `.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const renderExample = () => (
    <div className="relative h-40 bg-slate-900 rounded-xl p-4">
      <div className="grid grid-cols-3 gap-4 h-full bg-slate-800 p-4 rounded">
        <div className="bg-blue-500 text-white p-4 rounded">Item 1</div>
        <div className="bg-green-500 text-white p-4 rounded">Item 2</div>
        <div className="bg-purple-500 text-white p-4 rounded">Item 3</div>
        <div className="bg-pink-500 text-white p-4 rounded">Item 4</div>
        <div className="bg-yellow-500 text-white p-4 rounded">Item 5</div>
        <div className="bg-indigo-500 text-white p-4 rounded">Item 6</div>
      </div>
    </div>
  );

  const keyPoints = [
    "Two-dimensional layout system",
    "Define rows and columns",
    "Precise control over spacing and alignment",
    "Powerful for building responsive layouts",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
                <LayoutGrid className="w-6 h-6 text-blue-400" />
                <h1 className="text-2xl font-bold text-white">
                  CSS Grid Property
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
            What is CSS Grid?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            CSS Grid is a two-dimensional layout system in CSS that allows you
            to build complex and responsive grid-based layouts. Unlike Flexbox,
            which works in one dimension at a time, Grid lets you define both
            rows and columns, giving you precise control over how elements are
            placed in a container.
          </p>
        </div>

        <div className="mb-8 bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-bold text-white mb-4">Key Points</h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            {keyPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-4">Example</h3>
          {renderExample()}
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-bold text-white mb-4">CSS Code</h3>
          <div className="relative bg-slate-800 rounded-xl p-4 border border-slate-700/50">
            <pre className="text-slate-300 text-sm overflow-x-auto">
              {codeExample}
            </pre>
            <button
              onClick={copyCode}
              className="absolute top-4 right-4 p-2 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-slate-300"
            >
              {copiedCode ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridPage;
