$(function () {
  //플로팅배너
  var floatingBan = $(".floating_banner");
  floatingBan.find(".close").on("click", function () {
    $(this).closest(floatingBan).hide();
  });

  var visualSlick = $(".visual_slide ul");
  var visualCtrl = $(".visual_slide .ctrl");
  visualSlick.slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    appendArrows: visualCtrl,
    dots: true,
  });

  var mainSlick = $(".main_slide ul");
  mainSlick.slick({
    fade: true,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  mainSlick.on("touchstart touchend touchcancle click", function () {
    mainSlick.slick("slickPlay");
  });

  var btmSlick = $(".m_btm_ban ul");
  btmSlick.slick({
    infinite: false,
    fade: true,
    appendArrows: ".btm_ban_ctrl",
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  btmSlick.on("touchstart touchend touchcancle click", function () {
    btmSlick.slick("slickPlay");
  });

  //하단 롤링배너
  var mainBan = $(".rolling_ban ul");
  mainBan.each(function () {
    var mainBanCtrl = $(this).prev("div").find(".ctrl");

    $(this).slick({
      infinite: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
      appendArrows: mainBanCtrl,
    });
  });

  //메인 영상
  var videoWrap = $(".solution_video"),
    player = new Vimeo.Player("main_video"),
    mPlayer = new Vimeo.Player("main_video_m");

  videoWrap.find("> a").on("click", function () {
    $(".vimeo_wrap").show();
    if ($(window).width() > 768) {
      player.play();
    } else {
      mPlayer.play();
    }
  });

  //메인 영상 자동재생 방지
  $(window)
    .on("resize", function () {
      if ($(window).width() < 769) {
        $(".solution_video video").removeAttr("autoplay");
      } else {
        $(".solution_video video").attr("autoplay", true);
      }
    })
    .resize();

  var mainPopSlick = $("#main_pop ul");
  mainPopSlick.slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: true,
    arrows: false,
  });
});
