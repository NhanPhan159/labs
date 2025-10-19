import useCountDown from "@/hooks/useCountDown"
import InputOTP from "./InputOTP"
import Generate from "./GenerateOTP"

const OTP = () => {
    const {time,handleCountDown, stopCountDown} = useCountDown(20)
    return (
        <div>
            <Generate time={time} handleCountDown={handleCountDown}/>
            <InputOTP stopCountDown={stopCountDown}/> 
        </div>
    )

}
export default OTP