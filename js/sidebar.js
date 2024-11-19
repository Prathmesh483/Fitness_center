document.querySelectorAll(".menu ul li").forEach((menu) => {
  menu.addEventListener("click", function () {
    // Close other menus
    document.querySelectorAll(".main-menu").forEach((otherMenu) => {
      if (otherMenu !== menu) {
        otherMenu.style.backgroundColor = "";
        const otherSubMenu = otherMenu.querySelector(".sub-menu");
        if (otherSubMenu) otherSubMenu.style.display = "none";
      }
    });

    // Toggle the current submenu
    const subMenu = menu.querySelector(".sub-menu");
    if (subMenu) {
      const isOpen = subMenu.style.display === "block";
      menu.style.backgroundColor = isOpen ? "" : "#5d5d5d";
      subMenu.style.display = isOpen ? "none" : "block";
    }
  });
});

// Close all menus when clicking outside
document.addEventListener("click", (e) => {
  const sidebar = document.querySelector(".sidebar");
  if (!sidebar.contains(e.target)) {
    document.querySelectorAll(".sub-menu").forEach((menu) => {
      menu.style.display = "none";
    });
    document.querySelectorAll(".main-menu").forEach((menu) => {
      menu.style.backgroundColor = "";
    });
  }
});
