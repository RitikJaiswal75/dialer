import React, { useState } from "react";
import Display from "./Display";
import DialPad from "./DialPad";

export default function Dialer(props) {
  const params = new URLSearchParams(window.location.search);
  const [content, setContent] = useState(params.get("q"));

  return (
    <>
      <Display value={content} />
      <DialPad onClick={setContent} value={content} />
    </>
  );
}
