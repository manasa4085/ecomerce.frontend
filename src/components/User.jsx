import React from "react";

const User = (props) => {
  return (
    <div>
      <p>User Details</p>
      <p>{props.name}</p>
      <p>{props.mobile}</p>
      <p>{props.email}</p>
      <p>{props.location}</p>
      <hr />
    </div>
  );
};

export default User;
