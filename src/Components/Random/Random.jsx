import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import axios from "axios";

const Random = ({ setword }) => {
  const handleClick = async () => {
    try {
      const data = await axios.get(
        "https://random-word-api.herokuapp.com/word"
      );
      setword(data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: grey[700],
    },
  }));
  return (
    <div
      id="randombutton"
      style={{ display: "flex", flexDirection: "column", marginBottom: "5vh" }}
    >
      <center>
        <ColorButton variant="contained" color="primary" onClick={handleClick}>
          Random Word
        </ColorButton>
      </center>
    </div>
  );
};

export default Random;
