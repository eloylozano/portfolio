
window.addEventListener("DOMContentLoaded", () => {
  

  const scrollContainer = document.querySelector('.scroll-container');
  console.log('scrollContainer:', scrollContainer);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        const line = document.querySelector(`.scroll-nav [data-section="${id}"]`);

        if (entry.isIntersecting) {
          console.log('Visible section:', id);
          document.querySelectorAll(".scroll-nav .line").forEach(el => el.classList.remove("active"));
          line?.classList.add("active");
        }
      });
    },
    {
      threshold: 0.6,
      root: scrollContainer,
    }
  );

  ["home", "about", "projects", "contact"].forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      console.log('Observando:', id);
      observer.observe(section);
    }
  });
});
