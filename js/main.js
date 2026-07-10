(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.querySelector(".mobile-nav__close");

  const openNav = () => {
    mobileNav?.classList.add("is-open");
    toggle?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  const closeNav = () => {
    mobileNav?.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };

  toggle?.addEventListener("click", openNav);
  closeBtn?.addEventListener("click", closeNav);
  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  // Scroll reveals
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }
})();
