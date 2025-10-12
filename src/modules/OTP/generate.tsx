import { Button } from "@/components/ui/button";
import axiosClient from "@/lib/axios";
import { useState } from "react";

const Generate = () => {
  const [code, setCode] = useState("");

  const createOtp = async () => {
    const code = (
      Math.floor(Math.random() * (999999 - 100000)) + 100000
    ).toString();
    setCode(code);
    const createdTime = new Date();
    const expireTime = new Date(createdTime.getTime() + 20 * 1000);
    const otp = await axiosClient.post("otp/", {
      code,
      createdTime,
      expireTime,
    });
  };
  return (
    <div className="m-auto">
      <Button onClick={createOtp}>Generate</Button>
      {code}
    </div>
  );
};

export default Generate;
