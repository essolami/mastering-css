"use client";

import React, { useState } from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

const TransformPage = () => {
  type TransformType = "rotate" | "scale" | "translate" | "skew";

  const [activeTransform, setActiveTransform] =
    useState<TransformType>("rotate");

  const transforms: {
    value: TransformType;
    name: string;
    description: string;
    example: string;
  }[] = [
    {
      value: "rotate",
      name: "Rotate",
      description:
        "Rotates an element clockwise or counterclockwise by a specified degree.",
      example: "transform: rotate(45deg);",
    },
    {
      value: "scale",
      name: "Scale",
      description:
        "Resizes an element proportionally in the X and/or Y direction.",
      example: "transform: scale(1.5);",
    },
    {
      value: "translate",
      name: "Translate",
      description: "Moves an element along the X and Y axes.",
      example: "transform: translate(50px, 20px);",
    },
    {
      value: "skew",
      name: "Skew",
      description: "Tilts an element along the X and/or Y axes.",
      example: "transform: skew(20deg, 10deg);",
    },
  ];

  const transformStyles: Record<TransformType, string> = {
    rotate: "rotate-45",
    scale: "scale-125",
    translate: "translate-x-10 translate-y-4",
    skew: "skew-x-12 skew-y-3",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <Link href="/">
                <ArrowLeft className="w-5 h-5 text-slate-400" />
              </Link>
            </button>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-blue-400" />
              <h1 className="text-2xl font-bold text-white">
                CSS Transform Property
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="mb-8 bg-slate-800 rounded-2xl p-6 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-4">
            What is Transform?
          </h2>
          <p className="text-slate-300 leading-relaxed">
            The <code>transform</code> property in CSS allows you to visually
            manipulate an element by rotating, scaling, skewing, or translating
            it. These transformations do not affect the document flow but can
            enhance user interfaces with dynamic and interactive visual effects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {transforms.map((item) => (
              <button
                key={item.value}
                onClick={() => setActiveTransform(item.value)}
                className={`w-full flex items-center gap-3 p-4 rounded-lg transition-colors ${
                  activeTransform === item.value
                    ? "bg-blue-600 text-white"
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {item.name}
              </button>
            ))}

            <div className="mt-6 bg-slate-700 rounded-lg p-4 text-slate-300">
              <h3 className="font-bold text-white mb-2">Example:</h3>
              <code className="block bg-slate-800 p-2 rounded text-green-400">
                {transforms.find((t) => t.value === activeTransform)?.example}
              </code>
              <p className="mt-2">
                {
                  transforms.find((t) => t.value === activeTransform)
                    ?.description
                }
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center h-64">
            <div
              className={`w-32 h-32 bg-blue-500 rounded-lg transition-transform duration-500 ease-in-out ${transformStyles[activeTransform]}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformPage;
