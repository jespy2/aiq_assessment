// 7. Implement searching functionality by name, ID, or friend's ID. Allow users to search for users by entering a query in an input field. Display only the users that match the search criteria. The search should be case-insensitive and match any part of the user's name, ID, or friend's ID.
import React from "react";
import { SearchBarProps } from "../../types/index.types";

export const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  return (
    <div className="searchbar-container">
        <input type="text" placeholder="Search" onChange={onChange} />
    </div>
  )
}