import React, { Suspense } from "react";
import { useToggle } from "react-use";
import { AiTwotoneSetting, AiOutlineClose } from "react-icons/ai";

const Settings = React.lazy(() => import("../components/Settings"));
const LazySettings = () => (
  <Suspense fallback={<div>Loading</div>}>
    <Settings />
  </Suspense>
);

const SettingsParts: React.FC = () => {
  const [on, setToggle] = useToggle(false);

  return (
    <div className="absolute top-0 left-0">
      <button className="absolute z-20 p-2 top-2 left-2" onClick={setToggle}>
        {on ? (
          <AiOutlineClose className="text-gray-900" />
        ) : (
          <AiTwotoneSetting className="text-white" />
        )}
      </button>
      {on && <LazySettings />}
    </div>
  );
};

export default SettingsParts;
