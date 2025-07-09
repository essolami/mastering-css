"use client";

import React from "react";
import { ArrowLeft, Layout, Eye, Layers } from "lucide-react";
import Link from "next/link";

const ResponsiveDesignPage = () => {
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
                <Layout className="w-6 h-6 text-blue-400" />
                <h1 className="text-2xl font-bold text-white">
                  Responsive Web Design
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Interactive Concepts
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-4">
            What is Responsive Web Design?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Responsive Web Design (RWD) is an approach to web development that
            ensures your website looks and works well on devices of all
            sizes—from large desktop monitors to small mobile phones. It uses
            flexible grids, fluid images, and media queries to adapt the layout
            and content according to the screen size, orientation, and
            resolution.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            With responsive design, you build a single website that
            automatically adjusts its elements like navigation, text size,
            images, and layout without needing separate versions for each
            device. This leads to better usability, improved SEO, and a seamless
            user experience across all platforms.
          </p>
        </div>

        {/* Example Section */}
        <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Eye className="w-5 h-5 text-green-400" />
            Example Responsive Layout
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-blue-500 rounded-lg p-4 text-white text-center">
              Column 1
            </div>
            <div className="bg-green-500 rounded-lg p-4 text-white text-center">
              Column 2
            </div>
            <div className="bg-purple-500 rounded-lg p-4 text-white text-center">
              Column 3
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="mt-8 bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-yellow-400" />
            Key Points
          </h2>

          <ul className="list-disc list-inside text-slate-300 space-y-3">
            <li>
              Uses flexible grid systems and percentages instead of fixed
              widths.
            </li>
            <li>
              Employs media queries to apply different styles at various
              breakpoints (e.g., mobile, tablet, desktop).
            </li>
            <li>
              Ensures that images and other media scale properly within their
              containers.
            </li>
            <li>Improves accessibility and usability across all devices.</li>
            <li>
              Boosts SEO by providing a single, consistent version of your site
              for all users.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveDesignPage;
