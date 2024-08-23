import React, { useState, useEffect, useMemo, lazy } from "react";
import { fetchUsers, formatUser } from "./utils";
import "./App.css";
import { User } from "./types/index.types";
import { sampleData } from "./mock-data";
import { SearchBar } from "./components/";

// To make the code easier to read, I've moved the instructions to the README and added specific specs as comments where appropriate within the code.

const UserCard = lazy(() => import('./components/components/UserCard'))

export default function App() {
	const [users, setUsers] = useState<User[] | null>(null);
	// Note:  This is a brute force approach to managing this state due to a tight timeline and the nature of the assessment.  IRL, I'd want to look at having the formatUser functionality mutate User objects on the backend, or maybe as part of middleware/reducers within a more comprehensive state management strategy so that users are fetched => reducers apply formatUser => formattedUsers are injected into the central source of truth (ex. store for redux).  Either way, having this many interdependent state updates complicates the state architecture and would make debugging and adding functionality more problematic.
	const [formattedUsers, setFormattedUsers] = useState<User[] | null>(null);
	const [displayedUsers, setDisplayedUsers] = useState<User[] | null>(null);
	const [selectedUser, setSelectedUser] = useState<string | null>(null);
	const [searchQuery, setSearchQuery] = useState<string>("");

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
		if (_formattedUsers) {
			setFormattedUsers(_formattedUsers);
			setDisplayedUsers(_formattedUsers);
		}
	}, [users]);

	const userClicked = (id: string) => {
		setSelectedUser(id);
	};

	// 7. Implement searching functionality by name, ID, or friend's ID. Allow users to search for users by entering a query in an input field. Display only the users that match the search criteria. The search should be case-insensitive and match any part of the user's name, ID, or friend's ID.
	useEffect(() => {
		const filteredUsers = formattedUsers?.filter((user) => {
			return (
				user.name.toLowerCase().includes(searchQuery) ||
				user.id.toLowerCase().includes(searchQuery) ||
				user.friends.some((friendId) =>
					friendId.toLowerCase().includes(searchQuery)
				)
			);
		});
		filteredUsers && setDisplayedUsers(filteredUsers);
	}, [searchQuery]);

	const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value.toLowerCase());
	};

  // 6. Implement memoization for the User components to optimize performance. The components should only re-render when the user data is updated.
	const userList = useMemo(() => {
		return displayedUsers?.map((user) => (
			<UserCard
				user={user}
				onClick={userClicked}
				isSelected={user.id === selectedUser}
			/>
		));
	}, [displayedUsers, selectedUser]);

	return (
		<div className='app-container'>
			<SearchBar onChange={onSearchChange} />
			{formattedUsers && <div className='user-list'>{userList}</div>}
		</div>
	);
}
