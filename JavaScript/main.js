
$(document).ready(function() {
      let sections = $('section');
      CallIcon();
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
    