$(document).ready(function(){
    //What We Do


    //Portfolio Flip
    $(".item").each(function () {
        $(this).hover(function(){
            $(this).find("div.image").animate({
                height: 'toggle'
            });
            $(this).find("div.text").removeClass("text-hide");
        });
        $(this).mouseleave(function () {
            $(this).find("div.text").addClass("text-hide");
        });
    });
});

