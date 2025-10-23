const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Function to limit the button movement within the viewport with padding
function moveNoBtn() {
  const padding = 20;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  let x = Math.random() * maxX;
  let y = Math.random() * maxY;

  // On small screens, keep the button fixed at bottom left
  if (window.innerWidth <= 600) {
    noBtn.style.left = "10px";
    noBtn.style.bottom = "60px";
    noBtn.style.top = "auto";
    noBtn.style.position = "fixed";
  } else {
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.bottom = "auto";
  }
}

noBtn.addEventListener("mouseover", moveNoBtn);

// Create floating hearts when Yes is clicked
yesBtn.addEventListener("click", () => {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "50vh";
    heart.style.animationDuration = Math.random() * 2 + 1 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }

  yesBtn.textContent = "Yay! Can’t wait 💞";
  noBtn.style.display = "none";
});
