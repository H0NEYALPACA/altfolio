document.addEventListener('scroll', function() {
    var currentScrollValue = document.documentElement.scrollTop;
    if(currentScrollValue > 30){
        $('header').css('box-shadow','rgb(208 211 219) 0px 0px 10px');
    } else{
        $('header').css('box-shadow','none');
    }
});

$('.gnb-wrap li a').hover(function(){
    $(this).css('transition-duration','0.5s');
    $(this).css('color','#8e9eeb');
}, function(){
    $(this).css('transition-duration','0.5s');
    $(this).css('color','#333');
});