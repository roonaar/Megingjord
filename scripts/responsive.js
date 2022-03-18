function toggle_menu() {
    const el = document.getElementById('nav-drop-down');
    const elStyles = window.getComputedStyle(el);
    const icon = document.getElementsByClassName('nav-opener')[0];
    if (elStyles.display === 'none') {
        el.style.display = 'block';
        icon.classList.replace("fa-bars", "fa-angle-up");
    } else {
        el.style.display = 'none';
        icon.classList.replace("fa-angle-up", "fa-bars");
    }
}

/**
 * @param {string} id - ID of modal
 */
function toggle_modal_by_ID(id) {
    const el = document.getElementById(id);
    const elStyles = window.getComputedStyle(el);
    if (elStyles.display === 'none') {
        el.style.display = 'block';
        el.focus();
    } else {
        el.style.display = 'none';
        document.getElementById('nav-drop-down').focus();
    }
}

function scroll_to_top() {
    const options = {top: 0, left: 0, behavior: 'smooth'};
    window.scrollTo(options);
}

/**
 * @param {string} id - ID of element
 */
function scroll_to_element_by_ID (id) {
    const el = document.getElementById(id);
    const options = {behavior: 'smooth'};
    el.scrollIntoView(options);
    el.focus();
}

/**
 * Get info about opening hrs from JSON-file and display it
 * @param {string} file - Name of JSON-file
 */
async function open_hrs_info(file) {
    const today = new Date();
    const day = today.getDay();
    const hr = today.getHours();

    let header = new Headers();
    header.append('credentials', 'omit');

    const options = {
        method: 'GET',
        headers: header,
        mode: 'cors',
        cache: 'default'
    };

    const url = "https://" + window.location.hostname + "/jsons/" + file;

    const request = new Request(url, options);

    const response = await fetch(request);

    const open_hrs = await response.json();

    const open_hr = open_hrs['day'][day]['hrs'][0];
    const next_open_hr = open_hrs['day'][day + 1]['hrs'][0];
    const close_hr = open_hrs['day'][day]['hrs'][1];

    let el = document.getElementById('open-hrs');

    const icon = "<i class=\"fa-solid fa-clock fa-xl\"></i>"

    if (open_hr === undefined) {
        el.innerHTML = icon + " Åpner tirsdag kl 10";
    } else if (hr < open_hr) {
        el.innerHTML = icon + " Åpner kl " + open_hr;
    } else if (hr >= close_hr) {
        if (day > 3){
            el.innerHTML = icon + " Åpner tirsdag kl 10";
        } else if (day > 0) {
            el.innerHTML = icon + " Åpner i morgen kl " + next_open_hr;
        }
    } else {
        el.innerHTML = icon + " Åpent til kl " + close_hr;
    }
}