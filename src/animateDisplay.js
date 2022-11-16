export default function animatedDisplay(value, onClick, animationTime) {
  if (!value) {
    return;
  }
  let count = 0;
  onClick("");
  let tempString = "";
  const buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("disabled");
  }
  let intervalID = setInterval(
    () => {
      //Show click animation on button
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.animation = "none";
        if (buttons[i].innerText === value[count]) {
          buttons[i].style.animation = `buttonAnimator ${
            animationTime / 1000
          }s`;
        }
      }
      tempString += value[count];
      onClick(tempString);
      count++;
      if (count >= value.length) {
        clearInterval(intervalID);
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove("disabled");
        }
      }
    },
    animationTime,
    count
  );
}
