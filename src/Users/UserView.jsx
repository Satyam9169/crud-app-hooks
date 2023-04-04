import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
const UserView = () => {
    let { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });   
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5000/users/${id}`);
        setUser(result.data);
    }
   
    return (
        <div className="container">
            <div className="my-4 text-start">
            <Link className="btn btn-primary" to="/">Back to Home</Link>
            </div>
            <h1 className="display-4">User Id: {id}</h1>
            <hr className="w-100 "/>
            <ul className="list-group text-center">
                <li className="list-group-item">Name: {user.name}</li>
                <li className="list-group-item">Username: {user.username}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Phone: {user.phone}</li>
                <li className="list-group-item">Website: {user.website}</li>
            </ul>
        </div>
    )
}

export default UserView







