"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Eye,
  Code,
  Layers,
  Circle,
  Target,
  Crosshair,
  Move,
  Copy,
  Check,
  RotateCcw,
} from "lucide-react";

const PositionPage = () => {
  type PositionType = "static" | "relative" | "absolute" | "fixed" | "sticky";

  const [activePosition, setActivePosition] = useState<PositionType>("static");
  const [copiedCode, setCopiedCode] = useState(false);

  const positionTypes: {
    value: PositionType;
    name: string;
    description: string;
    icon: JSX.Element;
    color: string;
  }[] = [
    {
      value: "static",
      name: "Static",
      description:
        "Default positioning. Elements appear in the normal document flow.",
      icon: <Layers className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      value: "relative",
      name: "Relative",
      description:
        "Position relative to its normal position. Can be moved with top/left.",
      icon: <Move className="w-5 h-5" />,
      color: "bg-green-500",
    },
    {
      value: "absolute",
      name: "Absolute",
      description:
        "Positioned relative to the nearest positioned ancestor (non-static).",
      icon: <Target className="w-5 h-5" />,
      color: "bg-purple-500",
    },
    {
      value: "fixed",
      name: "Fixed",
      description:
        "Position relative to the viewport. Doesn't move when scrolling.",
      icon: <Crosshair className="w-5 h-5" />,
      color: "bg-red-500",
    },
    {
      value: "sticky",
      name: "Sticky",
      description:
        "Acts like relative until a threshold is met, then becomes fixed.",
      icon: <Circle className="w-5 h-5" />,
      color: "bg-yellow-500",
    },
  ];

  const codeExamples: Record<PositionType, string> = {
    static: `.static-element {\n  position: static;\n  background: #3b82f6;\n}`,
    relative: `.relative-element {\n  position: relative;\n  top: 20px;\n  left: 10px;\n  background: #10b981;\n}`,
    absolute: `.absolute-container {\n  position: relative;\n}\n\n.absolute-element {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  background: #8b5cf6;\n}`,
    fixed: `.fixed-element {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  background: #ef4444;\n}`,
    sticky: `.sticky-element {\n  position: sticky;\n  top: 0;\n  background: #facc15;\n}`,
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activePosition]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const renderExample = () => {
    return (
      <div className="relative h-64 overflow-auto bg-slate-900 rounded-xl p-6">
        {activePosition === "static" && (
          <div className="static bg-blue-500 text-white p-4 rounded">
            Static positioned box
          </div>
        )}
        {activePosition === "relative" && (
          <div className="relative top-5 left-5 bg-green-500 text-white p-4 rounded">
            Relative box moved
          </div>
        )}
        {activePosition === "absolute" && (
          <div className="relative bg-slate-700 h-48">
            <div className="absolute top-5 left-5 bg-purple-500 text-white p-4 rounded">
              Absolute box
            </div>
          </div>
        )}
        {activePosition === "fixed" && (
          <div className="fixed top-5 right-5 bg-red-500 text-white p-4 rounded">
            Fixed box (scroll to test)
          </div>
        )}
        {activePosition === "sticky" && (
          <div className="h-[600px]">
            <div className="sticky top-0 bg-yellow-400 text-black p-4 rounded">
              Sticky header (scroll down)
            </div>
            <div className="mt-4 text-white">
              Scroll down to see sticky effect.
            </div>
          </div>
        )}
      </div>
    );
  };

  const keyPoints: Record<PositionType, string[]> = {
    static: [
      "Default behavior for all elements",
      "Elements appear in normal document flow",
      "Cannot be offset with top/left/right/bottom",
    ],
    relative: [
      "Positioned relative to itself",
      "Can be offset using top, left, right, bottom",
      "Doesn't remove element from document flow",
    ],
    absolute: [
      "Positioned relative to the nearest positioned ancestor",
      "Removed from document flow",
      "Can be precisely positioned with top/left/right/bottom",
    ],
    fixed: [
      "Position relative to viewport",
      "Remains in the same position during scroll",
      "Removed from document flow",
    ],
    sticky: [
      "Acts like relative until threshold is met",
      "Then becomes fixed at a given position",
      "Great for headers that stick while scrolling",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </button>
              <div className="flex items-center gap-2">
                <Move className="w-6 h-6 text-green-400" />
                <h1 className="text-2xl font-bold text-white">
                  CSS Position Property
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-400" />
                Position Types
              </h2>

              <div className="space-y-3">
                {positionTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setActivePosition(type.value)}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 text-left group ${
                      activePosition === type.value
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
                  {positionTypes.find((t) => t.value === activePosition)?.name}
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
                <code>{codeExamples[activePosition]}</code>
              </pre>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-yellow-400" />
                Key Points
              </h2>

              <ul className="space-y-3">
                {keyPoints[activePosition].map((point, index) => (
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

export default PositionPage;
