const flipCard = document.querySelector(".flip-card");

const targetDate = new Date().setHours(new Date().getHours() + 24);
setInterval(() => {
  let currentDate = new Date();
  remainTime = Math.ceil((targetDate - currentDate) / 1000);
  flipAllCard(remainTime);
}, 200);
function flipAllCard(time) {
  let seconds = time % 60; //second between 0 and 59
  let minutes = Math.floor((time / 60) % 60);
  let hours = Math.floor(time / 3600);

  flip(document.querySelector("[data-hours-ten]"), Math.floor(hours / 10));
  flip(document.querySelector("[data-hours-one]"), hours % 10);

  flip(document.querySelector("[data-minutes-ten]"), Math.floor(minutes / 10));
  flip(document.querySelector("[data-minutes-one]"), minutes % 10);

  flip(document.querySelector("[data-seconds-ten]"), Math.floor(seconds / 10));
  flip(document.querySelector("[data-seconds-one]"), seconds % 10);
}
function flip(element, realFlipTime) {
  const topHalf = element.querySelector(".top");
  const bottomHalf = element.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  let startPoint = parseInt(topHalf.textContent);
  if (startPoint === realFlipTime) return;
  bottomHalf.innerText = startPoint;

  topFlip.innerText = startPoint;
  bottomFlip.innerText = realFlipTime;

  topFlip.addEventListener("animationstart", () => {
    topHalf.innerText = realFlipTime;
  });
  topFlip.addEventListener("animationend", () => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.innerText = realFlipTime;
    bottomFlip.remove();
  });

  element.append(topFlip, bottomFlip);
}
