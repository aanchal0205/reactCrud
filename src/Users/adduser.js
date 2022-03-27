import React, { useState } from 'react';
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Adduser = () => {

    let history = useNavigate();
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
    const onSubmit = async e => {
        e.preventDefault();
        await Axios.post("https://6120e98b24d11c001762ee39.mockapi.io/user", user);
        history("/")


    }

    return (

        
    
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add a User</h2>
                <form onSubmit={e=> onSubmit(e)}>
            <div class="form-group">
                
                        <input type="text"
                            class="form-control form-control-lg"
                            placeholder="Enter Name"
                            value={name}
                            name="name"
                            onChange={e => onInputChange(e)}/>
                    
  </div>
                <div class="form-group">
                   
                <input type="text"
                    class="form-control form-control-lg"
                            placeholder="Enter username"
                            name="username"
                            value={username}

                        onChange={e => onInputChange(e)}                        />
            </div>

            <div class="form-group">

                <input type="email"
                    class="form-control form-control-lg"
                            placeholder="Enter Email"
                            value={email}
                            name="email"
                        onChange={e => onInputChange(e)}                        />
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
                    
                        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
            </div>
        </div>
        
        
        );

};

export default Adduser;