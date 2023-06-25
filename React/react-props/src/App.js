import logo from "./logo.svg";
import "./App.css";
import Products from "./Component/Products";
import { userDetail, displayName } from "./Component/data";
import Counter from "./Component/State/Counter";
import CounterReducer from "./Component/ReducerHook/CounterReducer";
import Users from "./Component/Effect/Users";

function App() {
  // console.log(userDetail);
  // console.log(displayName);
  // displayName(userDetail.name);
  return (
    <div className="App">
      {/* <h2>Welcome, {userDetail.name}</h2>
      <p>User Age: {userDetail.age}</p>
      <p>User City: {userDetail.city}</p>
      <Products /> */}
      {/* <Counter /> */}
      {/* <CounterReducer /> */}
      <Users />
    </div>
  );
}

export default App;
