import React from "react";

export default function TimeInput(props) {
  return (
    <>
      <label htmlFor="time">Set your animation Time:</label>
      <br />
      <input
        type="number"
        name="time"
        value={props.value}
        onChange={(event) => props.OnChange(event.target.value)}
      />
    </>
  );
}
