document.addEventListener("DOMContentLoaded", function () {
    var menuItems = [
        { id: "report", submenuId: "sub-reports" },
        { id: "usines", submenuId: "sub-usines" },
        { id: "lumobots", submenuId: "sub-lumobots" },
        { id: "team", submenuId: "sub-team" },
        { id: "myaccount", submenuId: "sub-myaccount" },
        { id: "management", submenuId: "sub-management" },
    ];

    function isMobileView() {
        return window.innerWidth <= 768;
    }

    function setUpMenuListeners() {
        menuItems.forEach(function (item) {
            var menuItem = document.getElementById(item.id);
            var submenu = document.getElementById(item.submenuId);
            var content = document.getElementById('content');

            function showSubmenu() {
                submenu.classList.add("visible");
                content.classList.add("shifted");
            }

            function hideSubmenu() {
                submenu.classList.remove("visible");
                content.classList.remove("shifted");
            }

            // Remove existing listeners to avoid duplication
            menuItem.removeEventListener("mouseover", showSubmenu);
            menuItem.removeEventListener("mouseout", hideSubmenu);
            submenu.removeEventListener("mouseover", showSubmenu);
            submenu.removeEventListener("mouseout", hideSubmenu);
            menuItem.removeEventListener("click", handleMenuClick);

            // Attach appropriate listeners based on the view
            if (!isMobileView()) {
                menuItem.addEventListener("mouseover", showSubmenu);
                menuItem.addEventListener("mouseout", function () {
                    if (!submenu.matches(":hover")) {
                        hideSubmenu();
                    }
                });

                submenu.addEventListener("mouseover", showSubmenu);
                submenu.addEventListener("mouseout", function () {
                    if (!menuItem.matches(":hover")) {
                        hideSubmenu();
                    }
                });
            }

            function handleMenuClick() {
                if (isMobileView()) {
                    if (submenu.classList.contains("visible")) {
                        hideSubmenu();
                    } else {
                        showSubmenu();
                    }
                }
            }

            menuItem.addEventListener("click", handleMenuClick);
        });
    }

    // Initial setup
    setUpMenuListeners();

    window.addEventListener('resize', function () {
        if (!isMobileView()) {
            // Ensure all submenus are hidden when switching from mobile to desktop
            document.querySelectorAll('.submenu').forEach(function (submenu) {
                submenu.classList.remove('visible');
            });
            document.getElementById('content').classList.remove('shifted');
        }
        // Re-setup listeners after resize
        setUpMenuListeners();
    });
});
