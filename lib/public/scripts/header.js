function setStickyHeader() {
  var posY = $('#user_title').offset().top;
  $(window).scroll(function() {
    var userTitle = $('#user_title');
    var winScroll = $(window).scrollTop();
    if (winScroll >= (posY - 20)) {
      $(userTitle).addClass('sticky');
      var userWidth = $('#user_title').width();
      $(userTitle).attr('style',  'left: calc(50% - '+ (userWidth / 2) + 'px)');
    } else {
      $(userTitle).removeClass('sticky');
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