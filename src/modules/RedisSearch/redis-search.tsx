import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { TRedisReponse } from "@/types/redis-search";
import axios from "axios";
import { useState } from "react";

const RedisSearch = () => {
  const [value, setValue] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState<TRedisReponse>();
  const handleClickSearch = async () => {
    const data = await axios.get<TRedisReponse>(
      `http://localhost:3000/search?query=${value}`,
    );
    setTime(data.headers["x-response-time"]);
    setData(data.data);
  };
  return (
    <>
      <div>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
        <Button variant={"outline"} onClick={handleClickSearch}>
          Search
        </Button>
      </div>
      <p>Time request: {time}</p>
      <p>Name: {data?.name}</p>
      <p>Followers: {data?.followers}</p>
      <p>Repo: {data?.repo}</p>
    </>
  );
};
export default RedisSearch;
