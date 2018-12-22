
//BUTTON CLICKS
$("#about-us").click(
  });
  $("#service").click(function(){
    $('html,body').animate({
         scrollTop: $("#service-section").offset().top},
    'slow');
  });
  $("#about-me").click(function(){
    $('html,body').animate({
         scrollTop: $("#about-me-sec").offset().top - $(window).height()/2 + $("#about-me-sec").height()/2 },
    'slow');
  });
  $("#resume").click(function(){
    window.open("downloads/resume.pdf", '_blank')
  });

  function scroll(a){
    alert("what");
    $('html,body').animate({
            scrollTop: $("#" + a).offset().top},
    'slow');
  }