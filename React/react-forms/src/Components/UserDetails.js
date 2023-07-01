const UserDetails = ({ street, suite, city, email, website }) => {
  return (
    <div>
      <h2>User Details</h2>
      <h3>Street: {street}</h3>
      <p>Suite: {suite}</p>
      <p>City: {city}</p>
      <p>Email: {email}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
