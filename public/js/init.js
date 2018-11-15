document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    elems = document.querySelectorAll('.materialboxed');
    instances = M.Materialbox.init(elems);
    elems = document.querySelectorAll('select');
    instances = M.FormSelect.init(elems);
    elems = document.querySelectorAll('.datepicker');
    instances = M.Datepicker.init(elems, {
        format: 'dddd dd, mmmm, yyyy',
        firstDay: 1,
        yearRange: 2,
        minDate: new Date(),
        i18n: {
            months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
            weekdays: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            weekdaysAbbrev: ["D", "L", "M", "M", "J", "V", "S"]
        }
    });
    elem = document.querySelector('.carousel');
    let instance = M.Carousel.init(elem, {fullWidth: true, indicators: true});
    console.log(elem);
    let autoplay = true;
    setInterval(function () {
        if (autoplay) instance.next();
    }, 4500);
    elem.addEventListener('mouseenter', (event) => {
        autoplay = false;
    });
    elem.addEventListener('mouseleave', function () {
        autoplay = true
    });
});