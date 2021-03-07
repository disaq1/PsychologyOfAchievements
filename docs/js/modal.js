let popup = document.getElementById('popup');
let popupToggle = document.getElementById('btnPopup');
let popupClose = document.querySelector('.close');

popupToggle.onclick = function() {
    popup.classList.add('popup--opened');
};

popupClose.onclick = function() {
    popup.classList.remove('popup--opened');
};

window.onclick = function(e) {
    if(e.target == popup) {
        popup.classList.remove('popup--opened');
    }
}