// 4. Create a user component called User that receives the following props: user (User object), onClick (function to be called when the user is clicked), and isSelected (boolean indicating if the user is selected).

//5. Display the list of users on the users page using the User component. Show the user's name, email, and friend names in the component. When a user is clicked, update the selectedUser state variable to the ID of the clicked user.

import { UserCardProps } from "../../types/index.types";

// Note: The name of this component was changed to UserCard to avoid naming conflicts with the type "User"

export const UserCard = (props: UserCardProps) => {
	const { user, onClick, isSelected } = props;

	const numFriends = user.friendNames
		? user.friendNames?.length - 1
		: 0;

	return (
		<div
			key={user.id}
			onClick={() => onClick(user.id)}
			className={`user-card ${isSelected ? "selected" : ""}`}
		>
			<img className='user-profile' src={user.image} />
			<div className='user-info'>
				<p>{user.name}</p>
				<p>{user.email}</p>
				{/* Note: The mockup only shows the first names, but this is not specified in the instructions.  Defaulting to the instructions, but IRL, I would get clarification */}
				<p>
					{user.friendNames?.map((name, idx) => (
						idx < numFriends
						? <>{name}, </>
						: <>{name}</>
					))}
				</p>
			</div>
			{/* Note:  The figma mockup is unclear as to whether this is an id or rank.  Would get clarification */}
			<div className='user-id'>
				<p>#{user.id}</p>
			</div>
		</div>
	);
};
