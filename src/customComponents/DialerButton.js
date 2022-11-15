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

function clickAnimator(props, event) {
  event.target.classList.add("red");
  setTimeout(
    () => {
      event.target.classList.remove("red");
    },
    1000,
    event
  );
  props.value === "C"
    ? saveClearedValue(props)
    : props.value === "R"
    ? handleClearDisplay(props)
    : props.onClick(props.content + props.value);
}

export default function DialerButton(props) {
  return (
    <button
      className="dialerButton"
      onClick={(event) => clickAnimator(props, event)}
    >
      {props.value}
    </button>
  );
}
