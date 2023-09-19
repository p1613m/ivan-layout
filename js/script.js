// slider
let viewPort = $('.viewPort').width();
let slider = $('.slider');
let numSlide = 0;
let timeInterval = 3000;


function NextSlide() {
    if (numSlide < 2) {
        numSlide++;
    } else {
        numSlide = 0;
    }

    slider.animate({
        'left': -numSlide * viewPort + 'px'
    }, 500);
}

function PrewSlide() {
    if (numSlide > 0) {
        numSlide--;
    } else {
        numSlide = 2;
    }

    slider.animate({
        'left': -numSlide * viewPort + 'px'
    }, 700);
}


$(function () {
    let timer = setInterval(NextSlide, timeInterval);

    $('.viewPort').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(NextSlide(), timeInterval); 
    });
});


$('.arrowNext').click(function () {
    NextSlide(); 
});


$('.arrowPrew').click(function () {
    PrewSlide(); 
});


// ниже попытка адаптивного слайдера


// let images = $('.slide');

// let img = document.getElementsByClassName(".slide img");
// const slider = $('.slider');
// let count = 0;
// let width;

// function init(){
//     width = $('#slider').width();
//     slider.css(
//         'width', width * img.length + 'px'
//     );
//     for (let i = 0; i < img.length; i++) {
//         const element = array[i];
        
//         element.css(
//             'width', width * img.length + 'px'
//         );
//     };
// }

// init();


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
let formsEmpty = true;

$('.removeBtn').click(function () {
    inputs.val('');
    $('#eventsName').val(0)
});


$('.buyBtn').click(function () {
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