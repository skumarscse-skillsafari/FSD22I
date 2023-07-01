import { useState } from "react";
import UserDetails from "./UserDetails";

const User = ({ user }) => {
  const {
    name,
    username,
    address: { street, suite, city },
    phone,
    email,
    website,
  } = user;

  const [displayDetails, setDisplayDetails] = useState(false);
  return (
    <div>
      <h2>User Component</h2>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Phone: {phone}</p>
      <button onClick={() => setDisplayDetails(!displayDetails)}>
        Know more...
      </button>
      {displayDetails && (
        <UserDetails
          street={street}
          suite={suite}
          city={city}
          email={email}
          website={website}
        />
      )}
      <hr />
    </div>
  );
};

export default User;
