import React, { useState } from "react";
import Display from "./Display";
import DialPad from "./DialPad";

function paramsFilter() {
  let newParams = "";
  let params = new URLSearchParams(window.location.search);
  if (params.has("q")) {
    for (let i = 0; i < params.get("q").length; i++) {
      if (parseInt(params.get("q")[i])) {
        newParams += params.get("q")[i];
      }
    }
  }
  return newParams;
}

export default function Dialer(props) {
  const [content, setContent] = useState(paramsFilter);

  return (
    <>
      <Display value={content} />
      <DialPad onClick={setContent} value={content} />
    </>
  );
}
