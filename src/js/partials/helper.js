window.log = function(param){
    console.log(param);
};

/**********************  footer  ****************************/
var openFooter = document.querySelector('.keywords__link');
var keywords = document.querySelector('.keywords');

openFooter.addEventListener('click', function(){
    if ( keywords.classList.contains ('keywords--opened')) {
        keywords.classList.remove('keywords--opened');
    } else {
        keywords.classList.add('keywords--opened');
    }
});
/**********************end   footer  ****************************/

/**********************  header  ****************************/
var nav_container = document.querySelector('.nav-container');

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 150) {
        nav_container.classList.add('f-nav');
    }else {
        nav_container.classList.remove('f-nav');
    }
}
/********************** end  header  ****************************/

/**********************  menu  ****************************/
var body = document.querySelector('body');
var navMain = document.querySelector('.menu');
var navOpen = document.querySelector('.btn-menu');

body.classList.remove('nojs');

navOpen.addEventListener('click', function(){
    if ( navMain.classList.contains ('menu--opened')) {
        navMain.classList.remove('menu--opened');
        navOpen.classList.remove('menu-on');
    } else {
        navMain.classList.add('menu--opened');
        navOpen.classList.add('menu-on');
    }
});
/**********************end  menu  ****************************/

/**********************  faq  ****************************/
$('dl dt').click(function(){

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    }else {
        $(this).addClass('active');
    }

});
/**********************end  faq  ****************************/

/**********************  number  ****************************/
$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});
/**********************end  number  ****************************/




