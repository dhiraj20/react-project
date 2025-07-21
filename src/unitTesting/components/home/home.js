import React, { useEffect, useState } from "react";

const Home = () => {
  const [name, setName] = useState("Dhiraj");
  const [updatedName, setUpdatedName] = useState("");
  const [users, setUsers] = useState([]);

  const handleChangeName = () => {
    setUpdatedName(name);
  };

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <div>Home</div>
      <div>Name: {name}</div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <br />
      <button onClick={handleChangeName} data-testid="update-btn">
        Update Name
      </button>
      <br />
      <div>Updated Name: {updatedName}</div>
      <div>User List: {users?.length}</div>
      <ul>
        {users.length > 0 &&
          users?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default Home;
