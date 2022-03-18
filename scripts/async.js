async function check_for_loaded_icons() {
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

check_for_loaded_icons().then(console.log);