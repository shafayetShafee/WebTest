// Dont know much about jQuery ... copied it from internet


$(function () {

  var screenWidth = window.innerWidth;
  if (screenWidth < 992) {

  	$('body').click(function(event) {
  		if($(event.target).hasClass('navbar-nav')) {
  			$("#collapsableNav").collapse('show');
  		} else {
  			$("#collapsableNav").collapse('hide');
  		}

  	}); 
  };


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
