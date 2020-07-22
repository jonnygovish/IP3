$(document).ready(function(){
    //What We Do
    $(".icon").each(function () {
        console.log("In Icon");
        $(this).click(function () {
            console.log("Clicked Image DIV");
            $(this).find("div.w-image").addClass("front");
            $(this).find("div.w-text").removeClass("back");
            $(this).find("div.w-text").addClass("back-flip");
        });
        $(this).mouseleave(function () {
            $(this).find("div.w-image").removeClass("front");
            $(this).find("div.w-text").addClass("back");
        })
    });

    //Portfolio Text Animate
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

