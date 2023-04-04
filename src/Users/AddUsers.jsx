import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
const AddUsers = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        username: "",
        phone: "",
        website: ""
    })
    // const  {name, email, username, phone, website} = user;
    const onInputChange = (e) => {
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value});
    }

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(user);
        await axios.post("http://localhost:5000/users", user);
        history.push("/");
      };
      
    return (
        <>
        <div className="container my-2 text-center">
            <Link className="btn btn-outline-secondary" to="/users/edit/:id" >Go to EditPage</Link>
            </div>
            <div className="container my-4 bg-light">
                <form class="row g-3 border shadow " onSubmit={handleSubmit}>
                    <h1 className="text-success">Add Users</h1>
                    <hr/ >
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input type="text" class="form-control" id="inputEmail4" placeholder="Enter your Name"
                        name="name" value={user.name} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">UserName</label>
                        <input type="text" class="form-control" id="inputPassword4" placeholder="Enter your UserName"
                        name="email"  value={user.email}  onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputAddress" placeholder="Enter your Email" 
                        name="username" value={user.username} onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Mobile No</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Enter Your Mobile No" 
                        name="phone" value={user.phone} onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div class="col-12">
                        <label for="inputAddress2" class="form-label">Website</label>
                        <input type="text" class="form-control" id="inputAddress2" placeholder="Enter your Website" 
                        name="website" value={user.website} onChange={(e) => onInputChange(e)}/>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 ">
                        <button type="submit" class="btn btn-primary my-2">Add</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddUsers
