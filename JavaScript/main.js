
$(document).ready(function() {
      let sections = $('section');
      
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

//  function iconAnimations(){
//     let icon = $(".iconPhone");
//     icon.on("mouseenter", function() {
//         $(this).
//     })

//  }   