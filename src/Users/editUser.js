import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Edituser = () => {

    let history = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({

        name: "",
        username: "",
        email: "",
        phone: ""

    });

    const { name, username, email, phone } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadUser()
    }, []);
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`https://6120e98b24d11c001762ee39.mockapi.io/user/${id}`, user);
        history("/")
    };



    const loadUser = async () => {
        const result = await axios.get(`https://6120e98b24d11c001762ee39.mockapi.io/user/${id}`);
        setUser(result.data)

    }

    return (



        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Edit a User</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div class="form-group">

                        <input type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter Name"
                            value={name}
                            name="name"
                            onChange={e => onInputChange(e)} />

                    </div>
                    <div class="form-group">

                        <input type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter username"
                            name="username"
                            value={username}

                            onChange={e => onInputChange(e)} />
                    </div>

                    <div class="form-group">

                        <input type="email"
                            class="form-control form-control-lg"
                            placeholder="Enter Email"
                            value={email}
                            name="email"
                            onChange={e => onInputChange(e)} />
                    </div>

                    <div class="form-group">

                        <input type="phone"
                            class="form-control form-control-lg"
                            placeholder="Enter your phone number"
                            value={phone}
                            name="phone"
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <button type="submit" class="btn btn-warning">Update User</button>
                </form>
            </div>
        </div>


    );

};

export default Edituser;
