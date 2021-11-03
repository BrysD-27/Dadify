import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import API from '../api/api';

const Admin = (username) => {
	const [users, setUsers] = useState([]);

	const userSearchRequest = async (event) => {
		event.preventDefault();
		try {
			const data = await API.makeRequest(`/users/${username}`);
			setUser(data)
			return user;
		} catch (error) {
			throw error;
		}
	}

	useEffect( async function() {
        try {
            const data = await API.makeRequest('/users', 'GET');
            setUsers(data);
        } catch (error) {
            throw error;
        }
    }, []);

	return (
		<div id="admin">
			<h1>Admin</h1>
			<div>

			</div>
		</div>
	)
}

export default Admin