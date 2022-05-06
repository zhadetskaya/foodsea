window.onload = function () {

    const swiper = new Swiper('.swiper', {
        // direction: 'vertical',
        loop: true,
        dots: false,
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // type: 'fraction',
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        slidesPerView: '1',
        spaceBetween: 100,
        effect: "fade",
        preloadImages: false,
    });


// Инициализация превью слайдера
    const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
        // задаем параметры
        direction: 'vertical', // вертикальная прокрутка
        slidesPerView: 6, // показывать по 3 превью
        spaceBetween: 24, // расстояние между слайдами
        navigation: { // задаем кнопки навигации
            nextEl: '.slider__next', // кнопка Next
            prevEl: '.slider__prev' // кнопка Prev
        },
        freeMode: true, // при перетаскивании превью ведет себя как при скролле
        breakpoints: { // условия для разных размеров окна браузера
            0: { // при 0px и выше
                direction: 'horizontal', // горизонтальная прокрутка
            },
            768: { // при 768px и выше
                direction: 'vertical', // вертикальная прокрутка
            }
        }
    });
// Инициализация слайдера изображений
    const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
        // задаем параметры
        direction: 'vertical', // вертикальная прокрутка
        slidesPerView: 1, // показывать по 1 изображению
        spaceBetween: 32, // расстояние между слайдами
        mousewheel: true, // можно прокручивать изображения колёсиком мыши
        navigation: { // задаем кнопки навигации
            nextEl: '.slider__next', // кнопка Next
            prevEl: '.slider__prev' // кнопка Prev
        },
        grabCursor: true, // менять иконку курсора
        thumbs: { // указываем на превью слайдер
            swiper: sliderThumbs // указываем имя превью слайдера
        },
        effect: "fade",
        breakpoints: { // условия для разных размеров окна браузера
            0: { // при 0px и выше
                direction: 'horizontal', // горизонтальная прокрутка
            },
            768: { // при 768px и выше
                direction: 'vertical', // вертикальная прокрутка
            }
        }
    });


    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu');
    let close = document.querySelector('.map__close');
    let cls = document.querySelector('.menu__close');
    let address = document.querySelector('.address__link');
    let map = document.querySelector('.map');
    let menuItem = document.querySelectorAll('.menu__item');
    let product = document.querySelectorAll('.product__content-btn');
    let order = document.querySelector('.order');
    let orderCls = document.querySelector('.order__close');
    let body = document.body;


    function toggleScrollON() {
        body.classList.add('no-scroll');
    }
    function toggleScrollOff() {
        body.classList.remove('no-scroll');
    }

    burger.addEventListener('click', function () {
        menu.classList.add('active');
        toggleScrollON();
    })
    cls.addEventListener('click', function () {
        menu.classList.remove('active');
        toggleScrollOff();
    })

    menuItem.forEach((item) => {
        item.addEventListener('click', function () {
            menu.classList.remove('active');
            toggleScrollOff();
        })
    })

    address.addEventListener('click', function () {
        map.style.display = 'block';
        toggleScrollON();
    })
    close.addEventListener('click', function () {
        // popupMenu.classList.add('open-modal');
        map.style.display = 'none';
        toggleScrollOff();
    })

    // product.addEventListener('click', function () {
    //     order.classList.add('active');
    //     toggleScrollON();
    // })
    product.forEach((item) => {
        item.addEventListener('click', function () {
            order.classList.add('active');
            toggleScrollON();
        })
    })
        orderCls.addEventListener('click', function () {
        order.classList.remove('active');
        toggleScrollOff();
    })


    $('.order__button').click(() => {
        let name = $('#name');
        let phone = $('#phone');
        let item = $('#item');

        let hasError = false;

        // if (name.val() && phone.val() && ritual.val() && timeDate.val()) {
        if (name.val() && phone.val() && item.val()) {
            $.ajax({
                type: 'post',
                url: 'mail.php',
                data: 'name=' + name.val() + '&phone=' + phone.val() + '&item=' + item.val(),
                success: () => {
                    alert('Заявка отправлена.')
                },
                error: () => {
                    alert('Ошибка бронирования. Свяжитесь, пожалуйста, по номеру телефона.')
                }
            });
        } else {
            alert('Что-то пошло не так.Попробуйте еще раз.')
        }
    })



}
