$(document).ready(function () {


//Изменили название в заголовке страницы

    $('h1').html("Самая крутая пицца ждет <span>только в нашем ресторане</span>!");

//Поменяем стили текста заголовка
    $('#products-title').css('color', '#000000');

//Для всех кнопок опишим стили уберем фон поменяли цвет текста и сделалаи рамку
    $('.btn:not(#no-touch)').css({
        backgroundColor: "transparent",
        color: "rgb(255, 175, 24)",
        border: "1px solid rgb(255, 175, 24)"
    });

// поменяем placeholder
    $('#product-input').attr('placeholder', 'Имя');


//Поменяем внутренний текст у продуктов
    let products = $(".product");
    for (let i = 0; i < products.length; i++) {
        //Что бы "*" добавлялась для четного элемента
        if (i % 2 === 1) {
            let element = products.eq(i).children().eq(1);
            element.text(element.text() + '*');
        }
    }


//Сделаем плавный переход при клике выбрать пиицу

    $('#choose-pizza').click(function () {
        //добавляем скрол к блоку продукты
        $('.products')[0].scrollIntoView({behavior: "smooth"});
    });


//Обработчик событий
    let productInput = $('#product-input');
    $('.btn-add-to-cart').click((e) => {
        productInput.val($(e.target).parents('.product').find('.product-title').text());
        //Сделаем что бы по нажатию на товар он размещался в нашей форме
        $('#create-order')[0].scrollIntoView({behavior: 'smooth'});
    });


//Сделаем валидацию для формы заказа
    $('#create-order').click(function () {
        let addressInput = $('#address-input');
        let phoneInput = $('#phone-input');
        if (!productInput.val()) {
            alert('Вы не выбрали пиццу');
            return;
        }
        if (!addressInput.val()) {
            alert('Заполните Адрес');
            return;
        }
        if (!phoneInput.val()) {
            alert('Заполните Ваши контактные данные');
            return;
        }
        alert('Спасибо за заказ! Ваш заказ будет доставлен в течении 24 часов.');

    });


//Поменяем дату в блоке rights на текущую дату
    $('.rights span').text((new Date()).getFullYear());


});