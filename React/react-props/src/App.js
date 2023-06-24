import logo from "./logo.svg";
import "./App.css";
import Products from "./Component/Products";
import { userDetail, displayName } from "./Component/data";
import Counter from "./Component/State/Counter";

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
      <Counter />
    </div>
  );
}

export default App;
