// slider
class Slider {
    constructor(slider) {
        this.slider = slider.find('.slider')
        this.currentSlide = 1
        this.slideCount = slider.find('.slide').length

        slider.find('[data-slider-button="next"]')
            .click(() => this.setSlide(this.currentSlide + 1))
        slider.find('[data-slider-button="prev"]')
            .click(() => {
                this.setSlide(this.currentSlide - 1)
            })

        // setInterval(() => this.setSlide(this.currentSlide + 1), 5000)
    }

    setSlide(number) {
        if (number > this.slideCount) {
            number = 1;
        }

        if (number <= 0) {
            number = this.slideCount
        }

        this.currentSlide = number

        this.slider.css('transform', `translateX(-${(this.currentSlide - 1) * 100}%)`)
    }
}

const slider = new Slider($('[data-slider]'))

// modal ==================================================================================

let modal = $('.modalBg');
let modalTitle = $('.modalTitle');
let modalDesc = $('.modalDesc');


$('.about p').click(function () {
    modal.fadeIn();
    modal.css(
        'display', 'grid'
    );
});

$('.closeModal').click(function () {
    modal.fadeOut();
});


$('.aboutKuskText p').click(function () {
    modalTitle.text('Кусково');
    modalDesc.text('Усадьба Кусково – старинное имение на востоке Москвы, которое принадлежало графам Шереметевым. До наших дней сохранились павильоны, дворец и роскошный парк со скульптурами. Кусково действовало как летняя резиденция графов. Во дворце проводились торжественные приемы и танцевальные вечера. У Шереметевых гостила лучшая московская публика.');

});


$('.aboutWeaponText p').click(function () {
    modalTitle.text('Оружейная палата');
    modalDesc.text('Со времен Ивана III на территории Московского Кремля располагалась Казенная палата. В 1737 г. (при императрице Анне Иоанновне) Казенная палата сгорела. Уцелевшие ценности перенесли в Теремной дворец, а старое здание разобрали. В 1806-1810 гг. архитектор Константин Андреевич Тон построил для хранения кремлевских сокровищ новое здание – Оружейную палату.');

});


$('.aboutKingText p').click(function () {
    modalTitle.text('Царицыно');
    modalDesc.text('Музей-заповедник «Царицыно», расположенный на юго-восточной окраине столицы, включает одноименный дворцово-парковый ансамбль, памятник архитектуры XVIII века, и прилегающие к нему Царицынские пруды и пейзажный парк. По площади это крупнейший музейный комплекс Москвы, по значимости – один из самых важных.');

});


// inputs ========================================================================

let inputs = $('.input');

$('.removeBtn').click(function () {
    inputs.val('');
    $('#eventsName').val(0)
});


$('#form').submit(function () {
    event.preventDefault()

    if ($('.inputEmail').val() == '' || $('.inputName').val() == '' || $('.inputSecName').val() == '') {
        alert('Не все поля заполнены!');
    } else {
        alert('Билет заказан');
    }
});


// animate

function Anim(elementForAnimation, nameAnimation) {
    let winHeight = $(window).height();


    $('.' + elementForAnimation).each(function () {
        let element = $(this),
            height = element.offset().top + element.height();

        if ($(document).scrollTop() + winHeight >= height) {
            element.addClass(nameAnimation);
            element.css(
                'opacity', '1'
            );
        }
    });
};

$(document).ready(function () {
    $(document).on('scroll', function () {
        Anim('cards', 'animation');
        Anim('aboutKuskText', 'animation');
        Anim('aboutKingText', 'animation');
        Anim('aboutWeaponText', 'reversAnimation');
    });
});