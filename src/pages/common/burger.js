function burger() {
  const burger = document.querySelector(".header-burger");
  const header = document.querySelector(".header");

  if (burger && header) {
    burger.addEventListener("click", function () {
      const isMenuOpen = this.classList.contains("active");
      if (!isMenuOpen) {
        this.classList.add("active");
        header.classList.add("open");
        window.bodyScrollLock.disableBodyScroll(document.body, {
          allowTouchMove: () => true,
        });
      } else {
        this.classList.remove("active");
        header.classList.remove("open");
        window.bodyScrollLock.enableBodyScroll(document.body);
      }
    });
  }
}

burger();