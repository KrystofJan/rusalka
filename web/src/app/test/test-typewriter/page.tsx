'use client';

import { useState } from 'react';
import Typewriter from '@/ui/navbar/typewriter';

export default function TestTypewriter() {
  const [trigger, setTrigger] = useState(false);

  return (
    <div className="min-h-screen p-8 space-y-8">
      <div className="bg-brand-gray2 p-8 rounded-brand-xl border border-brand-gray4 shadow-terminal-lg">
        <h1 className="text-4xl font-bold mb-6 text-brand-fg">
          Typewriter Component Test
        </h1>

        <div className="space-y-6">
          <div className="bg-brand-gray4 p-6 rounded-brand-lg">
            <h2 className="text-xl font-semibold mb-4 text-brand-cyan">
              Controlled Typewriter Demo
            </h2>

            <div className="mb-4">
              <div className="text-2xl text-brand-cyan font-bold font-mono whitespace-nowrap overflow-hidden">
                #!
                <Typewriter text="/Krystof/Jan" trigger={trigger} />
              </div>
            </div>

            <button
              onClick={() => setTrigger(!trigger)}
              className={`px-6 py-3 rounded-brand-lg font-semibold transition-all duration-300 ${
                trigger
                  ? 'bg-brand-red hover:bg-brand-red-dark text-white'
                  : 'bg-brand-green hover:bg-brand-green-dark text-white'
              }`}
            >
              {trigger ? 'Close (Erase Text)' : 'Open (Type Text)'}
            </button>
          </div>

          <div className="bg-brand-gray3 p-6 rounded-brand-lg">
            <h3 className="text-lg font-semibold mb-3 text-brand-yellow">
              How it works:
            </h3>
            <ul className="space-y-2 text-brand-subtext1">
              <li>
                • <strong>trigger=true</strong>: Types out text character by
                character
              </li>
              <li>
                • <strong>trigger=false</strong>: Erases text character by
                character in reverse
              </li>
              <li>• Animation only starts when the trigger prop changes</li>
              <li>
                • Component resets its internal state on each trigger change
              </li>
              <li>• Uses the duration prop to control animation speed</li>
            </ul>
          </div>

          <div className="bg-brand-gray3 p-6 rounded-brand-lg">
            <h3 className="text-lg font-semibold mb-3 text-brand-purple">
              Current State:
            </h3>
            <div className="font-mono text-brand-subtext1">
              <div>
                trigger:{' '}
                <span
                  className={trigger ? 'text-brand-green' : 'text-brand-red'}
                >
                  {trigger.toString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
