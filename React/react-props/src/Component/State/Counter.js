import { useState } from "react";
const Counter = () => {
  //   let initValue = 1;
  // Syntax
  // useState(initValue) => [stateVar, stateFn]
  // const [stateVar, stateFun] = useState(initValue)
  let [initVal, setInitVal] = useState(1);
  //   let [name, setName] = useState("John");
  console.log(initVal);
  //   const increment = () => {
  //     setInitVal((init) => init + 1);
  //   };

  //   const decrement = () => {
  //     setInitVal((init) => init - 1);
  //   };

  //   const reset = () => {
  //     setInitVal((init) => (init = 0));
  //   };
  return (
    <div>
      <h2>Counter Component</h2>
      <h3>{initVal}</h3>
      {/* <button onClick={increment}>Increment</button> {"   "}
      <button onClick={decrement}>Decrement</button> {"   "}
      <button onClick={reset}>Reset</button> */}
      <button onClick={() => setInitVal((init) => init + 1)}>Increment</button>{" "}
      {"   "}
      <button onClick={() => setInitVal((init) => init - 1)}>
        Decrement
      </button>{" "}
      {"   "}
      <button onClick={() => setInitVal((init) => (init = 0))}>Reset</button>
    </div>
  );
};

export default Counter;
