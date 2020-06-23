$(document).ready(function(){
    //What We Do
    $(".icon").each(function () {
        console.log("In Icon");
        $(this).find("div.image").click(function () {
            console.log("Clicked Image DIV");
            $(this).find("div.front").addClass("flip");
            $(this).find("div.back").removeClass("flip");
            console.log("Text now visible")
            $(this).find("div.back").addClass("back");
        });
        $(this).find("div.back").click(function () {
            console.log("Clicked Text DIV");
            //$(this).find("div.back").addClass("text-hide");
            $(this).find("div.back").addClass("flip");
            $(this).find("div.front").addClass("flip-back");
        });
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

