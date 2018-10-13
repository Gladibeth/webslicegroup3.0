// Active links underline
// $(document).on('scroll', function () {
//   var array = [];
//   $('section').each(function () {
//     array.push(this.id);
//   });
//   $(window).scroll(function () {
//     $.each(array, function (x, v) {
//       if ($(window).scrollTop() >= ($("#" + v).position().top - 100) && $(window).scrollTop() <= ($("#" + v).position().top - 100) + $("#" + v).outerHeight(true)) {
//         $('.nav-link[href=\"#' + v + '\"]').addClass('active');
//       }
//       else {
//         $('.nav-link[href=\"#' + v + '\"]').removeClass('active');
//       }
//     })
//   })
// });

$(window).scroll(function () {
  scroll = $(window).scrollTop()
  scrollplus = scroll + 400
  svg_top = $(".svgs.parallax").position().top
  team_top = $(".team").position().top
  team_bottom = $(".team").outerHeight(true)

  if (((scrollplus) >= team_top) && (scrollplus <= (team_top + team_bottom) - 400)) {
    $(".svgs.parallax").css({
      transform: `translateY(${(scrollplus - team_top) * 0.35}px)`,
    })
  }
})

$(window).scroll(function () {
  scrollTop = $(window).scrollTop()
  if (scrollTop >= $(".services-how-icons").position().top) {
    $(".service-icon-wrapper span").addClass("line");
  }
})


// Team Carousel
$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000
      }
    }
  ]
});

//Projects Carousel
$('.projects-carousel').slick({
  dots: false,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Clients Carousel
$('.clients-carousel').slick({
  dots: true,
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

$(function () {
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open');
    $('body').toggleClass('offcanvas-expanded');
  })
})

$(".hamburger").on("click", function () {
  $(this).toggleClass("is-active");
});

$('.nav-link').click(function () {
  $('.offcanvas-collapse').removeClass('open');
  $('.hamburger').toggleClass('is-active');
  $('body').removeClass('offcanvas-expanded');
})

// $(document).ready(function () {
//   // $("#buttom").click(function () {
//   //   $("#teamModal").modal();
//   // });
//   $("#asd").click(function () {
//     $("#terms").modal();
//   });
// });