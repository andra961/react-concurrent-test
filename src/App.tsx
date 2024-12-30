import { useState, useTransition } from "react";

import "./App.css";

const ELEMENTS_COUNT = 40000;

const MyComp = () => {
  return <div>Element</div>;
};

const Loader = () => {
  return <div className={"loader"} />;
};

const App = () => {
  const [showElements, setShowElements] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    if (showElements || isPending) {
      setShowElements(false);
    } else {
      startTransition(() => {
        setShowElements(true);
      });
    }
  };

  let buttonLabel = showElements ? "Hide Elements" : "Show Elements";

  if (isPending) buttonLabel = "Cancel";

  return (
    <>
      <button className="btn" onClick={handleClick}>
        {buttonLabel}
        {isPending && <Loader />}
      </button>

      {showElements &&
        new Array(ELEMENTS_COUNT).fill(0).map((_, i) => <MyComp key={i} />)}
    </>
  );
};

export default App;
