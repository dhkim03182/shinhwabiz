document.addEventListener("DOMContentLoaded", function () {

    const headerContainer =
        document.getElementById("header-container");

    if (!headerContainer) {
        return;
    }


    /*
    =========================================
    header.html 불러오기
    =========================================

    현재 페이지가 어느 폴더에 있든
    신화비즈 사이트의 루트 기준으로
    include/header.html을 찾도록 설정
    */

    fetch("/include/header.html")

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "header.html을 불러오지 못했습니다."
                );

            }

            return response.text();

        })

        .then(data => {

            headerContainer.innerHTML = data;

        })

        .catch(error => {

            console.error(
                "헤더 로딩 오류:",
                error
            );

        });

});
