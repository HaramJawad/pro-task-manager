import { useEffect, useState } from "react";
import "./CustomCursor.css"
const CustomCursor= () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div 
      className="custom-cursor"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}></div>
  );
};
export default CustomCursor;
