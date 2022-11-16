import DialerButton from "./DialerButton";

export default function DialPad(props) {
  const rows = [];
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, "R", 0, "C"];
  for (let i = 0; i < buttons.length; i++) {
    rows.push(
      <DialerButton
        key={i}
        value={buttons[i]}
        onClick={props.onClick}
        content={props.value}
        animationtime={props.animationtime}
      />
    );
    if ((i + 1) % 3 === 0) {
      rows.push(<br key={"br" + i} />);
    }
  }
  return <div className="dialPad">{rows}</div>;
}
