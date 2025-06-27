'use client';

import { useEffect, useState } from 'react';

const lines = [
  'Rethink your ride.',
  'Share the journey.',
  'Make every mile matter.',
];

export default function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentLine = lines[index];
    const speed = isDeleting ? 40 : 90;

    const timer = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentLine.substring(0, prev.length - 1)
          : currentLine.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentLine) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % lines.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-[#7b3f2c] mt-12 text-center transition-opacity duration-1000 opacity-100">
        <span className="px-2 py-1 bg-[#fff8f0] rounded-lg border border-[#faeceb] shadow-sm text-[#b4693e]">
            <span className="border-r-2 border-[#b4693e] pr-1 animate-blink">{text}</span>
        </span>
    </h3>
  );
}
