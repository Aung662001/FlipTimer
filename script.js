const flipCard = document.querySelector(".flip-card");

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
    flip();
  });

  flipCard.append(topFlip, bottomFlip);
}
flip();
