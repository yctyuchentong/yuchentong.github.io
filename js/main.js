$(function () {
    $('label').click(function () {
        $('.event-year>li').removeClass('current');
        $(this).parent('li').addClass('current');
        var year = $(this).attr('for');
        $('#' + year).parent().prevAll('div').slideUp(800);
        $('#' + year).parent().slideDown(800).nextAll('div').slideDown(800);
    });

    $('.desc').hover(function(){
        $('.desc').removeClass('active');
    })
});

$(function(){
    $('.desc').hover(function(){
        $('.desc').removeClass('active');
        $('.date').removeClass('selected')
        $(this).addClass('active');
        $(this).prevAll('div').addClass('selected');
     });
})

$(function(){
    
    $('.date').hover(function(){
        $('.desc').removeClass('active');
        $('.date').removeClass('selected');
        $(this).addClass('selected');
        $(this).prevAll('div').addClass('active');

     })
})