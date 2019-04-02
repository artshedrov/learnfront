let linkLogin = document.querySelector(".login-link");
let popupLogin = document.querySelector(".modal-login");
let closeModal = popupLogin.querySelector(".modal-close");
let login = popupLogin.querySelector("[name=login]");
let password = popupLogin.querySelector("[name=password]");
let form = popupLogin.querySelector("form");

let isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("login");
} catch (e) {
    isStorageSupport =false;
}

linkLogin.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupLogin.classList.add("modal-show");

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

closeModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupLogin.classList.remove("modal-show");
    popupLogin.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popupLogin.classList.remove("modal-error");
        popupLogin.offsetWidth = popupLogin.offsetWidth;
        popupLogin.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupLogin.classList.contains("modal-show")) {
            popupLogin.classList.remove("modal-show");
            popupLogin.classList.remove("modal-error");
        }
    }
});


let mapLink = document.querySelector(".contacts-button-map");
let mapPopup = document.querySelector(".modal-map");
let mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});


