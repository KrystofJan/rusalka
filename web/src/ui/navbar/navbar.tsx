'use client';
import Link from 'next/link';
import {
  HardHat,
  House,
  Keyboard,
  NotebookPen,
  Package,
  Palette,
  TestTubeDiagonal,
} from 'lucide-react';
import { JSX, useState } from 'react';
import Typewriter from './typewriter';
import { NavigationItem } from '@/data/navigation';

export function NavbarItem(prop: NavigationItem) {
  const { label, icon, opened } = prop;
  const isNested = 'children' in prop;
  let content: JSX.Element;
  const parentStyles = 'flex gap-2 text-brand-purple hover:text-brand-red';
  const inner = (
    <>
      {icon} <Typewriter trigger={opened} text={label} />
    </>
  );
  if (isNested) {
    const [isItemOpened, setIsItemOpened] = useState(prop.openedItem);
    content = (
      <>
        <span
          className={parentStyles}
          onClick={() => setIsItemOpened((x) => !x)}
        >
          {isItemOpened ? '-' : '+'} {inner}
        </span>
        <div className="pl-2 flex-0">
          {isItemOpened && prop.children.map((x) => <NavbarItem {...x} />)}
        </div>
      </>
    );
  } else {
    content = (
      <Link href={prop.link} className={parentStyles}>
        * {inner}
      </Link>
    );
  }
  return <div>{content}</div>;
}

interface SidebarProps {
  isOpened: boolean;
}

export default function Navbar({ isOpened }: SidebarProps) {
  const navigation: NavigationItem[] = [
    { label: 'Home', link: '/', icon: <House />, opened: isOpened },
    { label: 'Blog', link: '/blog', icon: <NotebookPen />, opened: isOpened },
    {
      label: 'Services',
      link: '/services',
      icon: <NotebookPen />,
      opened: isOpened,
    },
    {
      label: 'Products',
      link: '/products',
      icon: <HardHat />,
      opened: isOpened,
    },

    {
      label: 'test',
      icon: <TestTubeDiagonal />,
      opened: isOpened,
      openedItem: false,
      children: [
        {
          label: 'Test Colors',
          link: '/test/test-colors',
          icon: <Palette />,
          opened: isOpened,
        },
        {
          label: 'Test Typewriter',
          link: '/test/test-typewriter',
          icon: <Keyboard />,
          opened: isOpened,
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {navigation.map((x) => (
        <NavbarItem {...x} />
      ))}
    </div>
  );
}
