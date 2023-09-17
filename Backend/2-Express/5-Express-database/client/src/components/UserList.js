import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://sparkling-sheath-dress-bear.cyclic.cloud/api/v1/user")
      .then((res) => setUsers(res.data.usersData))
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (id) => {
    if (window.confirm("Are you sure to delete the user?")) {
      axios
        .delete(
          `https://sparkling-sheath-dress-bear.cyclic.cloud/api/v1/user/delete/${id}`
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      window.location.reload();
    }
  };

  return (
    <div className="container">
      <h2 className="display-5 text-center">UserList component</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user._id} user={user} deleteUser={deleteUser} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
