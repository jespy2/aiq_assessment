import { User } from "../types/index.types";
import { sampleData } from "../mock-data/index";
// Note:  Importing sampleData like this is super weird!  I would normally use the fetch functionality to not only retrieve data, but to inject it into state.  Depending on the needs of the project, that could be using context, a state management library like Redux or component-level prop drilling.

// 2. Fetch the users' data from an API endpoint when the component mounts (fake fetch). The API response should be an array of User objects.
// Note:  Another option would be to use the fetch method, but I'm not sure how to mock that for the exercise.  This is what how that would look:
export const fetchUsers = async (users: User[]) => {
  try {
    const resp = await users;
    // standard error logic commented out for exercise
    // if (!Response.ok) {
      //throw new Error(`Response status: ${response.status}`)
    // }
    return resp;
  }
  catch (error) {
    // Would prefer have a more robust error handling solutions here such as logging to the backend, redirecting the user to an error page and/or giving the user an error message
    console.log("The following error occured: ", error)
  }
}

// 3. Implement a function called formatUser that takes a User object as input. This function should fill in two additional properties: friendNames (an array of all friends' names) and highestRankingFriend (the ID of the friend with the highest rank). The friendNames array should contain the names of the users based on their IDs. Find the optimal place for this function so it's called as infrequently as possible. 
export const formatUser = (user: User) => {
  const userRankIdMap: { [key: number]: string } = {}

  sampleData?.forEach(_user => {
    if (user.friends.includes(_user.id)) {
      if (user.friendNames === undefined) user.friendNames = [];
      user.friendNames.push(_user.name);
      userRankIdMap[_user.rank] = _user.id;
    };
  })

  const keysAsNums = Object.keys(userRankIdMap).length
    ? [...Object.keys(userRankIdMap).map(key => parseInt(key))]
    : null;

  user.highestRankingFriend = keysAsNums
    ? userRankIdMap[Math.min(...keysAsNums)]
    : undefined
  
  return user;
}
