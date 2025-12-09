import React from "react";
import { useEffect } from "react";

interface SmoothHighlightProps {
  text: string;
  delay?: number;
}

const SmoothHighlight: React.FC<SmoothHighlightProps> = ({ text, delay = 0 }) => {
  const [highlightWidth, setHighlightWidth] = React.useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHighlightWidth(100);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className="relative inline-block">
      <span className="relative z-10">{text}</span>
      <span
        style={{ width: `${highlightWidth}%` }}
        className="absolute bottom-1 left-0 h-2/5 bg-yellow-300 -z-10 transition-all duration-1700ms ease-out"
      />
    </span>
  );
};
 export default SmoothHighlight;