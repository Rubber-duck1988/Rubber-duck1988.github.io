$(function () {
    $(window).scroll(function () {
        if($(document).scrollTop()>=68){
            $('#header').slideDown()
        }else{
            $('#header').slideUp()
        }
    })
});