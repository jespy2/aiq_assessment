# Assessment for AIQ

## Instructions are as follows: 
- Your task is to create a users page that displays a list of users and their friends.
- Feel free to link a completed git repo, single code file, OR codesandbox enviornment
- Example Figma: https://www.figma.com/design/Ts5BoWOhZbG9XVk0usz7tL/Sample?node-id=0-1&t=lcH5Pq1PxTaJNqyq-0

### Project Specs
1. Use TypeScript to define the User type with the following properties: ID, rank, name, email, image, and friends (array of user IDs).
2. Fetch the users' data from an API endpoint when the component mounts (fake fetch). The API response should be an array of User objects.
3. Implement a function called formatUser that takes a User object as input. This function should fill in two additional properties: friendNames (an array of all friends' names) and highestRankingFriend (the ID of the friend with the highest rank). The friendNames array should contain the names of the users based on their IDs. Find the optimal place for this function so it's called as infrequently as possible. 
4. Create a user component called User that receives the following props: user (User object), onClick (function to be called when the user is clicked), and isSelected (boolean indicating if the user is selected).
5. Display the list of users on the users page using the User component. Show the user's name, email, and friend names in the component. When a user is clicked, update the selectedUser state variable to the ID of the clicked user.
6. Implement memoization for the User components to optimize performance. The components should only re-render when the user data is updated.
7. Implement searching functionality by name, ID, or friend's ID. Allow users to search for users by entering a query in an input field. Display only the users that match the search criteria. The search should be case-insensitive and match any part of the user's name, ID, or friend's ID.

## Notes:
- Please find commenting through out the code
- Some of the design choices are driven by this being an isolated assessment (rather than part of a larger code base) and the use of local mocked data as opposed to data fetched from an API.  This has impacted how some functions were written and which state design patterns were applied.  Where I've deviated from typical best practices, I've tried to use commenting to highlight.
- This is a standard create-react-app.  Clone to your local machine, and load dependencies with `npm install` and run with `npm run start`.
