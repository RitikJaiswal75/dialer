import React, { useState } from "react";
import Display from "./Display";
import DialPad from "./DialPad";
import TimeInput from "./TimeInput";

function paramsFilter() {
  let newParams = "";
  let params = new URLSearchParams(window.location.search);
  if (params.has("q")) {
    for (let i = 0; i <= params.get("q").length; i++) {
      if (parseInt(params.get("q")[i]) >= 0) {
        newParams += params.get("q")[i];
      }
    }
  }
  return newParams;
}

export default function Dialer(props) {
  const [content, setContent] = useState(paramsFilter);
  const [animationTime, setAnimationTime] = useState(1000);
  let params = new URLSearchParams(window.location.search);
  let devMode;
  if (params.has("dev")) {
    devMode = params.get("dev");
  }
  return (
    <>
      {devMode === "true" ? (
        <TimeInput value={animationTime} OnChange={setAnimationTime} />
      ) : null}
      <br />
      <Display value={content} />
      <DialPad
        onClick={setContent}
        value={content}
        animationtime={animationTime}
      />
    </>
  );
}
