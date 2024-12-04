import { Dispatch, FC } from "react";

type Props = {
  value: number;
  setValue: Dispatch<React.SetStateAction<number>>;
};

const Buttons: FC<Props> = ({ value, setValue }) => {
  console.log("buttons", setValue);

  const handleClick = (num: number) => {
    console.log(num);
    setValue(value + num);
  };
  return (
    <div className="buttons">
      <button onClick={() => handleClick(-1)}>prev</button>
      <button onClick={() => handleClick(1)}>next</button>
    </div>
  );
};

export default Buttons;
