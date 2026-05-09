const revealElements = document.querySelectorAll(".reveal");
const tiltCards = document.querySelectorAll(".tilt-card");
const copyBtn = document.getElementById("copyDiscord");
const copyMessage = document.getElementById("copyMessage");
const discordText = document.getElementById("discordText");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("main section[id]");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else if (entry.boundingClientRect.top > 0) {
        entry.target.classList.remove("visible");
      }
    });
  },
  { threshold: 0.16 }
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

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || !targetId.startsWith("#")) return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href === `#${entry.target.id}`);
      });
    });
  },
  {
    threshold: 0.45
  }
);

sections.forEach((section) => navObserver.observe(section));

if (copyBtn && copyMessage && discordText) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(discordText.textContent.trim());
      copyMessage.textContent = "Discord ID copied to clipboard.";
    } catch (error) {
      copyMessage.textContent = "Clipboard blocked. Please copy manually.";
    }
  });
}
