"use client";

import React, { JSX, useState } from "react";
import {
  ArrowLeft,
  Eye,
  Code,
  Layers,
  Maximize2,
  Minimize2,
  ZoomOut,
  Crop,
  Copy,
  Check,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

const OverflowPage = () => {
  type OverflowType = "visible" | "hidden" | "scroll" | "auto" | "clip";

  const [activeOverflow, setActiveOverflow] = useState<OverflowType>("visible");
  const [copiedCode, setCopiedCode] = useState(false);

  const overflowTypes: {
    value: OverflowType;
    name: string;
    description: string;
    icon: JSX.Element;
    color: string;
  }[] = [
    {
      value: "visible",
      name: "Visible",
      description:
        "Default behavior. Overflowing content is visible outside the container.",
      icon: <Maximize2 className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      value: "hidden",
      name: "Hidden",
      description: "Overflowing content is clipped and hidden from view.",
      icon: <Minimize2 className="w-5 h-5" />,
      color: "bg-green-500",
    },
    {
      value: "scroll",
      name: "Scroll",
      description: "Always shows scrollbars to access overflowing content.",
      icon: <ZoomOut className="w-5 h-5" />,
      color: "bg-purple-500",
    },
    {
      value: "auto",
      name: "Auto",
      description: "Scrollbars appear only when the content overflows.",
      icon: <Crop className="w-5 h-5" />,
      color: "bg-red-500",
    },
    {
      value: "clip",
      name: "Clip",
      description: "Similar to hidden but does not support scrolling.",
      icon: <Layers className="w-5 h-5" />,
      color: "bg-yellow-500",
    },
  ];

  const codeExamples: Record<OverflowType, string> = {
    visible: `.visible-container {
  overflow: visible;
  background: #3b82f6;
}`,
    hidden: `.hidden-container {
  overflow: hidden;
  background: #10b981;
}`,
    scroll: `.scroll-container {
  overflow: scroll;
  background: #8b5cf6;
}`,
    auto: `.auto-container {
  overflow: auto;
  background: #ef4444;
}`,
    clip: `.clip-container {
  overflow: clip;
  background: #facc15;
}`,
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeOverflow]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const renderExample = () => {
    return (
      <div className="relative h-40 overflow-hidden bg-slate-900 rounded-xl p-4">
        <div
          className={`h-32 w-96 bg-blue-400 text-white p-4 rounded ${activeOverflow}`}
          style={{ overflow: activeOverflow }}
        >
          This is some long content that will overflow the container depending
          on the overflow property applied. Scroll or hide me!
        </div>
      </div>
    );
  };

  const keyPoints: Record<OverflowType, string[]> = {
    visible: [
      "Default overflow behavior",
      "Overflowing content is visible outside the container",
      "No clipping or scrollbars",
    ],
    hidden: [
      "Overflowing content is hidden",
      "No scrollbars appear",
      "Content is clipped at the container edge",
    ],
    scroll: [
      "Forces scrollbars to appear",
      "Lets users scroll to see hidden content",
      "Useful when you always want scrolling enabled",
    ],
    auto: [
      "Adds scrollbars only if necessary",
      "No scrollbars if content fits in the container",
      "Most commonly used setting",
    ],
    clip: [
      "Similar to hidden",
      "Clips content without adding scrollbars",
      "Cannot scroll to access clipped content",
    ],
  };

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
                <Layers className="w-6 h-6 text-blue-400" />
                <h1 className="text-2xl font-bold text-white">
                  CSS Overflow Property
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
            What is Overflow?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            The <code>overflow</code> property in CSS controls what happens to
            content that exceeds the boundaries of its container. You can choose
            whether the overflowing content is visible, hidden, clipped, or
            scrollable. This property is essential for managing layouts and
            preventing unwanted content spillover.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Overflow Types
              </h2>

              <div className="space-y-3">
                {overflowTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setActiveOverflow(type.value)}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 text-left group ${
                      activeOverflow === type.value
                        ? "border-green-500 bg-green-500/10"
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

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-green-400" />
                  Visual Example:{" "}
                  {overflowTypes.find((t) => t.value === activeOverflow)?.name}
                </h2>
              </div>
              {renderExample()}
            </div>

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

              <pre className="text-slate-300 font-mono text-sm overflow-x-auto bg-slate-900 rounded-xl p-6 border border-slate-700/30">
                <code>{codeExamples[activeOverflow]}</code>
              </pre>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-yellow-400" />
                Key Points
              </h2>

              <ul className="space-y-3">
                {keyPoints[activeOverflow].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <p className="text-slate-300">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverflowPage;
