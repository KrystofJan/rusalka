"use client";
import React from "react";

export type TailwindTestProps = {
  className?: string;
};

export const TailwindTest: React.FC<TailwindTestProps> = ({ className }) => {
  return (
    <div className={`p-6 space-y-4 ${className}`}>
      <h2 className="text-2xl font-bold mb-4">Tailwind CSS Test</h2>
      
      {/* Standard Tailwind Classes */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Standard Tailwind Classes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-red-200 p-4 rounded-md text-center">
            bg-red-200
          </div>
          <div className="bg-blue-500 p-4 rounded-lg text-white text-center">
            bg-blue-500
          </div>
          <div className="bg-green-300 p-4 rounded-xl text-center">
            bg-green-300
          </div>
          <div className="bg-yellow-400 p-4 rounded-2xl text-center">
            bg-yellow-400
          </div>
        </div>
      </section>

      {/* Custom Color System */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Custom Color System</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-brand-primary p-4 rounded-md text-white text-center">
            bg-brand-primary
          </div>
          <div className="bg-brand-secondary p-4 rounded-md text-white text-center">
            bg-brand-secondary
          </div>
          <div className="bg-brand-tertiary p-4 rounded-md text-white text-center">
            bg-brand-tertiary
          </div>
          <div className="bg-brand-primary-light p-4 rounded-md text-white text-center">
            bg-brand-primary-light
          </div>
        </div>
      </section>

      {/* Opacity Tests */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Opacity Modifiers</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-brand-primary/10 p-4 rounded-md text-brand-primary text-center border border-brand-primary/20">
            bg-brand-primary/10
          </div>
          <div className="bg-brand-secondary/25 p-4 rounded-md text-brand-secondary text-center border border-brand-secondary/30">
            bg-brand-secondary/25
          </div>
          <div className="bg-brand-tertiary/50 p-4 rounded-md text-white text-center">
            bg-brand-tertiary/50
          </div>
          <div className="bg-red-500/75 p-4 rounded-md text-white text-center">
            bg-red-500/75
          </div>
        </div>
      </section>

      {/* Brand Colors */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Brand Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-brand-cyan p-4 rounded-md text-white text-center">
            bg-brand-cyan
          </div>
          <div className="bg-brand-red p-4 rounded-md text-white text-center">
            bg-brand-red
          </div>
          <div className="bg-brand-green p-4 rounded-md text-white text-center">
            bg-brand-green
          </div>
          <div className="bg-brand-purple p-4 rounded-md text-white text-center">
            bg-brand-purple
          </div>
          <div className="bg-brand-yellow p-4 rounded-md text-black text-center">
            bg-brand-yellow
          </div>
          <div className="bg-brand-orange p-4 rounded-md text-white text-center">
            bg-brand-orange
          </div>
          <div className="bg-brand-blue p-4 rounded-md text-white text-center">
            bg-brand-blue
          </div>
          <div className="bg-brand-magenta p-4 rounded-md text-white text-center">
            bg-brand-magenta
          </div>
        </div>
      </section>

      {/* Brand Color Variants */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Brand Color Variants</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-brand-red p-4 rounded-md text-white text-center">
            brand-red
          </div>
          <div className="bg-brand-red-light p-4 rounded-md text-white text-center">
            brand-red-light
          </div>
          <div className="bg-brand-red-dark p-4 rounded-md text-white text-center">
            brand-red-dark
          </div>
          <div className="bg-brand-red-darkest p-4 rounded-md text-white text-center">
            brand-red-darkest
          </div>
        </div>
      </section>

      {/* Background/Foreground Colors */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Background & Gray Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-brand-bg p-4 rounded-md text-brand-fg text-center border border-brand-gray4">
            bg-brand-bg
          </div>
          <div className="bg-brand-gray1 p-4 rounded-md text-brand-fg text-center">
            bg-brand-gray1
          </div>
          <div className="bg-brand-gray3 p-4 rounded-md text-brand-fg text-center">
            bg-brand-gray3
          </div>
          <div className="bg-brand-gray5 p-4 rounded-md text-brand-fg text-center">
            bg-brand-gray5
          </div>
        </div>
      </section>

      {/* Interactive Elements */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Elements</h3>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Standard Button
          </button>
          <button className="px-4 py-2 bg-brand-primary text-white rounded-md hover:bg-brand-primary-dark transition-colors">
            Primary Button
          </button>
          <button className="px-4 py-2 border border-brand-secondary text-brand-secondary rounded-md hover:bg-brand-secondary hover:text-white transition-colors">
            Secondary Outline
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-md">
            Gradient Button
          </button>
        </div>
      </section>

      {/* Layout Tests */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Layout & Spacing</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4 bg-gray-100 rounded-lg">
            <h4 className="font-semibold mb-2">Flexbox Layout</h4>
            <p className="text-sm text-gray-600">This uses flex-1, p-4, bg-gray-100, rounded-lg</p>
          </div>
          <div className="flex-1 p-4 bg-gray-200 rounded-lg">
            <h4 className="font-semibold mb-2">Responsive Design</h4>
            <p className="text-sm text-gray-600">This uses md:flex-row for responsive layout</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-4">
        <h3 className="text-lg font-semibold">Typography</h3>
        <div className="space-y-2">
          <p className="text-xs text-gray-500">Extra small text (text-xs)</p>
          <p className="text-sm text-gray-600">Small text (text-sm)</p>
          <p className="text-base text-gray-700">Base text (text-base)</p>
          <p className="text-lg text-gray-800">Large text (text-lg)</p>
          <p className="text-xl font-semibold text-gray-900">Extra large text (text-xl)</p>
        </div>
      </section>
    </div>
  );
};

export default TailwindTest;
