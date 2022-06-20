(async () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const coordsEl = document.querySelector('#user-coords');
            coordsEl.textContent = `${position.coords.longitude}, ${position.coords.longitude}`
            coordsEl.parentElement.classList.remove('invisible');
        });
    }

})();