import { useState, type FC } from "react";
import { Pause, Play } from "lucide-react";
type ToggleButton = {
  textRigth: string;
  textLeft: string;
};
const ToggleButton: FC<ToggleButton> = (prop) => {
  const [isStatusPlay, setIsStatusPlay] = useState(true);
  const handleToggleAudio = () => {
    setIsStatusPlay(!isStatusPlay);
    if (!isStatusPlay) {
      alert("Mode " + prop.textRigth);
    } else {
      alert("Mode " + prop.textLeft);
    }
  };
  return (
    <button className="text-black" onClick={handleToggleAudio}>
      {isStatusPlay ? <Pause /> : <Play />}
    </button>
  );
};
