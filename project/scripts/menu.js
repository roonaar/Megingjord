/**
 * 
 * @param {string} name 
 */

export const Menu = (name) => {
    const nav = document.querySelector('nav');

    const menu = document.createElement('span');
    menu.classList.add('menu');
    const menu_icon = document.createElement('i');
    menu_icon.classList.add('fa-solid');
    menu_icon.classList.add('fa-bars');
    menu.appendChild(menu_icon);
    
    const breadcrumb = document.createElement('ul');
    breadcrumb.classList.add('breadcrumb');
    const home = document.createElement('li');
    const home_icon = document.createElement('i');
    home_icon.classList.add('fa-solid');
    home_icon.classList.add('fa-home');
    home.appendChild(home_icon);
    breadcrumb.appendChild(home);
    
    const user = document.createElement('span');
    user.classList.add('user');
    const user_name = document.createElement('span');
    user_name.classList.add('user-name');
    user_name.innerText = name;
    const user_image = document.createElement('img');
    user_image.setAttribute('src', './imgs/icons/user-solid.svg');
    const progress_bar = document.createElement('span');
    progress_bar.classList.add('progress-bar');
    user.appendChild(user_name);
    user.appendChild(user_image);
    user.appendChild(progress_bar);

    nav.appendChild(menu);
    nav.appendChild(breadcrumb);
    nav.appendChild(user);
}