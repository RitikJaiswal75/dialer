export default function DisplayTime(props) {
  const timeStamp = new Date(props.time);
  let convertedTime =
    timeStamp.getHours() +
    ":" +
    timeStamp.getMinutes() +
    ":" +
    timeStamp.getSeconds();
  return <p className="time">Current Time: {convertedTime}</p>;
}
