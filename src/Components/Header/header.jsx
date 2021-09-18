import React from "react";
import "./header.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import categories from "../../categories";

const Header = ({ category, setcategory, word, setword }) => {
  const handleChange = (language) => {
    setcategory(language);
    setword("");
  };
  return (
    <div id="header">
      <div id="title">
        <h1>No Pun Intended</h1>
      </div>
      <div id="inputs">
        <TextField
          id="search"
          label="Search for a word"
          value={word}
          onChange={(e) => setword(e.target.value)}
        />
        <TextField
          id="select"
          select
          label="Language"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
        >
          {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
};

export default Header;
