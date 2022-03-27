import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const User = () => {

    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    });
    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {

        const result = await axios.get(`https://6120e98b24d11c001762ee39.mockapi.io/user/${id}`);
        setUser(result.data);
    };
    

    return (
        <div className="container">
            <Link className="btn btn-primary" to="/">
                Back to Home </Link>

            
               
            

            <ul className="list group w-80">
                <li className="list-group-item"><b>User Id</b>:{id}</li>
                <li className="list-group-item"><b>Name</b>:{user.name}</li>
                <li className="list-group-item"><b>Username</b>:{user.username}</li>
                <li className="list-group-item"><b>Email</b>:  {user.email}</li>
                <li className="list-group-item"><b>Phone</b>:{user.phone}</li>
            </ul>
        </div>




    );
};


export default User;