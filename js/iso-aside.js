document.addEventListener("DOMContentLoaded", function () {

    const asideContainer = document.getElementById("system-aside");

    if (!asideContainer) {
        return;
    }

    fetch("system-aside.html")
        .then(response => {

            if (!response.ok) {
                throw new Error("system-aside.html을 불러오지 못했습니다.");
            }

            return response.text();

        })
        .then(data => {

            asideContainer.innerHTML = data;

        })
        .catch(error => {

            console.error("ISO 사이드 메뉴 로딩 오류:", error);

        });

});
