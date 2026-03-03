import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useState } from "react";

const Authenticate = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const handleLogin = async () => {
    const data = await axios.post<string>(`http://localhost:3000/login`, {
      username,
      password,
    });
    setResult(data.data);
  };
  return (
    <div>
      <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      <Input value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>Login</Button>
      <p>{result}</p>
    </div>
  );
};
export default Authenticate;
