const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// Make the No button run away on hover
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

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
