import React, { use } from 'react';

const Users = ({usersPromise}) => {

    const initialUsers = use(usersPromise)
    console.log(initialUsers);

    const handleAddUser = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const newUser = {name, email}
        console.log(newUser);

        fetch("http://localhost:3002/users", {
            method: "POST", 
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert("user added successfully")
                e.target.reset()
            }
        })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleAddUser}>
                    <input type="text" name='name' /><br />
                    <input type="email" name='email' /> <br />
                    <input type="submit" value="add user" />
                </form>
            </div>
        </div>
    );
};

export default Users;