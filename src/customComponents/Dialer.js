import React, { useState } from "react";
import Display from "./Display";
import DialPad from "./DialPad";

export default function Dialer(props) {
  const [content, setContent] = useState("");

  return (
    <>
      <Display value={content} />
      <DialPad onClick={setContent} value={content} />
    </>
  );
}
