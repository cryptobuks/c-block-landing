function burger() {
  const burger = document.querySelector(".header-burger");
  const header = document.querySelector(".header");
  const headerMenuMobile = document.querySelector(".header-menu-mobile");

  const openMenu = () => {
    burger.classList.add("active");
    header.classList.add("open");
    window.bodyScrollLock.disableBodyScroll(document.body, {
      allowTouchMove: () => true,
    });
  };
  const closeMenu = () => {
    burger.classList.remove("active");
    header.classList.remove("open");
    window.bodyScrollLock.enableBodyScroll(document.body);
  };

  if (burger && header && headerMenuMobile) {
    burger.addEventListener("click", function () {
      const isMenuOpen = burger.classList.contains("active");
      if (!isMenuOpen) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    headerMenuMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  }
}

burger();