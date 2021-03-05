function toggleBurgerBtn(btn){
    btn.classList.toggle('nav__burger-btn--opened');
    toggleBurgerWindow();
}

function toggleBurgerWindow() {
    let BurgerWindow = document.querySelector('.site-nav');
    BurgerWindow.classList.toggle('site-nav--opened');
}