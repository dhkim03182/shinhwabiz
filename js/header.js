/* =========================================
   HEADER 불러오기
========================================= */

fetch("/shinhwabiz/include/header.html")
    .then(response => {

        if (!response.ok) {
            throw new Error(
                "헤더를 불러오지 못했습니다. 상태코드: " +
                response.status
            );
        }

        return response.text();

    })
    .then(data => {

        const headerContainer =
            document.getElementById("header-container");

        if (!headerContainer) {
            console.error(
                "header-container를 찾을 수 없습니다."
            );
            return;
        }

        headerContainer.innerHTML = data;

        initMobileMenu();

    })
    .catch(error => {

        console.error(
            "Header loading error:",
            error
        );

    });



/* =========================================
   모바일 메뉴 초기화
========================================= */

function initMobileMenu() {

    const menuButton =
        document.getElementById("mobile-menu-btn");

    const nav =
        document.getElementById("main-nav");

    if (!menuButton || !nav) {
        return;
    }


    /* =====================================
       햄버거 버튼
    ====================================== */

    menuButton.addEventListener("click", function () {

        const isOpen =
            nav.classList.toggle("mobile-open");

        menuButton.classList.toggle(
            "active",
            isOpen
        );

        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "메뉴 닫기" : "메뉴 열기"
        );

    });


    /* =====================================
       메인 메뉴
    ====================================== */

    const mainMenuItems =
        nav.querySelectorAll(":scope > ul > li");


    mainMenuItems.forEach(function (item) {

        const mainLink =
            item.querySelector(
                ":scope > .main-menu-link"
            );

        const submenu =
            item.querySelector(
                ":scope > .submenu"
            );


        if (!mainLink || !submenu) {
            return;
        }


        mainLink.addEventListener(
            "click",
            function (event) {

                if (window.innerWidth <= 768) {

                    event.preventDefault();

                    const isOpen =
                        item.classList.contains(
                            "submenu-open"
                        );


                    /* 다른 메뉴 닫기 */

                    mainMenuItems.forEach(
                        function (otherItem) {

                            otherItem.classList.remove(
                                "submenu-open"
                            );

                        }
                    );


                    /* 현재 메뉴 열기 */

                    if (!isOpen) {

                        item.classList.add(
                            "submenu-open"
                        );

                    }

                }

            }
        );

    });


    /* =====================================
       서브메뉴 클릭
    ====================================== */

    const submenuLinks =
        nav.querySelectorAll(".submenu a");


    submenuLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (window.innerWidth <= 768) {

                    closeMobileMenu();

                }

            }
        );

    });


    /* =====================================
       바깥 영역 클릭
    ====================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                window.innerWidth <= 768 &&
                nav.classList.contains("mobile-open") &&
                !nav.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================
       화면 크기 변경
    ====================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 768) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================
       메뉴 닫기
    ====================================== */

    function closeMobileMenu() {

        nav.classList.remove(
            "mobile-open"
        );

        menuButton.classList.remove(
            "active"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "메뉴 열기"
        );


        mainMenuItems.forEach(
            function (item) {

                item.classList.remove(
                    "submenu-open"
                );

            }
        );

    }

}
