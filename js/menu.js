document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       현재 페이지 확인
    ========================================= */

    let currentPage =
        window.location.pathname.split("/").pop();


    /*
        주소 마지막에 파일명이 없을 경우
        index.html로 처리
    */

    if (currentPage === "") {
        currentPage = "index.html";
    }



    /* =========================================
       상단 메뉴 서브메뉴
    ========================================= */

    const submenuLinks =
        document.querySelectorAll(".submenu a");


    submenuLinks.forEach(function (link) {


        const linkPage =
            link.getAttribute("href");


        /*
            현재 페이지와 링크가 같으면
            current 클래스 추가
        */

        if (linkPage === currentPage) {

            link.classList.add("current");

        }


    });



    /* =========================================
       왼쪽 사이드 메뉴
    ========================================= */

    const sideMenuLinks =
        document.querySelectorAll(".side-menu a");


    sideMenuLinks.forEach(function (link) {


        const linkPage =
            link.getAttribute("href");


        /*
            현재 페이지와 같은 메뉴 활성화
        */

        if (linkPage === currentPage) {

            link.parentElement.classList.add("active");

        }


    });


});
