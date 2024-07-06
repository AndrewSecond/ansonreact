// import React from "react";
import PropTypes from "prop-types";

export default function UserDetails({user}) {
  return (
    <div>
      <b>ID: {user.id}</b>
      <br />
      <b>Username: </b>
      <span>{user.username}</span>
      <br />
      <b>Email: </b>
      <span>{user.email}</span>
    </div>
  );
}

UserDetails.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    })
}
