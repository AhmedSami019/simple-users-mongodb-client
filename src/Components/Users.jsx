import React, { use, useState } from "react";
import { Link } from "react-router";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  console.log(initialUsers);

  // states
  const [users, setUsers] = useState(initialUsers);

//   to add or post to the database
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(newUser);

    fetch("http://localhost:3002/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);
          alert("user added successfully");
          e.target.reset();
        }
      });
  };

  //   to delete user to the database
  const handleDeleteUser = (id) => {
    console.log("delete this user", id);
    fetch(`http://localhost:3002/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log("after delete ", data);
          const remainingUsers = users.filter(user => user._id !== id)
          setUsers(remainingUsers)
        }
      });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" />
          <br />
          <input type="email" name="email" /> <br />
          <input type="submit" value="add user" />
        </form>
      </div>

      {/* view users */}
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} / {user.email}
            <Link to={`user/${user._id}`}>details</Link>
            <Link to={`/update/${user._id}`}>Edit</Link>
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
