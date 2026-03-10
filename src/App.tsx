import { useEffect, useRef } from "react";
import "./App.css";
import useHover from "./hooks/useHover";
import useLocation from "./hooks/useLocation";

function App() {
  const ref = useRef<HTMLDivElement>(document.createElement("div"));
  const { handleBoudingClientChange, isHover } = useHover();
  const { latLng, error } = useLocation();
  useEffect(() => {
    handleBoudingClientChange(ref.current.getBoundingClientRect());
  }, []);
  return (
    <>
      <div ref={ref} className="w-40 h-40 border-2 border-solid "></div>
      Status hover in the white rectangle: {isHover ? "Hover" : "Not hover"}
      <div>
        Location: lat-{latLng?.lat} lng-{latLng?.lng}
        {error}
      </div>
    </>
  );
}

export default App;
