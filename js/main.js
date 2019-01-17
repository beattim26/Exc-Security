$("body").on('click', '[href*="#"]', function (e) {
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

var win = $(this);
$(function () {
  fnName();
  window.onresize = fnName;
});

function fnName () {
  if (win.width() <= 751) {
    $('.navigation').css({'padding-top': '80px'});
  } 
  if (win.width() >= 751) {
    $('.navigation').css({'padding-top': ''});
  }  
}

$(window).scroll(function () {
  if ($(window).scrollTop() > 38) {
    $('.navigation').addClass('fixed');
    $('.navigation-contacts').addClass('d-none');
    $('body').css({'padding-top': '100px'});
    if (win.width() < 992) {
      $('body').css({'padding-top': '120px'});
    } 
    if (win.width() < 768) {
      $('body').css({'padding-top': '190px'});
    }
    if (win.width() < 439) {
      $('body').css({'padding-top': '210px'});
    }
  } else {
    $('.navigation').removeClass('fixed');
    $('.navigation-contacts').removeClass('d-none');
    $('body').css({'padding-top': ''});
  }
});

