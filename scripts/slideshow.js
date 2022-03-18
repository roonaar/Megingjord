/**
 *  
 * @param {string} id - ID tag of host element
 * @description Initializes a slideshow in a host element
 * 
 */
export function SlideShow(id) {
    const host_el = document.getElementById(id);
    let slide_index = 1;
    const slides = host_el.querySelectorAll('.slide');
    const dots = host_el.querySelectorAll('.dot');

    function init() {
        show_slides();
        enable_touch();
        check_for_loaded_icons().then(() => {
            enable_buttons()
        }); //Wait for icon resources to load first
    };

    function show_slides(n) {
        if (n > slides.length) {slide_index = 1;}
        if (n < 1) {slide_index = slides.length;}
        slides.forEach(((e) => {e.style.display = 'none'}));
        dots.forEach((e) => {e.className = e.className.replace(' active', '')});
        slides[slide_index-1].style.display = 'flex';
        dots[slide_index-1].className += ' active';
    }

    function enable_touch() {
        const input_threshold = 40;
        let start_x = 0;
        host_el.addEventListener("touchstart", (e) => {
            start_x = e.touches[0].clientX;
        }, false);
        host_el.addEventListener("touchend", (e) => {
            const end_x = e.changedTouches[0].clientX;
            const delta_x = Math.abs(start_x - end_x);
            if (delta_x > input_threshold) {
                if (start_x > end_x) {
                    change_slide(1);
                }
                if (start_x < end_x) {
                    change_slide(-1);
                }
        }
        }, false);
    }

    const check_for_loaded_icons = async() => {
        const done = document.documentElement.classList.contains('fontawesome-i2svg-complete');
        if (done) {
            console.log('done')
            return Promise.resolve(done);
        } else {
            console.log('retry');
            await new Promise(resolve => setTimeout(resolve, 5));
            return check_for_loaded_icons();
        }
    }

    function enable_buttons() {
        const prev_btn = host_el.querySelectorAll('.prev-btn')[0];
        const next_btn = host_el.querySelectorAll('.next-btn')[0];
        prev_btn.addEventListener("click", () => {change_slide(-1)}, false);
        next_btn.addEventListener("click", () => {change_slide(1)}, false);
        dots.forEach((e, i) => {
            e.addEventListener("click", () => {
                set_slide(i+1)}, false);});
    }

    function change_slide(n) {
        show_slides(slide_index += n);
    }

    function set_slide(n) {
        show_slides(slide_index = n);
    }

    return init();
}