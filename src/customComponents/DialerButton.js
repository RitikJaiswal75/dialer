import animatedDisplay from "../animateDisplay";

function saveClearedValue(element) {
  localStorage.setItem("previousValue", element.content);
  element.onClick("");
}

function handleClearDisplay(props) {
  if (props.content) {
    animatedDisplay(props.content, props.onClick);
  } else {
    animatedDisplay(localStorage.getItem("previousValue"), props.onClick);
  }
}

export default function DialerButton(props) {
  return (
    <button
      className="dialerButton"
      onClick={() => {
        props.value === "C"
          ? saveClearedValue(props)
          : props.value === "R"
          ? handleClearDisplay(props)
          : props.onClick(props.content + props.value);
      }}
    >
      {props.value}
    </button>
  );
}
