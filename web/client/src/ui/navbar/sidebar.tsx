'use client';
import { Triangle } from 'lucide-react';
import Typewriter from './typewriter';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from './navbar';

export type OpenedState = 'opened' | 'closed';

interface SidebarProps {
  initialState: OpenedState;
  title: string;
}

export default function Sidebar({ initialState, title }: SidebarProps) {
  const [opened, setOpened] = useState(initialState === 'opened');
  return (
    <>
      <div
        className={`bg-brand-bg-dark min-w-fit hover:bg-brand-bg min-h-screen h-full max-h-dvh sticky top-0 border-r border-r-brand-gray4 shadow-terminal-lg flex flex-col ${opened ? 'px-6' : 'px-4'}`}
        style={{
          transition:
            'width 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), padding-left 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94), padding-right 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        <div
          className="flex row items-center mb-4"
          style={{
            gap: opened ? '1rem' : '0.25rem',
            transition: 'gap 350ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl text-brand-cyan font-bold hover:shadow-glow-sm transition-all duration-brand-normal whitespace-nowrap hover:text-brand-red hover:underline"
            >
              #!/
              <Typewriter text={title} trigger={opened} />
            </Link>
          </div>
        </div>
        <Navbar isOpened={opened} />

        <div className="flex-grow"></div>

        <div
          className={`transition-all duration-350ms ease-in-out absolute right-4 bottom-4`}
        >
          <Triangle
            className={`cursor-pointer hover:text-brand-cyan transition-transform duration-[350ms] ease-out ${
              opened
                ? 'rotate-90 hover:rotate-[30deg]'
                : 'rotate-[30deg] hover:rotate-90'
            }`}
            onClick={() => setOpened((x) => !x)}
            size={20}
          />
        </div>
      </div>
    </>
  );
}
