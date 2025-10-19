import {
  InputOTP as InputOTPShadcn,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import axiosClient from "@/lib/axios";
import { useEffect, useState, type FC } from "react";
type TInputOTP = {
  stopCountDown: () => void
}
const InputOTP:FC<TInputOTP> = ({stopCountDown}) =>{
  const [value, setValue] = useState("");
  const validateCode = async (code: string) => {
    const data = await axiosClient.post("otp/check", { code });
    if (data.data) {
      await axiosClient.post("otp/check", { code });
      stopCountDown()
      alert("ok");
    } else {
      alert("nooooooooooo");
    }
  };
  useEffect(() => {
    (async () => {
      if (value.length === 6) {
        await validateCode(value);
      }
    })();
  }, [value]);

  return (
    <div>
      <InputOTPShadcn
        value={value}
        onChange={(value) => setValue(value)}
        maxLength={6}
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTPShadcn>
    </div>
  );
}
export default InputOTP