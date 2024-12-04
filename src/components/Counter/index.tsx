import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const handleClickNext = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleClickPrev = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClickPrev}>prev</button>
      <button onClick={handleClickNext}>next</button>
    </div>
  );
};

export default Counter;
