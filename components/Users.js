import React, { useState } from "react";

export default function Clock() {
  const [name, setName] = useState("");

  const addNewUser = () => {
    
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
        {[].map((user) => (
          <li>{user}</li>
        ))}
      </ol>
    </div>
  );
}
