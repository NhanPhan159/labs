import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import axiosClient from "@/lib/axios";
import { useEffect, useState } from "react";

export function InputOTPDemo() {
  const [value, setValue] = useState("");
  const validateCode = async (code: string) => {
    const data = await axiosClient.post("otp/check", { code });
    if (data.data) {
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
      <InputOTP
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
      </InputOTP>
      <Button onClick={() => validateCode(value)}>Submit</Button>
    </div>
  );
}
