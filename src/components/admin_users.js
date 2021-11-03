import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import API from '../api/api';

const AdminUsers = () => {

    return (
        <div id="userList">
            <h1>Current site users</h1>
            <div>
                <Link to="/admin">Back to main admin page</Link>
            </div>
            <Link to="/">Back to Home</Link>
            <div>
                {users.map((user, id) => {
                    return (
                        <div key={id} className="single-user">
                            <h2>Username: {user.username}</h2>
                            <div>Name: {user.first_name} {user.last_name}</div>
                            <div>Email: {user.email}</div>
                            <div>Phone: {user.phone}</div>
                            <div>Registered: {user.created_at}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminUsers