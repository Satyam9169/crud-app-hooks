import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const EditUsers = () => {
    let history = useHistory();
    let { id } = useParams();
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
        setUser({ ...user, [e.target.name]: e.target.value });
    }


    const handleSubmit = async event => {
        event.preventDefault();
        console.log(user);
        await axios.put(`http://localhost:5000/users/${id}`, user);
        history.push("/");
    };
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(result.data);
    }
    return (
        <>
            <div className="container my-2 ">
                <Link className="btn btn-primary text-start" to="/">Back to Home</Link>
                <Link className="btn btn-success text-end" to="/users/add" >Go to AddUser</Link>
            </div>
            <div className="container my-4 bg-light">
                <form className="row g-3 border shadow " onSubmit={handleSubmit}>
                    <h1 className="text-success">Edit Users</h1>
                    <hr />
                    <div className="col-md-6">
                        <label for="inputEmail4" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder="Enter your Name"
                            name="name" value={user.name} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="col-md-6">
                        <label for="inputPassword4" className="form-label">UserName</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Enter your UserName"
                            name="email" value={user.email} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputAddress" placeholder="Enter your Email"
                            name="username" value={user.username} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">Mobile No</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Enter Your Mobile No"
                            name="phone" value={user.phone} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">Website</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Enter your Website"
                            name="website" value={user.website} onChange={(e) => onInputChange(e)} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 ">
                        <button type="submit" className="btn btn-primary my-2">Update</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditUsers
