import { FC } from "react";

type Props = {
  data: number;
};

const Title: FC<Props> = ({ data }) => {
  return (
    <div className="title">
      <h1>{data}</h1>
    </div>
  );
};

export default Title;
