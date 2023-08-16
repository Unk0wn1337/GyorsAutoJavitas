
$(document).ready(function () {
  $('section.sec-1').addClass('show-animate');
  let sections = $('section');
  CallIcon();
  openModalZoom();
  $('.modal-trigger').on('click', function () {
    let content = $(this).data('content');
    $('.modal-text').text(content);
    openModal(); // Modal fadeIn aktiválása
  });

  $('.close-button').on('click', function () {
    closeModal(); // Modal fadeOut aktiválása
  });

  $(window).scroll(function () {
    sections.each(function () {
      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 150;
      let height = $(this).outerHeight();
      if (top >= offset && top < offset + height) {
        $(this).addClass('show-animate');
      } else {
        $(this).removeClass('show-animate');
      }
    });
  });
});

function CallIcon() {
  let phoneIcon = $("#phoneIcon");
  $(phoneIcon).on("click", function () {
    window.location.href = "tel:+36303335393";
  });
  $(phoneIcon).on("mouseenter", function () {
    $(this).addClass("hovered");
  });
  $(phoneIcon).on("mouseleave", function () {
    $(this).removeClass("hovered");
  });
}


function openModalZoom() {
    let klima = $("#klima");
    $(klima).on("mouseenter", function () {
      $(this).addClass("hovered");
    });
    $(klima).on("mouseleave", function () {
      $(this).removeClass("hovered");
    });

    let idoszakos = $("#idoszakos");
    $(idoszakos).on("mouseenter", function () {
      $(this).addClass("hovered");
    });
    $(idoszakos).on("mouseleave", function () {
      $(this).removeClass("hovered");
    });

    let generic = $("#generic");
    $(generic).on("mouseenter", function () {
      $(this).addClass("hovered");
    });
    $(generic).on("mouseleave", function () {
      $(this).removeClass("hovered");
    });


    let kopo = $("#kopo");
    $(kopo).on("mouseenter", function () {
      $(this).addClass("hovered");
    });
    $(kopo).on("mouseleave", function () {
      $(this).removeClass("hovered");
    });

    let autoVillamosag = $("#autoVillamossag");
    $(autoVillamosag).on("mouseenter", function () {
      $(this).addClass("hovered");
    });
    $(autoVillamosag).on("mouseleave", function () {
      $(this).removeClass("hovered");
    });


    let karosszeria = $("#karosszeria");
    $(karosszeria).on("mouseenter", function () {
      $(this).addClass("hovered");
    });
    $(karosszeria).on("mouseleave", function () {
      $(this).removeClass("hovered");
    });

    let automentes = $("#automentes");
    $(automentes).on("mouseenter", function () {
      $(this).addClass("hovered");
    });
    $(automentes).on("mouseleave", function () {
      $(this).removeClass("hovered");
    })
      
  
  }



function openModal() {
  $('.modal').fadeIn(); // Modal fadeIn aktiválása
}

function closeModal() {
  $('.modal').fadeOut(); // Modal fadeOut aktiválása
}


