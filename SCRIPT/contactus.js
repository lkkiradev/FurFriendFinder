document.addEventListener('DOMContentLoaded', function() {
    var icons = document.querySelectorAll('.card > .row > .icon1, .card > .row > .icon2, .card > .row > .icon3');

    icons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            this.classList.toggle('clicked');
        });
    });
});
