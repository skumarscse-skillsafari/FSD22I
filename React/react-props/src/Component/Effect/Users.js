import { useEffect, useState } from "react";

const Users = () => {
  // useEffect()
  // Parameter => Callback function, dependency array
  // 1. logics in the callback function will be executed whenever the component rendered
  // 2. Any cjanges detected in the dependency array elements
  // useEffect(() => {
  // logics
  // }, [counter])

  //   const [counter, setCounter] = useState(1);
  //   console.log(counter);
  const [users, setUsers] = useState([]);
  console.log(users);
  //   useEffect(() => {
  //     console.log("I am useEffect");
  //   }, [counter]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="users">
      <h2>Users Component</h2>
      {/* <h3>{counter}</h3>
      <button onClick={() => setCounter((c) => c + 1)}>Trigger</button> */}
      {users.map((user) => {
        return (
          <div key={user.id} className={`user-${user.id}`}>
            <h2>{user.username}</h2>
            <p>{user.name.firstname}</p>
            <p>{user.name.lastname}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Users;
