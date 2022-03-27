import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
    const [user, setUser] = useState([]);

    const loadUsers = () => {
        fetch("https://6120e98b24d11c001762ee39.mockapi.io/user", {
            method: "GET"
        })
            .then(data => data.json())
            .then((user) => setUser(user));
        
    }
    console.log(user);

    

    useEffect(loadUsers, []);


    const deleteUser= (id) => {

        console.log(id)
        fetch(`https://6120e98b24d11c001762ee39.mockapi.io/user/${id}`, {
            method: "DELETE"
        })
            .then(data => data.json())
            .then(data => loadUsers())
    };

    return (
        <div className="container">
            <div className="py-4">
               

                <table className="table border shadow">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">User Name</th>
                            <th>Action</th>
                        </tr>
                        ...
                    </thead>
                        <tbody>
                            {
                                user.map((user, index) => (
                                    <tr>
                                        <th scope="row">
                                            {index + 1}
                                        </th>
                                        <td> {user.name}</td>
                                        <td> {user.username}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link class="btn btn-primary mr-2" to={`/user/view/${user.id}`}>view</Link>
                                            <Link class="btn btn-outline-primary mr-1" to={`/user/edit/${user.id}`}>Edit</Link>
                                            <Link class="btn btn-danger mr-2" to="" onClick={() => deleteUser(user.id)}>Delete</Link>
                                           
                                            


                                        </td>
                                    </tr>
            
                                    ))}
                    </tbody>
                </table>

            </div>



        </div>)
}


export default Home;
