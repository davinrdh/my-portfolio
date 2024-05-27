import { useEffect, useState } from "react";

interface ITypeWriter {
  text: string;
  speed?: number;
}

export default function TypeWriter({ text, speed = 100 }: ITypeWriter) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, displayedText, speed]);

  return <span>{displayedText}</span>;
}
