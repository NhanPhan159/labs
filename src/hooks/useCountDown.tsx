import { useRef, useState } from "react";

const useCountDown = (value: number) => {
  const [time, setTime] = useState(value);
  const timeRef = useRef(value);
  const intervalRef = useRef<NodeJS.Timeout>(null);
  const handleCountDown = () => {
    timeRef.current = value;
    setTime(timeRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (timeRef.current === 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
      } else {
        timeRef.current -= 1;
        setTime(timeRef.current);
      }
    }, 1000);
  };
  const stopCountDown = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  return { time, handleCountDown, stopCountDown };
};
export default useCountDown;
