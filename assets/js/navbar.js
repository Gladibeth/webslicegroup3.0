// Menu fixed
$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 768)) {
    $('#slice-nav').addClass('fixed-menu');
    $("#iso").addClass('img-size').attr('src', 'assets/img/menu_fix_logo.png').removeClass('scroll-up');
  }
  else {
    $('#slice-nav').removeClass('fixed-menu');
    $("#iso").removeClass('img-size').attr('src', 'assets/img/menu_iso_logo.png').addClass('scroll-up');
  }
});