import { FunctionComponent } from "react";

interface LoaderProps {}

const Loader: FunctionComponent<LoaderProps> = () => {
  return (
    <div className="flex justify-center h-96">
      <p>Loader.....</p>
    </div>
  );
};

export default Loader;
