// Fade the cards in as they scroll into view.
// The "js" class means: hide the cards only if this script is running,
// so without JavaScript everything is still visible.
document.documentElement.classList.add("js");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const card = entry.target;
      card.classList.add("is-visible");
      observer.unobserve(card);
      // once it has appeared, give the card back its normal hover effect
      card.addEventListener("transitionend", () => {
        card.classList.remove("reveal", "is-visible");
        card.style.transitionDelay = "";
      }, { once: true });
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((card, index) => {
  card.style.transitionDelay = `${(index % 4) * 80}ms`;
  observer.observe(card);
});
