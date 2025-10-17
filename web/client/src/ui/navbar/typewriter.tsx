'use client';

import { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  wpm?: number;
  text?: string;
  trigger: boolean;
}

const Directions = {
  Forward: 'forward',
  Reverse: 'reverse',
} as const;

type Direction = (typeof Directions)[keyof typeof Directions];

export default function Typewriter({
  wpm = 300,
  text = '',
  trigger,
}: TypewriterProps) {
  const cps = (wpm * 5) / 60;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [direction, setDirection] = useState<Direction>(Directions.Forward);
  const prevTrigger = useRef<boolean | null>(null);
  const hasInitialized = useRef(false);

  if (!text) {
    return <span></span>;
  }

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;

      if (trigger) {
        setTimeout(() => {
          setCurrentIndex(0);
          setDirection(Directions.Forward);
          setIsTyping(true);
        }, 100);
      } else {
        setCurrentIndex(0);
      }

      prevTrigger.current = trigger;
      return;
    }

    if (prevTrigger.current !== trigger) {
      if (trigger) {
        setTimeout(() => {
          setCurrentIndex(0);
          setDirection(Directions.Forward);
          setIsTyping(true);
        }, 100);
      } else {
        setCurrentIndex(text.length);
        setDirection(Directions.Reverse);
        setIsTyping(true);
      }
      prevTrigger.current = trigger;
    }
  }, [trigger, text.length]);

  useEffect(() => {
    if (!isTyping) return;

    if (direction === Directions.Forward && currentIndex >= text.length) {
      setIsTyping(false);
      return;
    }
    if (direction === Directions.Reverse && currentIndex <= 0) {
      setIsTyping(false);
      return;
    }

    const timeoutId = setTimeout(
      () => {
        setCurrentIndex((prev) =>
          direction === Directions.Forward ? prev + 1 : prev - 1
        );
      },
      (1 / cps) * 1000
    );

    return () => clearTimeout(timeoutId);
  }, [currentIndex, text.length, cps, direction, isTyping]);

  return <span>{text.slice(0, currentIndex)}</span>;
}
