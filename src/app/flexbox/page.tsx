"use client";

import React, { JSX, useState } from "react";
import {
  ArrowLeft,
  Eye,
  Code,
  Layout,
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignJustify,
  AlignRight,
  AlignLeft,
  Copy,
  Check,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";

const FlexboxPage = () => {
  type FlexType = "row" | "row-reverse" | "column" | "column-reverse" | "wrap";
  type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";

  const [activeFlex, setActiveFlex] = useState<FlexType>("row");
  const [copiedCode, setCopiedCode] = useState(false);

  const flexTypes: {
    value: FlexType;
    name: string;
    description: string;
    icon: JSX.Element;
    color: string;
  }[] = [
    {
      value: "row",
      name: "Row",
      description: "Items are placed horizontally, left to right.",
      icon: <AlignLeft className="w-5 h-5" />,
      color: "bg-blue-500",
    },
    {
      value: "row-reverse",
      name: "Row Reverse",
      description: "Items are placed horizontally, right to left.",
      icon: <AlignRight className="w-5 h-5" />,
      color: "bg-green-500",
    },
    {
      value: "column",
      name: "Column",
      description: "Items are placed vertically, top to bottom.",
      icon: <AlignCenterVertical className="w-5 h-5" />,
      color: "bg-purple-500",
    },
    {
      value: "column-reverse",
      name: "Column Reverse",
      description: "Items are placed vertically, bottom to top.",
      icon: <AlignJustify className="w-5 h-5" />,
      color: "bg-red-500",
    },
    {
      value: "wrap",
      name: "Wrap",
      description: "Items wrap onto multiple lines if necessary.",
      icon: <AlignCenterHorizontal className="w-5 h-5" />,
      color: "bg-yellow-500",
    },
  ];

  const codeExamples: Record<FlexType, string> = {
    row: `.container { display: flex; flex-direction: row; }`,
    "row-reverse": `.container { display: flex; flex-direction: row-reverse; }`,
    column: `.container { display: flex; flex-direction: column; }`,
    "column-reverse": `.container { display: flex; flex-direction: column-reverse; }`,
    wrap: `.container { display: flex; flex-wrap: wrap; }`,
  };

  const keyPoints: Record<FlexType, string[]> = {
    row: [
      "Default direction",
      "Items arranged horizontally",
      "Useful for horizontal navigation bars",
    ],
    "row-reverse": [
      "Reverses horizontal order",
      "Last item appears first",
      "Common in right-to-left layouts",
    ],
    column: [
      "Items stacked vertically",
      "Great for vertical menus",
      "Simplifies column layouts",
    ],
    "column-reverse": [
      "Reverses vertical order",
      "Last item appears at the top",
      "Less common but useful for reverse stacks",
    ],
    wrap: [
      "Allows flex items to wrap onto multiple lines",
      "Prevents overflow",
      "Ideal for responsive grids",
    ],
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeFlex]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
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
                <Layout className="w-6 h-6 text-blue-400" />
                <h1 className="text-2xl font-bold text-white">CSS Flexbox</h1>
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
            What is Flexbox?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Flexbox is a one-dimensional layout method in CSS that allows you to
            efficiently align, space, and distribute items within a container,
            even when their size is unknown or dynamic. It simplifies the
            process of creating flexible and responsive layouts, whether your
            elements are laid out in rows or columns. Flexbox makes it easy to
            control alignment, spacing, and item order with just a few
            properties.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Layout className="w-5 h-5 text-blue-400" />
                Flexbox Directions
              </h2>

              <div className="space-y-3">
                {flexTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setActiveFlex(type.value)}
                    className={`w-full p-4 rounded-xl border transition-all duration-300 text-left group ${
                      activeFlex === type.value
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
                  {flexTypes.find((t) => t.value === activeFlex)?.name}
                </h2>
              </div>

              <div
                className="relative h-40 bg-slate-900 rounded-xl p-4 flex overflow-hidden"
                style={{
                  display: "flex",
                  flexDirection: activeFlex.includes("column")
                    ? (activeFlex as FlexDirection)
                    : "row",
                  flexWrap: activeFlex === "wrap" ? "wrap" : "nowrap",
                }}
              >
                {["1", "2", "3", "4", "5", "6"].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center w-20 h-20 bg-blue-400 text-white rounded m-2"
                  >
                    {item}
                  </div>
                ))}
              </div>
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
                <code>{codeExamples[activeFlex]}</code>
              </pre>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-yellow-400" />
                Key Points
              </h2>

              <ul className="space-y-3">
                {keyPoints[activeFlex].map((point, index) => (
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

export default FlexboxPage;
