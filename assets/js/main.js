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


$(document).ready(function () {

  // url modal team slice
  var hash = window.location.hash;
  if (hash === '#team-modal') {
    $(hash).modal('show');
    // $('#preloader').remove()

  }

  // menú responsive
  $(function () {
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open');
      $('body').toggleClass('offcanvas-expanded');
    })
  })

  $(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
  });

  $('.nav-link-p').click(function () {
    $('.offcanvas-collapse').removeClass('open');
    $('.hamburger').toggleClass('is-active');
    $('body').removeClass('offcanvas-expanded');
  })

  if ($(window).width() >= 2049) {
    $('.services-cards').addClass('container')
    $('.content-projects').addClass('container')
    $('.card-columns').css('column-count', '2')
    $('.card-body').css('padding-left', '0')
    $('.content-success').addClass('container')
    $('#project-success').addClass('container')
  }

  // $(".btn-tabs").click(function () {
  //   $(".content-tabs").hide();
  //   $("#content-tabs" + $(this).attr("id")).show();

  // });

  /// me gusta de post

  $(function () {
    var count = 0, countRate = 0, output = $('#output');

    setInterval(function () { output.html(count) }, 1); // update continually

    $('#click').click(function () { count += 1 });
    $('#autoClick').click(function () { countRate += 1 });
  });

});

$(".optionTab").on('click', function () {
  $('.check').removeClass('focus');
  $(this).find('.check').addClass('focus');

});

$(".optionTab1").on('click', function () {
  $('.check').removeClass('focus1')
  $(this).find('.check').addClass('focus1');

});

var hash = window.location.hash;
console.log(hash);
if (hash) {
  $("a[href=" + hash + "]").tab('show')
  console.log(hash);
}

$(window).on('load', function () {
  $('#preloader').remove()
});
