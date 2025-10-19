import { Button } from "@/components/ui/button";
import axiosClient from "@/lib/axios";
import { useEffect, useMemo, useState, type FC } from "react";

type TGenerate = {
  time: number;
  handleCountDown: () => void;
};
const Generate: FC<TGenerate> = ({ time, handleCountDown }) => {
  const [code, setCode] = useState("");

  const statusOTP = useMemo(
    () => (time === 0 ? "code is expired let generate" : time),
    [time],
  );
  const handleClick = async () => {
    const otp = await axiosClient.get("otp/");
    setCode(otp.data.code);
    handleCountDown();
  };

  useEffect(() => {
    (async () => {
      if (time === 0) {
        const result = await axiosClient.delete(`otp/${code}`);
        if (result) console.log("deleted");
        else console.log("not deleted");
      }
    })();
  }, [time]);
  return (
    <div className="m-auto">
      <Button onClick={handleClick}>Generate</Button>
      {code}
      <p>OTP Status: {statusOTP}</p>
    </div>
  );
};

export default Generate;
