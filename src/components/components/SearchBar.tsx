import React from "react";
import { SearchBarProps } from "../../types/index.types";

export const SearchBar: React.FC<SearchBarProps> = ({ onChange }) => {
  return (
    <div className="searchbar-container">
        <input type="text" placeholder="Search" onChange={onChange} />
    </div>
  )
}
