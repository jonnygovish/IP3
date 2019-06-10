

  $(document).ready(function(){
    $(".designdef").hide();
    $(".developmentdef").hide();
    $(".productdef").hide();

    $(".text1").hide();
    $(".image1").animate({
      opacity: 1
    });
    $(".image1").hover(function(){
      $(this).stop().animate({opacity:.4},200);
      $('.text1').fadeIn();

  }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.text1').fadeOut();
  });
  //The second image
    $(".text2").hide();
    $(".image2").animate({
      opacity: 1
    });
    $(".image2").hover(function(){
      $(this).stop().animate({opacity:.4},200);
      $('.text2').fadeIn();

  }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.text2').fadeOut();
  });
  //the third image
    $(".text3").hide();
    $(".image3").animate({
      opacity: 1
    });
    $(".image3").hover(function(){
      $(this).stop().animate({opacity:.4},200);
      $('.text3').fadeIn();

  }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.text3').fadeOut();
  });
  //the fourth
    $(".text4").hide();
    $(".image4").animate({
      opacity: 1
    });
    $(".image4").hover(function(){
      $(this).stop().animate({opacity:.4},200);
      $('.text4').fadeIn();

  }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.text4').fadeOut();
  });
  //the fifth
    $(".text5").hide();
    $(".image5").animate({
      opacity: 1
    });
    $(".image5").hover(function(){
      $(this).stop().animate({opacity:.4},200);
      $('.text5').fadeIn();

  }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.text5').fadeOut();
  });
  //the sixth
    $(".text6").hide();
    $(".image6").animate({
      opacity: 1
    });
    $(".image6").hover(function(){
      $(this).stop().animate({opacity:.4},200);
      $('.text6').fadeIn();

  }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.text6').fadeOut();
  });
  //the seventh
    $(".text7").hide();
    $(".image7").animate({
      opacity: 1
    });
    $(".image7").hover(function(){
      $(this).stop().animate({opacity:.4},200);
      $('.text7').fadeIn();

  }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.text7').fadeOut();
  });
  //the eighth
    $(".text8").hide();
    $(".image8").animate({
      opacity: 1
    });
    $(".image8").hover(function(){
      $(this).stop().animate({opacity:.4},200);
      $('.text8').fadeIn();

  }, function() {
      $(this).stop().animate({opacity:1},500)
      $('.text8').fadeOut();
  });


    })


    $("#design").click(function(){
      $(".designdef").show();
      $("#design").hide();
    });
    $("#development").click(function(){
      $(".developmentdef").show();
      $("#development").hide();
    });
    $("#product").click(function(){
      $(".productdef").show();
      $("#product").hide();
    });
    $(".productdef").click(function(){
      $(".productdef").hide();
      $("#product").show();
    });
    $(".developmentdef").click(function(){
      $(".developmentdef").hide();
      $("#development").show();
    });
    $(".designdef").click(function(){
      $(".designdef").hide();
      $("#design").show();
    });

    $("#form1").submit(function(e){

      var name = document.getElementById("name").value;
      var email = document.getElementById("name").value;
      if (name == " " || email == " "){
        alert("Please enter a name and your email address to continue.");
        return false;
      }else{
        alert("Hello " + name + " \n we have received your message. Thank you for reaching out")

      }
    });
