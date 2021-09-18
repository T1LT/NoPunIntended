import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, flag }) => {
  return (
    <div id="meanings">
      {flag ? (
        <center>
          <span id="subtitle">No meanings found!</span>
        </center>
      ) : word === "" ? (
        <center>
          <span id="subtitle">Start by typing a word in search</span>
        </center>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div id="singleMean">
                <div id="def">{def.definition}</div>
                {def.example && (
                  <span>
                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                    <h2>Example:</h2> {def.example}
                    <br />
                  </span>
                )}
                {def.synonyms.length ? (
                  <span>
                    <h2>Synonyms:</h2> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                ) : null}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
