function desktopNav() {
  const btn = document.querySelector(".header-nav--btn");
  const menu = document.querySelector(".header-nav--menu");
  if (btn && menu) {
    btn.addEventListener("click", function (e) {
      const isOpen = this.classList.contains("open");
      if (!isOpen) {
        this.classList.add("open");
        menu.style.display = "block";
      } else {
        this.classList.remove("open");
        menu.style.display = "none";
      }

      e.stopPropagation();
    });
  }

  document.addEventListener("mousedown", function (e) {
    if (
      btn.classList.contains("open") &&
      !btn.contains(e.target) &&
      !menu.contains(e.target)
    ) {
      btn.classList.remove("open");
      menu.style.display = "none";
    }
  });
}

desktopNav();
