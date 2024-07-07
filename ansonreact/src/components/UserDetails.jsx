import {useState} from "react";
import PropTypes from "prop-types";

export default function UserDetails({user, setUsers}) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  function editing() {
    setIsEditing((state) => !state);
  }

  function saveEditing() {
    setUsers((state) => {
      return state.map((item) => (item.id === user.id) ? {...item, username, email} : item);
    });
    setIsEditing(false);
  }

  function deleting() {
    setUsers((state) => {
      return state.filter((item) => item.id !== user.id)
    }
  )}

  function changeName(e) {
    setUsername(e.target.value);
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  return (
    <div>
      <button onClick={editing} >Edit</button>
      <button onClick={deleting} >Delete</button>
      {isEditing && (
      <button onClick={saveEditing} >Save</button>
      )}
      <br />
      <b>ID: {user.id}</b>
      <br />
      <b>Username: </b>
      {isEditing ? (
        <input name="username" type="text" id="username" value={username} onChange={changeName} />
        ) : (
        <span>{username}</span>
        )}
      <br />
      <b>Email: </b>
      {isEditing ? (
        <input name="email" type="email" id="email" value={email} onChange={changeEmail} />
        ) : (
        <span>{email}</span>
        )}    
    </div>
  );
}

UserDetails.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
    setUsers: PropTypes.func.isRequired,
}
