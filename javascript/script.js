$(document).ready(function () {
    $("#d-icon").click(function () {
        $(".design").toggle();
        $("#d-icon").toggle();
    });
    $(".design").click(function () {
        $("#d-icon").toggle();
        $(".design").toggle();
    });
});

$(document).ready(function () {
    $("#dev-icon").click(function () {
        $(".development").toggle();
        $("#dev-icon").toggle();
    });
    $(".development").click(function () {
        $("#dev-icon").toggle();
        $(".development").toggle();
    });
});

$(document).ready(function () {
    $("#p-icon").click(function () {
        $(".product").toggle();
        $("#p-icon").toggle();
    });
    $(".product").click(function () {
        $("#p-icon").toggle();
        $(".product").toggle();
    });
$(document).ready(function(){
    $(".paragraph").css('display', 'none');
    var works =["work1", "work2", "work3", "work4", "work5", "work6", "work7", "work8"];
    works.forEach(function(work){
        $("." + work).hover(function(){
            $(".paragraph",this).fadeIn()
            $("." + work).css('opacity','0.5');
            },
        function (){
            $(".paragraph").fadeOut()
            $("." + work).css('opacity','1')
        });
        });
    });
});

function submitx(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;

if (name.length !== 0 && email.length !== 0 && message.length !== 0){
    alert(name + " Thank you for reaching out!");
}
else{
    alert("Enter your name and email");
}
}
// $(document).ready(function(){
//     var name = $("#name").val()
// if ($("#name").val() && $("#email").val()) {
//     alert(name + "Thank you for reaching out to us.");
// }
// else {
//     alert("Enter your name and email");
//     };
// });
