document.addEventListener("DOMContentLoaded", function () {

    const headerContainer =
        document.getElementById("header-container");

    if (!headerContainer) {
        return;
    }

    const headerPath =
        new URL("../include/header.html", document.currentScript.src);

    fetch(headerPath)
        .then(response => {

            if (!response.ok) {
                throw new Error("header.html을 불러오지 못했습니다.");
            }

            return response.text();

        })
        .then(data => {

            headerContainer.innerHTML = data;

        })
        .catch(error => {

            console.error(error);

        });

});
