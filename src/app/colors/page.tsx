"use client";

import React from "react";
import { ArrowLeft, Palette, Layers, Eye } from "lucide-react";
import Link from "next/link";

const ColorDemoPage = () => {
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
                <Palette className="w-6 h-6 text-pink-400" />
                <h1 className="text-2xl font-bold text-white">CSS Colors</h1>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Visual Examples
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-4">
            What are CSS Colors?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            CSS Colors define the appearance of elements on a web page. You can
            specify colors using named colors (e.g., "red"), hexadecimal codes
            (e.g., "#ff0000"), RGB, HSL, and even CSS color functions like{" "}
            <code>rgba()</code> for transparency. Colors enhance the design and
            user experience, guiding attention and creating mood.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            CSS supports gradients, color variables, and wide-gamut color spaces
            for modern web designs. Combining colors effectively improves
            readability and visual hierarchy.
          </p>
        </div>

        {/* Example Section */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50 mb-8">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Eye className="w-5 h-5 text-green-400" />
            Example Colors
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="bg-red-500 rounded-lg p-4 text-white text-center">
              Red
            </div>
            <div className="bg-green-500 rounded-lg p-4 text-white text-center">
              Green
            </div>
            <div className="bg-blue-500 rounded-lg p-4 text-white text-center">
              Blue
            </div>
            <div className="bg-yellow-400 rounded-lg p-4 text-slate-900 text-center">
              Yellow
            </div>
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
              Use named colors, hex, RGB, or HSL formats for defining colors.
            </li>
            <li>
              <code>rgba()</code> allows you to define transparency.
            </li>
            <li>CSS gradients can create color transitions.</li>
            <li>
              CSS Variables (<code>--color-name</code>) simplify color theming.
            </li>
            <li>
              Modern CSS supports wide-gamut color spaces like{" "}
              <code>color(display-p3 ...)</code>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ColorDemoPage;
