import React, { useState, useEffect, useMemo } from "react";
import { fetchUsers, formatUser } from "./utils";
import "./App.css";
import { User } from "./types/index.types";
import { sampleData } from "./mock-data";
import { SearchBar, UserCard } from "./components/";

// To make the code easier to read, I've moved the instructions to the README and added specific specs as comments where appropriate within the code.

export default function App() {
	const [users, setUsers] = useState<User[] | null>(null);
	const [formattedUsers, setFormattedUsers] = useState<User[] | null>(null);
	const [selectedUser, setSelectedUser] = useState<string | null>(null);

	// useEffects are a good cue that a custom hook may be more appropriate here.  Would consider the needs of the larger project to determine if this could/should be generified for use throughout the codebase, thus requiring conversion to a custom hook.  Leaving as-is per my understanding of the assessment specs
	useEffect(() => {
		const fetchData = async () => {
			const usersData = await fetchUsers(sampleData);
			if (usersData) setUsers(usersData);
		};
		fetchData();
	}, []);

	useEffect(() => {
		const _formattedUsers = users?.map((user) => formatUser(user));
		if (_formattedUsers) setFormattedUsers(_formattedUsers);
	}, [users]);

	const userClicked = (id: string) => {
		setSelectedUser(id);
  };
  
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredUsers = formattedUsers?.filter(user => {
      return user.name.toLowerCase().includes(searchValue) || user.id.toLowerCase().includes(searchValue) || user.friends.some(friendId => friendId.toLowerCase().includes(searchValue))
    });
    filteredUsers && setFormattedUsers(filteredUsers);
  }

	// 6. Implement memoization for the User components to optimize performance. The components should only re-render when the user data is updated.
	const userList = useMemo(() => {
		return formattedUsers?.map((user) => (
			<UserCard
				user={user}
				onClick={userClicked}
				isSelected={user.id === selectedUser}
			/>
		));
	}, [formattedUsers, selectedUser]);

	return (
		<div className="app-container">
			<SearchBar onChange={onSearchChange} />
			{formattedUsers && <div className='user-list'>{userList}</div>}
		</ div>
	);
}
