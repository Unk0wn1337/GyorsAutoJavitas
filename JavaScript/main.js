
$(document).ready(function() {
      $('section.sec-1').addClass('show-animate');
      let sections = $('section');
      CallIcon();
      $('.modal-trigger').on('click', function() {
        let content = $(this).data('content');
        $('.modal-text').text(content);
        openModal(); // Modal fadeIn aktiválása
      });

      $('.close-button').on('click', function() {
          closeModal(); // Modal fadeOut aktiválása
      });

      $(window).scroll(function() {
        sections.each(function() {
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
  $(phoneIcon).on("click", function() {
    window.location.href = "tel:+36303335393";
  });
  $(phoneIcon).on("mouseenter", function () {
    $(this).addClass("hovered");
  });  
  $(phoneIcon).on("mouseleave", function () {
    $(this).removeClass("hovered");
  });  
} 

function openModal() {
  $('.modal').fadeIn(); // Modal fadeIn aktiválása
}

function closeModal() {
  $('.modal').fadeOut(); // Modal fadeOut aktiválása
}
 
  
    