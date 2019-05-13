function setStickyHeader() {
  var posY = $('#user_title').offset().top;
  $(window).scroll(function() {
    var userTitle = $('#user_title');
    var winScroll = $(window).scrollTop();
    if (winScroll >= (posY - 20)) {
      $(userTitle).addClass('sticky flash');
    } else {
      $(userTitle).removeClass('sticky flash');
    }
  });
}

function triggerMenu() {
  $('#handleMenu').bind('click', function(){
    if ($('.menu').is(":hidden")) {
      $('.menu').addClass('menu_show');
    } else {
      $('.menu').removeClass('menu_show');
    }
  });
}

$(document).ready(function(){
  setStickyHeader();
  triggerMenu();

  $( window ).resize(function() {
    setStickyHeader();
  });
});