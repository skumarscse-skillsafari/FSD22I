import { useReducer } from "react";

const CounterReducer = () => {
  // useReducer()
  // useReducer(reducerFun, initialValue) => [stateVar, dispatchFun]
  // const [stateVar, dispatchFun] = useReducer(reducerFun, initialValue);
  // reducerFun(state, actionObj) => state (current state)
  // actionObj => { type: "ACTION_TERM" , payload: "has some value" (optional)}
  // dispatch(actionObj) => it calls reducerFun

  const counterReducer = (state, actionObj) => {
    switch (actionObj.type) {
      case "INCREMENT":
        return { count: state.count + 1 };

      case "DECREMENT":
        return { count: state.count - 1 };

      case "RESET":
        return { count: 0 };

      default:
        return state;
    }
  };

  let initValue = { count: 1 };
  const [state, dispatch] = useReducer(counterReducer, initValue);
  //   console.log(state);

  return (
    <div>
      <h2>Counter Reducer Component</h2>
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>{" "}
      {"   "}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>{" "}
      {"   "}
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default CounterReducer;
