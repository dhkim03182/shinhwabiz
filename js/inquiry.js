import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


const form = document.getElementById("inquiry-form");

const emailId = document.getElementById("email-id");
const emailDomain = document.getElementById("email-domain");
const customDomain = document.getElementById("custom-domain");



/* =========================================
   이메일 도메인 직접입력
========================================= */

emailDomain.addEventListener("change", function () {

    if (this.value === "direct") {

        customDomain.style.display = "block";
        customDomain.required = true;

        customDomain.focus();

    } else {

        customDomain.style.display = "none";
        customDomain.required = false;
        customDomain.value = "";

    }

});



/* =========================================
   문의 폼 초기화
========================================= */

form.addEventListener("reset", function () {

    setTimeout(function () {

        customDomain.style.display = "none";
        customDomain.required = false;

    }, 0);

});



/* =========================================
   문의 제출
========================================= */

form.addEventListener("submit", async function (event) {

    event.preventDefault();


    /* HTML required 검사 */

    if (!form.checkValidity()) {

        form.reportValidity();

        return;

    }



    /* =====================================
       이메일 조합
    ===================================== */

    let email = "";

    const emailIdValue = emailId.value.trim();


    if (emailIdValue !== "") {

        let domain = "";


        if (emailDomain.value === "direct") {

            domain = customDomain.value.trim();

        } else {

            domain = emailDomain.value;

        }


        /* 이메일 아이디를 입력했는데 도메인을 선택하지 않은 경우 */

        if (domain === "") {

            alert("이메일 도메인을 선택해주세요.");

            emailDomain.focus();

            return;

        }


        email = `${emailIdValue}@${domain}`;

    }



    /* =====================================
       전송 확인
    ===================================== */

    const confirmed = confirm(
        "정말로 보내시겠습니까?"
    );


    if (!confirmed) {

        return;

    }



    /* =====================================
       입력값 가져오기
    ===================================== */

    const name =
        document.getElementById("name").value.trim();

    const company =
        document.getElementById("company").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const category =
        document.getElementById("category").value;

    const title =
        document.getElementById("title").value.trim();

    const message =
        document.getElementById("message").value.trim();



    /* =====================================
       Firebase Firestore 저장
    ===================================== */

    try {

        await addDoc(
            collection(db, "inquiries"),
            {

                name: name,

                company: company,

                phone: phone,

                email: email,

                category: category,

                title: title,

                message: message,

                createdAt: serverTimestamp()

            }
        );


        alert(
            "문의가 정상적으로 접수되었습니다."
        );


        form.reset();


    } catch (error) {

        console.error(
            "문의 저장 오류:",
            error
        );


        alert(
            "문의 접수 중 오류가 발생했습니다.\n" +
            "잠시 후 다시 시도해주세요."
        );

    }

});
