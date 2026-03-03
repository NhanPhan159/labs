import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const TestUseEffect = () => {
  const [count, setCount] = useState(1);
  const handleIncreaseCount = () => {
    setCount(count + 1);
  };
  console.log("re render TestUseEffect");
  useEffect(() => {
    console.log("current count is: ", count);
  }, [count]);
  useEffect(() => {
    console.log("init TestUseEffect");
  }, []);

  return (
    <div>
      This is re-render
      <Button onClick={handleIncreaseCount}>Increase count</Button>
    </div>
  );
};
export default TestUseEffect;
