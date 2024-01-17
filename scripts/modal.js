function toggle_modal_by_ID(id) {
    const el = document.getElementById(id);
    const elStyles = window.getComputedStyle(el);
    if (elStyles.display === 'none') {
        el.style.display = 'block';
        el.focus();
    } else {
        el.style.display = 'none';
    }
}