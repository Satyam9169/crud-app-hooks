import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Home = () => {
    const [user, setUser] = useState([]);


    const loadUsers = async () => {
        const result = await axios.get("http://localhost:5000/users");
        setUser(result.data.reverse());
    }

    useEffect(() => {
        loadUsers();
    }, []);

    const deleteUser = async id =>{
        await axios.delete(`http://localhost:5000/users/${id}`);
        loadUsers();  //for refreshing the page
    }
    return (
        <>
            <div className="container">
                <div className="py-2">
                    <table className="table caption-top border shadow">
                        <caption><h1 className="text-center text-success">List of users</h1></caption>
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user, index) =>
                            (<tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>
                                    <Link className="btn btn-primary me-2" to={`/users/${user.id}`}>View</Link>
                                    <Link className="btn btn-outline-primary me-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                    <Link className="btn btn-danger" onClick={() =>deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home;
