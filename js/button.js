$(document).ready(function(){
    $('.option ul li button.shopping-bag').click(function() {
        $(this).children('i').toggleClass('icon-red');
    });
    
    $('.option ul li button.heart-empty').click(function() {
        $(this).children('i').toggleClass('icon-heart icon-red');
    });
    
    $('.option ul li button.eye').click(function() {
        $(this).children('i').toggleClass('icon-red');
    });

    $('.cancel').on('click',function(){
        $(this).parents('.line').remove();

    });
});
