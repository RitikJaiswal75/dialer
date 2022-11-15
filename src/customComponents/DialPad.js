import DialerButton from "./DialerButton";

export default function DialPad(props) {
  const rows = [];
  for (let i = 1; i <= 9; i++) {
    rows.push(
      <DialerButton
        key={i}
        value={i}
        onClick={props.onClick}
        content={props.value}
      />
    );
    if (i % 3 === 0) {
      rows.push(<br key={"br" + i} />);
    }
  }
  rows.push(
    <DialerButton
      key={10}
      value={"R"}
      onClick={props.onClick}
      content={props.value}
    />,
    <DialerButton
      key={11}
      value={0}
      onClick={props.onClick}
      content={props.value}
    />,
    <DialerButton
      key={12}
      value={"C"}
      onClick={props.onClick}
      content={props.value}
    />
  );
  return <div className="dialPad">{rows}</div>;
}
