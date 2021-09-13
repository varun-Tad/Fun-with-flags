import React, { useState } from "react";
import "./styles.css";

const FlagDictionary = {
  "🇮🇳": "india",
  "🇦🇺": "Australia",
  "🇨🇦": "Canada",
  "🇺🇸": "America",
  "🇯🇵": "Japan",
  "🇰🇷": "South Korea",
  "🇱🇰": "Sri Lanka",
  "🇩🇪": "Germany",
  "🇮🇹 ": "Italy",
  "🇫🇷": "France"
};

var FlagsWeKnow = Object.keys(FlagDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function FlagInputHandler(event) {
    var userInput = event.target.value;

    var meaning = FlagDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function FlagClickHandler(emoji) {
    var meaning = FlagDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> inside outt!</h1>
      <input onChange={FlagInputHandler}></input>

      <h2>{meaning}</h2>

      <h3>Flags We know </h3>
      {FlagsWeKnow.map(function (Flag) {
        return (
          <span
            onClick={() => FlagClickHandler(Flag)}
            style={{
              fontSize: "2.5rem",
              padding: "0.5rem 0.5rem ",
              cursor: "pointer"
            }}
            key={Flag}
          >
            {Flag}
          </span>
        );
      })}
    </div>
  );
}
