import { useEffect, useRef } from "react";
import "./App.css";
import useHover from "./hooks/useHover";

function App() {
  const ref = useRef<HTMLDivElement>(document.createElement("div"));
  const { handleBoudingClientChange, isHover } = useHover();
  useEffect(() => {
    handleBoudingClientChange(ref.current.getBoundingClientRect());
  }, []);
  return (
    <>
      <div ref={ref} className="w-40 h-40 border-2 border-solid "></div>
      Status hover in the white rectangle: {isHover ? "Hover" : "Not hover"}
    </>
  );
}

export default App;
