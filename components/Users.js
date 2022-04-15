import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../store/usersSlice";

export default function Clock() {
  const [name, setName] = useState("");
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  
  const addNewUser = () => {
    dispatch(addUser(name));
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label>New User:</label>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={addNewUser}>Add</button>
      <h4>User List:</h4>
      <ol>
        {users.map((user) => (
          <li>{user}</li>
        ))}
      </ol>
    </div>
  );
}
