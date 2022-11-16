import animatedDisplay from "../animateDisplay";

function saveClearedValue(element) {
  localStorage.setItem("previousValue", element.content);
  element.onClick("");
}

function handleRedial(props) {
  if (props.content) {
    animatedDisplay(props.content, props.onClick, props.animationtime);
  } else {
    animatedDisplay(
      localStorage.getItem("previousValue"),
      props.onClick,
      props.animationtime
    );
  }
}

function clickAnimator(props, event) {
  event.target.style.animation = `buttonAnimator ${
    props.animationtime / 1000
  }s`;
  setTimeout(
    () => {
      event.target.style.animation = "none";
    },
    props.animationtime,
    event
  );
  props.value === "C"
    ? saveClearedValue(props)
    : props.value === "R"
    ? handleRedial(props)
    : props.onClick(props.content + props.value);
}

export default function DialerButton(props) {
  console.log();
  return (
    <button
      className="dialerButton"
      onClick={(event) => clickAnimator(props, event)}
    >
      {props.value}
    </button>
  );
}
