const flipCard = document.querySelector(".flip-card");

const targetDate = new Date().setHours(new Date().getHours() + 1);
let remaningTimeInterval;
setInterval(() => {
  let currentDate = new Date();
  remainTime = Math.ceil((targetDate - currentDate) / 1000);
  if (remaningTimeInterval !== remainTime) {
    flipAllCard(remaningTimeInterval);
  }
  remaningTimeInterval = remainTime;
}, 200);
function flipAllCard(time) {
  let seconds = time % 60;
  let minutes = Math.floor((time / 60) % 60);
  let hours = Math.floor(time / 3600);
  console.log(seconds, minutes, hours);
}
function flip() {
  const topHalf = document.querySelector(".top");
  const bottomHalf = document.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  let startPoint = parseInt(topHalf.textContent);

  bottomHalf.innerText = startPoint;

  topFlip.innerText = startPoint;
  bottomFlip.innerText = startPoint - 1;

  topFlip.addEventListener("animationstart", () => {
    topHalf.innerText = startPoint - 1;
  });
  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.innerText = startPoint - 1;
    bottomFlip.remove();
  });

  flipCard.append(topFlip, bottomFlip);
}
