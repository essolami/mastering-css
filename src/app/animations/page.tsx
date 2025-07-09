"use client";

import React from "react";
import { ArrowLeft, Zap, Code, Layers } from "lucide-react";
import Link from "next/link";

const AnimationDemoPage = () => {
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
                <Zap className="w-6 h-6 text-blue-400" />
                <h1 className="text-2xl font-bold text-white">CSS Animation</h1>
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
            What is CSS Animation?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            CSS Animations allow you to transition elements from one style
            configuration to another over a defined duration. Animations help
            create dynamic and engaging user interfaces by animating properties
            like color, position, opacity, and more.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            You can control animation timing, delays, iteration counts, and
            keyframes to fine-tune how your elements animate in response to user
            interaction or page load.
          </p>
        </div>

        {/* Example Section */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50 mb-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-400" />
            Example Animation
          </h2>

          <div className="flex justify-center items-center">
            <div className="w-24 h-24 bg-blue-500 rounded-lg animate-bounce text-white flex items-center justify-center font-bold">
              Bounce
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50 mb-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-400" />
            CSS Code
          </h2>

          <div className="bg-slate-900 rounded-xl p-6 border border-slate-700/30">
            <pre className="text-slate-300 font-mono text-sm overflow-x-auto">
              {`/* Simple bounce animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25%);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}`}{" "}
            </pre>
          </div>
        </div>

        {/* Key Points */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-yellow-400" />
            Key Points
          </h2>

          <ul className="list-disc list-inside text-slate-300 space-y-3">
            <li>
              Use <code>@keyframes</code> to define the animation steps.
            </li>
            <li>
              Apply the animation using the <code>animation</code> shorthand
              property.
            </li>
            <li>
              You can adjust duration, delay, easing functions, and iteration
              count.
            </li>
            <li>
              Animations can run infinitely or for a specified number of times.
            </li>
            <li>
              Combine with other CSS properties like <code>transform</code> and{" "}
              <code>opacity</code> for more complex effects.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnimationDemoPage;
