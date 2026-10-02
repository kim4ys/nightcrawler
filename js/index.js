// Initialize Swiper
$(function () {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    breakpoints: {
      1200: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      0: { slidesPerView: 1 },
    },
    direction: getDirection(),
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      resize: function () {
        swiper.changeDirection(getDirection());
      },
    },
  });
  function getDirection() {
    // var windowWidth = window.innerWidth;
    // var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";
    // return direction;
    return "horizontal";
  }
  // con03 hover switch
  $("#con03 .left li").on("mouseenter", function () {
    i = $(this).index();
    $("#con03 .right li").hide();
    $("#con03 .right li").eq(i).show();
  });
  $("#con03 .left li").on("mouseenter", function () {
    $("#con03 .left li").removeClass("active");
    $(this).addClass("active");
  });

  // con04 hover up and down
  if ($(window).width() < 768) {
    $("#con04 li:nth-of-type(1)").on("mouseenter", function () {
      $("#con04 li:nth-of-type(1)").stop().animate({ bottom: "150px" });
    });
    $("#con04 li:nth-of-type(2)").on("mouseenter", function () {
      $("#con04 li:nth-of-type(2)").stop().animate({ bottom: "80px" });
    });
    $("#con04 li:nth-of-type(3)").on("mouseenter", function () {
      $("#con04 li:nth-of-type(3)").stop().animate({ bottom: "10px" });
    });
    $("#con04 li").on("mouseleave", function () {
      $("#con04 li:nth-of-type(1)").stop().animate({ bottom: "110" });
      $("#con04 li:nth-of-type(2)").stop().animate({ bottom: "40px" });
      $("#con04 li:nth-of-type(3)").stop().animate({ bottom: "-30px" });
    });
  } else {
    $("#con04 li:nth-of-type(1)").on("mouseenter", function () {
      $("#con04 li:nth-of-type(1)").stop().animate({ top: "-50" });
    });
    $("#con04 li:nth-of-type(2)").on("mouseenter", function () {
      $("#con04 li:nth-of-type(2)").stop().animate({ top: "100px" });
    });
    $("#con04 li:nth-of-type(3)").on("mouseenter", function () {
      $("#con04 li:nth-of-type(3)").stop().animate({ top: "200px" });
    });
    $("#con04 li").on("mouseleave", function () {
      $("#con04 li:nth-of-type(1)").stop().animate({ top: "0" });
      $("#con04 li:nth-of-type(2)").stop().animate({ top: "150px" });
      $("#con04 li:nth-of-type(3)").stop().animate({ top: "250px" });
    });
  }
});
