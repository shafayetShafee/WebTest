// Dont know much about jQuery ... copied it from internet


$(function (global) {

  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    var target = $(event.target);
    if (screenWidth < 992) {
      if( target.not("collapsableNav")) {
      	$("collapsableNav").collapse("hide");
      }
    }
  });


  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});


var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800,
	offset: 120
});

function mail() {
		document.getElementById("mail").style.visibility = "visible";
	};

function mailOff() {
		document.getElementById("mail").style.visibility = "hidden";
	};
