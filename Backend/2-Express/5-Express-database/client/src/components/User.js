import { Link } from "react-router-dom";
const User = ({ user, deleteUser }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.city}</td>
      <td>
        <Link className="btn btn-primary" to={`/user/edit/${user._id}`}>
          Edit
        </Link>{" "}
        <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
