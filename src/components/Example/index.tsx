import { useEffect } from "react";

const Example = () => {
  useEffect(() => {
    return () => {
      console.log("mount");
    };
  });

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  });

  return <div>EXAMPLE</div>;
};

export default Example;
