const navlinkToggle = () => {
    const nav = document.getElementById('nav');
    const nav__list = document.getElementById('nav__list');
    const ham__burger = document.getElementById('ham__burger');

    ham__burger.addEventListener('click', () => {
        nav__list.classList.toggle('hide');
        nav.classList.toggle('nav_resp');
    });
};

navlinkToggle();