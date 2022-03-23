/**
 * 
 * @param {string} name 
 * @param {string} department 
 * @param {string} role 
 */

export const Profile = (name, department, role) => {
    const main = document.querySelector('main');

    const profile = document.createElement('div');
    profile.classList.add('profile');

    const picture = document.createElement('div');
    picture.classList.add('picture');
    const level = document.createElement('span');
    level.classList.add('lvl');
    level.innerText = 'Landkrabbe';
    const progress_bar = document.createElement('span');
    progress_bar.classList.add('progress-bar');
    const image = document.createElement('img');
    image.setAttribute('src', './imgs/icons/user-solid.svg')
    
    picture.appendChild(level);
    picture.appendChild(progress_bar);
    picture.appendChild(image);

    const details = document.createElement('div');
    details.classList.add('details');
    const m_name = document.createElement('p');
    m_name.classList.add('name');
    m_name.innerText = name;
    const m_department = document.createElement('p');
    m_department.classList.add('department');
    m_department.innerText = department;
    const divider = document.createElement('span');
    divider.innerText = ' / ';
    const m_role = document.createElement('p');
    m_role.classList.add('role');
    m_role.innerText = role;

    details.appendChild(m_name);
    details.appendChild(m_department);
    details.appendChild(divider);
    details.appendChild(m_role);

    profile.appendChild(picture);
    profile.appendChild(details);

    main.appendChild(profile);
}