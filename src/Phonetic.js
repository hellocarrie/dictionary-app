import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <br />
      <audio controls>
        <source src={props.phonetic.audio} />
        Listen
      </audio>

      <br />
      {props.phonetic.text}
    </div>
  );
}
