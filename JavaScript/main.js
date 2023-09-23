
$(document).ready(function() {
      $('section.sec-1').addClass('show-animate');
      let sections = $('section');
      CallIcon();
      accordionWindow();
      imgSlide();
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
  let phoneIconTwo = $("#phoneIconTwo");
  
  
  $(phoneIcon).on("click", function() {
    window.location.href = "tel:+36303335393";
  });
  $(phoneIcon).on("mouseenter", function () {
    $(this).addClass("hovered");
  });  
  $(phoneIcon).on("mouseleave", function () {
    $(this).removeClass("hovered");
  });  


  $(phoneIconTwo).on("click",function() {
    window.location.href = "tel:+36303335393";
  });

  $(phoneIconTwo).on("mouseenter", function () {
    $(this).addClass("hovered");

  });
  $(phoneIconTwo).on("mouseleave", function () {
    $(this).removeClass("hovered");
  });

}


function accordionWindow(){
  let accordion = $(".contentBx");
  $(accordion).addClass("animate")
  for (let i = 0; i < accordion.length; i++) {
    $(accordion[i]).on("click", function() {
      this.classList.toggle('active');
    })
  }
}

function imgSlide(){
  $(document).ready(function () {
    let slides = $('.slider-items').children();
    let nextSlide = $(".right-slide");
    let prevSlide = $(".left-slide");
    let totalSlides = slides.length;
    let index = 0;

    nextSlide.click(function () {
        next("next");
    });

    prevSlide.click(function () {
        next("prev");
    });

    function next(direction) {
        if (direction == "next") {
            index++;
            if (index == totalSlides) {
                index = 0;
            }
        } else {
            if (index == 0) {
                index = totalSlides - 1;
            } else {
                index--;
            }
        }

        slides.removeClass("active");
        slides.eq(index).addClass("active");
    }
});
}
    