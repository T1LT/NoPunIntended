import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Container from "@mui/material/Container";
import Header from "./Components/Header/header";
import "./style.css";
import "./reset.css";
import Definitions from "./Components/Definitions/Definitions";
import axios from "axios";
import Random from "./Components/Random/Random";

const Main = () => {
  const [word, setword] = useState("");
  const [meanings, setmeanings] = useState([]);
  const [category, setcategory] = useState("en");
  const [flag, setflag] = useState(0);
  const dictionaryApi = async () => {
    try {
      if (word !== "") {
        const apidata = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        );
        setmeanings(apidata.data);
        setflag(0);
        console.log(apidata);
      }
    } catch (error) {
      console.log(error);
      setmeanings([]);
      setflag(1);
    }
  };
  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, category, flag]);
  return (
    <div id="main">
      <div id="background"></div>
      <Container maxWidth="md" id="container">
        <Header
          category={category}
          setcategory={setcategory}
          word={word}
          setword={setword}
        />
        <Random setword={setword} />
        {meanings && (
          <Definitions word={word} meanings={meanings} flag={flag} />
        )}
      </Container>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
