import { useEffect, useState } from "react";

const useHover = () => {
  const [x, setX] = useState<number>();
  const [y, setY] = useState<number>();
  const [isHover, setHover] = useState<boolean>();
  const [boundingClientRect, setBoundingClientRect] = useState<DOMRect>();
  const handleBoudingClientChange = (boudring: DOMRect) => {
    setBoundingClientRect(boudring);
  };
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!boundingClientRect) return;
      const { clientX: x, clientY: y } = event;
      setX(x);
      setY(y);

      if (
        x > boundingClientRect.x &&
        x < boundingClientRect.x + boundingClientRect.width &&
        y > boundingClientRect.y &&
        y < boundingClientRect.y + boundingClientRect.height
      ) {
        setHover(true);
      } else setHover(false);
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [boundingClientRect]);
  return { x, y, isHover, handleBoudingClientChange };
};
export default useHover;
