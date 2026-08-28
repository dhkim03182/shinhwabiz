fetch("system-aside.html")
    .then(response => response.text())
    .then(data => {

        const asideContainer =
            document.getElementById("system-aside");

        asideContainer.innerHTML = data;


        // 현재 페이지 확인
        const currentPage =
            window.location.pathname.split("/").pop();


        // 메뉴 가져오기
        const menuLinks =
            asideContainer.querySelectorAll(
                ".iso-aside-menu a"
            );


        menuLinks.forEach(link => {

            const linkPage =
                link.getAttribute("href");


            if (linkPage === currentPage) {

                link.parentElement.classList.add("active");

            }

        });

    })
    .catch(error => {

        console.error(
            "시스템 aside 불러오기 오류:",
            error
        );

    });
