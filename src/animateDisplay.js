export default function animatedDisplay(value, onClick) {
  let count = 0;
  onClick("");
  let tempString = "";
  document.getElementsByTagName("button")[11].classList.add('disabled')
  let intervalID = setInterval(
    () => {
      const buttons = document.getElementsByTagName("button");
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("red");
        if (buttons[i].innerText === value[count]) {
          buttons[i].classList.add("red");
        }
      }
      tempString += value[count];
      onClick(tempString);
      count++;
      if (count >= value.length) {
        clearInterval(intervalID);
        buttons[11].classList.remove('disabled')
      }
    },
    1000,
    count
  );
}
