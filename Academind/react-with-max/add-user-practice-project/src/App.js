import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const [users, setUsers] = useState([]);

	const addUserHandler = (userData) => {
		setUsers((prevUsers) => {
			return [userData, ...prevUsers];
		});
	};
	return (
		<>
			<AddUser onAddUser={addUserHandler}></AddUser>
			<UsersList users={users} />
		</>
	);
}

export default App;
