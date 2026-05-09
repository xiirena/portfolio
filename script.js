const revealElements = document.querySelectorAll(".reveal");
const tiltCards = document.querySelectorAll(".tilt-card");
const copyBtn = document.getElementById("copyDiscord");
const copyMessage = document.getElementById("copyMessage");
const discordText = document.getElementById("discordText");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => revealObserver.observe(el));

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
  });
});

if (copyBtn && copyMessage && discordText) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(discordText.textContent.trim());
      copyMessage.textContent = "Copied to clipboard.";
    } catch (error) {
      copyMessage.textContent = "Could not copy automatically. Please copy manually.";
    }
  });
}
