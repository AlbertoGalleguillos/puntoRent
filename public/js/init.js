document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    elems = document.querySelectorAll('.carousel');
    instances = M.Carousel.init(elems, {indicators: true});
    elems = document.querySelectorAll('.materialboxed');
    instances = M.Materialbox.init(elems);
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);

    var instance = M.Carousel.getInstance(document.querySelector('.carousel'));
    var timerId = setTimeout(() => instance.next(), 6000);
    var timerId = setTimeout(() => instance.next(), 12000);
    //instance.next();
});