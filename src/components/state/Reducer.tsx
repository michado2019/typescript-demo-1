import { useReducer } from "react";

type CountState = {
  count: number;
};
type Action = {
  type: string;
  payLoad: number;
};
const initialState = {
  count: 0,
};
function reducer(state: CountState, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payLoad };
    case "decrement":
      return { count: state.count - action.payLoad };
    default:
      return state;
  }
}
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{state?.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment", payLoad: 10 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payLoad: 10 });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Reducer;
