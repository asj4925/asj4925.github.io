$(function () {
  // XSS Recover
  if ($(".html-contents").length > 0) {
    $(".html-contents").html(XSSRecoverTag($(".html-contents").html()));
  }

  //공통 SCROLL add fixed
  function scrollFixed() {
    var scTop = $(window).scrollTop();
    $("body").addClass("fix");
    $("body").find("#wrap").css({ top: -scTop });
  }

  //공통 SCROLL remove fixed
  function scrollRemoveFixed(tg_scroll) {
    $("body").removeClass("fix");
    if (tg_scroll >= 0) {
      $(window).scrollTop(tg_scroll);
      $("body").find("#wrap").css({ top: "" });
    }
  }

  var $win = $(window),
    header = $("header"),
    isPc = true,
    subTop = $(".subtop_menu"),
    topArea = 0;

  floatingView();

  $win
    .on("resize", function () {
      $win.width() < 1201 ? (isPc = false) : (isPc = true);
      floatingView();
      reSizeOd();
    })
    .resize();

  $win.on("scroll", function () {
    var scrT = $win.scrollTop();
    if (isPc == true) {
      scrT > 0 ? header.addClass("fixed") : header.removeClass("fixed");
    }
  });

  function floatingView() {
    var topFloat = $(".top_floating"),
      subtopSub = $(".subtop_sub");

    if (subTop.is(":visible")) {
      if (subtopSub.is(":visible")) {
        topArea = header.height() + subTop.outerHeight() + subtopSub.height() + topFloat.height();
      } else {
        topArea = header.height() + subTop.outerHeight() + topFloat.height();
      }
    } else if ($("#wrap").is(".main") && $win.width() > 950) {
      topArea = 0;
    } else {
      topArea = header.height() + topFloat.height();
    }

    if (topFloat.is(":visible")) {
      header.css("top", topFloat.height());
      subTop.css("top", topFloat.height() + header.height());
    } else if (topFloat.is(":hidden") && $win.width() > 950) {
      header.css("top", 0);
      subTop.css("top", header.height());
    }
  }

  //상단메뉴
  var submenu = header.find("nav .depth02");
  subDim = header.find(".header_dim");

  header.find("nav").on({
    mouseenter: function () {
      if (isPc == true) {
        header.addClass("fixed");
        submenu.stop().slideDown(300);
        subDim.stop().slideDown(300);
      }
    },
    mouseleave: function () {
      if (isPc == true) {
        if ($win.scrollTop() == 0) {
          header.removeClass("fixed");
        }
        submenu.stop().slideUp(300);
        subDim.stop().slideUp(300);
      }
    },
  });

  var menuBtn = $("header nav h2"),
    mobileMenu = $(".mobile_menu"),
    menuClose = $(".menu_close"),
    mbMenuList = $(".mobile_menu .menu > li"),
    floatingBnr = $("#floating"), // 2023-10-30
    floatingClose = $("#floating .close"); // 2023-11-08

  menuBtn.on("click", function () {
    mobileMenu.show();
    scrollFixed();
    floatingBnr.hide(); // 2023-10-30
  });

  menuClose.on("click", function () {
    mobileMenu.hide();
    floatingBnr.show(); // 2023-10-30
    var topCnt = $("body").find("#wrap").css("top"),
      topCnt = topCnt.replace("-", ""),
      topCnt = topCnt.replace("px", "");
    scrollRemoveFixed(topCnt);
  });

  mbMenuList.find("> a").on("click", function () {
    var thisList = $(this).closest("li"),
      i = thisList.index(),
      mSubMenu = mbMenuList.find("> ul");

    if (thisList.is(".on")) {
      thisList.removeClass("on").find("> ul").stop().slideUp();
    } else {
      mbMenuList.removeClass("on").eq(i).addClass("on");
      mSubMenu.stop().slideUp().eq(i).stop().slideDown();
    }
  });

  // 2023-11-08
  floatingClose.on("click", function () {
    floatingBnr.hide();
  });

  //팝업
  var popBtn = $(".pop_call"),
    popClose = $(".pop_close_btn");

  popBtn.on("click", function (e) {
    e.preventDefault();

    var thisName = $(this).prop("tagName"),
      thisPop;

    if (thisName == "A") {
      thisPop = $(this).attr("href");
    } else {
      thisPop = $(this).attr("pophref");
    }

    $(thisPop).show();
  });

  popClose.on("click", function (e) {
    e.preventDefault();
    $(this).closest(".popup_wrap").hide();
  });

  $(".popup_wrap").on("click", function (e) {
    if (this == e.target) {
      $(this).hide();
    }
  });

  //select
  $("select").selectric();

  // 2023-06-22 공통 함수로 묶어 실행
  const showDefaultLang = (contents) => {
    contents.forEach((content) => {
      if (content.classList.contains("en")) content.style.display = "block";
      else content.style.display = "none";
    });
  };

  const clickLangOption = (option, contents) => {
    option.forEach((opt) => {
      opt.addEventListener("click", () => {
        const opt_index = opt.getAttribute("data-index");
        contents.forEach((content, cont_idx) => {
          if (cont_idx === +opt_index) content.style.display = "block";
          else content.style.display = "none";
        });
      });
    });
  };

  const policy_lang_cont = document.querySelectorAll("#policy_cont .policy_lang_cont");
  const policy_select_option = document.querySelectorAll("#policy_cont .selectric-items li");

  showDefaultLang(policy_lang_cont);
  clickLangOption(policy_select_option, policy_lang_cont);

  const signup_agree_cont = document.querySelectorAll("#signup_agree_form .agree_list");
  const signup_agree_option = document.querySelectorAll("#signup_agree_form .selectric-items li");

  showDefaultLang(signup_agree_cont);
  clickLangOption(signup_agree_option, signup_agree_cont);

  //서브하위메뉴 노출시 여백추가
  if ($(".subtop_sub").is(":visible")) {
    $("#contents").addClass("toppd");
  }

  //서브페이지 일경우 header 에 클래스추가
  if ($("#container").is(".sub")) {
    $("header").addClass("sub");
  }

  //체크리스트
  var chkList = $(".allchk_list");
  chkList.each(function () {
    var $this = $(this),
      chkbox = $this.find('input[type="checkbox"]').not(".allchk"),
      allChk = $this.find(".allchk");

    chkbox.each(function () {
      $(this).on("change", function () {
        var chkboxLen = chkbox.length,
          chkLen = $this.find('input[type="checkbox"]:checked').not(".allchk").length;
        chkboxLen == chkLen ? allChk.prop("checked", true) : allChk.prop("checked", false);
      });
    });

    allChk.on("change", function () {
      $(this).prop("checked") ? chkbox.prop("checked", true) : chkbox.prop("checked", false);
    });
  });

  var mobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase());

  if (mobile) {
    //navigator.userAgent에 /iphone|ipad|ipod|android 의 단어포함이 true 일때
    // 유저에이전트를 불러와서 OS를 구분합니다.
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.search("android") > -1) {
      //안드로이드
    } else if (userAgent.search("iphone") > -1 || userAgent.search("ipod") > -1 || userAgent.search("ipad") > -1) {
      $(".inp_chk, .inp_radio").addClass("inp_ios");
    }
  } else {
  }

  // FOR PARTNERS
  if ($(".partner_slide ul").length > 0) {
    $(".partner_slide ul").slick({
      infinite: true,
      autoplaySpeed: 5000,
      pauseOnFocus: false,
      pauseOnHover: false,
      dots: true,
    });
  }

  //price
  if ($(".price_list").length > 0) {
    $(".price_list").slick({
      slidesToShow: 3,
      infinite: false,
      appendArrows: ".price_ctrl",
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
            centerMode: true,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }

  if ($(".price_new .list").length > 0) {
    // 2023-06-09 target을 ul로 변경
    $(".price_new .list ul").slick({
      slidesToShow: 5,
      infinite: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
            centerMode: true,
            arrows: false,
            dots: true,
          },
        },
      ],
    });
  }

  var priceOpen = $(".price_wrap .open_btn");
  priceOpen.on("click", function () {
    $(this).next(".features").stop().slideToggle();
  });

  //탭
  var acTabWrap = $(".activity_tabwrap"),
    acTabBtn = $(".ac_tab label"),
    acTabTxt = acTabWrap.find(".txt_tabcon > div"),
    acTabCon = acTabWrap.find(".ac_tabcon > div"),
    acClass = $(".ac_class"),
    acClassWrap = $(".activity_guidewrap"),
    acClassCon = acClassWrap.find(".class_guide"),
    choiceBtn = $(".playdm_wrap .choice_item"),
    hiddenStep = $(".step_cnt.hidden");

  acClassWrap.hide();

  acClass.on("click", function () {
    acTabWrap.hide();
    if ($(this).attr("stepview") !== undefined) {
      acClassWrap.hide();
    } else {
      const classViewNum = $(this).attr("classview") - 1;
      acClassWrap.show();
      acClassCon.hide().eq(classViewNum).show();
    }
  });

  acTabWrap.hide();

  if (acTabWrap.hasClass("oxford")) {
    acTabWrap.show();
    acTabTxt.eq(0).show();
  }

  acTabBtn.on("click", function () {
    acTabWrap.show();
    const textViewIdx = $(this).attr("txtview") - 1;
    const actViewIdx = $(this).attr("actview") - 1;
    // [s] 2023-11-21
    const alertText = $(this).attr("alert");

    if ($(this).attr("alert") !== undefined) {
      acTabWrap.hide();
      alert(alertText);
    }
    // [e] 2023-11-21

    if (textViewIdx >= 0) {
      acTabTxt.hide().eq(textViewIdx).show();
    } else {
      acTabTxt.hide();
    }
    if (actViewIdx >= 0) {
      acTabCon.hide().eq(actViewIdx).show();
      const thisMaList = acTabCon.eq(actViewIdx).find(".ma_list");
      if (thisMaList.length > 0) {
        thisMaList.find("li:first-of-type").trigger("click");
      }
    } else {
      acTabCon.hide();
    }
    if ($(this).attr("stepview") !== undefined) {
      acTabWrap.hide();
    }

    if ($(this).hasClass("lesson_m_view")) {
      acTabWrap.find(".wrapper").addClass("m_view");
    } else {
      acTabWrap.find(".wrapper").removeClass("m_view");
    }
  });

  var maTab = $(".ma_list li");

  maTab.on("click", function () {
    $(this).parent().children().removeClass("on");
    $(this).addClass("on");
    const thisIdx = $(this).index();
    const video = $(this).parent().siblings(".video");
    if (video.length > 0) {
      for (let i = 0; i < video.children().length; i++) {
        if (i === thisIdx) video.children().eq(i).show();
        else video.children().eq(i).hide();
      }
    }
  });

  choiceBtn.on("click", function () {
    if (hiddenStep === undefined) return;
    if ($(this).parents(".step_cnt").hasClass("hidden")) return;
    const stepViewId = $(this).attr("stepview");
    if (stepViewId === undefined || stepViewId === "") hiddenStep.hide();
    else $(stepViewId).show();
  });

  //이북 탭
  var ebookwrap = $(".ebook_wrap"),
    ebooktab = ebookwrap.find(".tab_box > div"),
    ebooktabSub = ebooktab.find(".inner");
  // ebooklink = ebooktabSub.find('> li > a'),
  (ebooklink = ebookwrap.find(".ebooklink")),
    (nolink = ebookwrap.find(".nolink")),
    (ebookBox = ebookwrap.find(".tab_con .ebook_tabbox"));

  ebooktab.on({
    mouseenter: function (e) {
      e.preventDefault();
      var i = $(this).index();

      ebooktab.addClass("off").eq(i).removeClass("off");
      ebooktabSub.hide().eq(i).show();
    },
    mouseleave: function (e) {
      ebooktabSub.hide();
    },
  });

  ebooklink.on("click", function (e) {
    e.preventDefault();
    var thisEbook = $(this).attr("href"),
      thisTab = $(this).closest("div");

    ebooktab.addClass("off");
    thisTab.removeClass("off");
    ebooktabSub.hide();
    ebookBox
      .find("iframe")
      .attr("src", "https://book.allviaedu.com/view/index.html?contbase=/" + thisEbook + "/&title=abcd&viewtype=html5");
  });

  nolink.on("click", function (e) {
    e.preventDefault();
    alert("Coming soon");
  });

  //일반 탭
  var normalTab = $(".normal_tab");

  normalTab.each(function () {
    var nmTab = $(this).find(".nm_tab li"),
      nmCon = $(this).find(".nm_tabcon > div");

    nmTab.on("click", function () {
      var i = $(this).index();
      nmTab.removeClass("on").eq(i).addClass("on");
      nmCon.hide().eq(i).show();
    });

    nmTab.eq(0).trigger("click");
  });

  // 아코디언 탭
  var accordion = $(".accordion"),
    topFloat = $(".top_floating"),
    subtopSub = $(".subtop_sub"),
    topHeight = 0;

  if (subtopSub.is(":visible")) {
    if (topFloat.is(":visible")) {
      topHeight = header.height() + subTop.outerHeight() + subtopSub.height() + topFloat.height();
    } else {
      topHeight = header.height() + subTop.outerHeight() + subtopSub.height();
    }
  } else {
    if (topFloat.is(":visible")) {
      topHeight = header.height() + subTop.outerHeight() + topFloat.height();
    } else {
      topHeight = header.height() + subTop.outerHeight();
    }
  }

  accordion.each(function () {
    var aTab = $(this).find("li");

    aTab.find("h6").on("click", function () {
      var i = $(this).parent().index(),
        prevTabHeight = 0,
        thisTop = aTab.eq(0).offset().top,
        margin = parseInt(
          aTab
            .eq(0)
            .css("marginBottom")
            .replace(/[^-\d\.]/g, "")
        );

      for (let j = 0; j < i; j++) {
        prevTabHeight += aTab
          .eq(j - 1)
          .find("h6")
          .outerHeight();
      }

      thisTop = aTab.eq(0).offset().top + prevTabHeight + margin * i;

      if (aTab.eq(i).hasClass("on")) {
        aTab.eq(i).removeClass("on");
      } else {
        aTab.removeClass("on").eq(i).addClass("on");
        $("html").animate({ scrollTop: thisTop - topHeight }, 400);
      }
    });

    aTab.eq(0).trigger("click");
  });

  //브로셔 다운
  var broBtn = $(".brochure .btn_wrap a");

  broBtn.on("click", function (e) {
    e.preventDefault();
    var selectBro = $('.bro_radio input[type="radio"]:checked').attr("id");
    console.log(selectBro);
    window.open("about:blank").location.href =
      "https://book.allviaedu.com/view/index.html?contbase=/" + selectBro + "/&title=abcd";
  });

  //price anchor
  var anchor = $(".anchor li");

  anchor.on("click", function (e) {
    e.preventDefault();
    var thisAn = $(this).find("> a").attr("href").replace("#", ".");
    thisSpot = $(thisAn).offset().top - topArea;

    if (thisAn == ".price01") thisSpot = 0;
    if ($(this).closest(".anchor").is(".feature_an")) {
      thisSpot = $(thisAn).offset().top - topArea;
    }

    $("html, body").animate({
      scrollTop: thisSpot,
    });
  });

  console.log("price_con pb =", parseInt($(".price01").css("padding-bottom")));

  $(window).scroll(() => {
    var paddingBottom = parseInt($(".price01").css("padding-bottom"));

    var spot02, spot03, spot04;
    if ($(".price02").length !== 0) spot02 = $(".price02").offset().top - topArea - paddingBottom;
    if ($(".price03").length !== 0) spot03 = $(".price03").offset().top - topArea - paddingBottom;
    if ($(".price04").length !== 0) spot04 = $(".price04").offset().top - topArea - paddingBottom;

    $(".anchor li").removeClass("on");

    if ($("html, body").scrollTop() < spot02) {
      $(".anchor li:nth-child(1)").addClass("on");
    } else if (spot02 <= $("html, body").scrollTop() && $("html, body").scrollTop() < spot03) {
      $(".anchor li:nth-child(2)").addClass("on");
    } else if (spot03 <= $("html, body").scrollTop() && $("html, body").scrollTop() < spot04) {
      $(".anchor li:nth-child(3)").addClass("on");
    } else if (spot04 <= $("html, body").scrollTop()) {
      $(".anchor li:nth-child(4)").addClass("on");
    }
  });

  $win.on("hashchange", function () {
    scrollMove();
  });

  if (location.href.match("#") !== null && location.hash !== "#accordion") {
    scrollMove();
  }

  function scrollMove() {
    if (location.hash !== "#;") {
      var moveClass = location.hash.replace("#", "."),
        moveTop = $(moveClass).position().top;

      if (moveClass == ".price01") moveTop = 0;

      $("body, html").animate(
        {
          scrollTop: moveTop,
        },
        700
      );
    }
  }

  //yes
  var yesWrap = $(".yes_chk_wrap");
  yesWrap.each(function () {
    var yesBtn = $(this).find(".this_chk"),
      yesInp = $(this).find(".this_inp");

    $(this)
      .find("input")
      .on("change", function () {
        if (yesBtn.find("input").prop("checked")) {
          if (yesInp.prop("tagName") == "INPUT") {
            yesInp.removeClass("disable").removeAttr("disabled");
          } else {
            yesInp.removeClass("disable").find("input").removeAttr("disabled");
          }
        } else {
          if (yesInp.prop("tagName") == "INPUT") {
            yesInp.addClass("disable").attr("disabled", "disabled");
          } else {
            yesInp.addClass("disable").find("input").attr("disabled", "disabled");
          }
        }
      });
  });

  //현재 페이지 모바일 메뉴 펼침
  var cntPage = $(".current");
  cntPage.closest("ul").prev("a").trigger("click");

  $(".no_btn").on("click", function (e) {
    e.preventDefault();
  });

  $(".ac_tab li").on("click", function (e) {
    e.preventDefault();
    $("body, html").animate(
      {
        scrollTop: $(".activity_tabwrap").position().top,
      },
      500
    );
  });

  if (getCookie("lang") === "ja") {
    $("body").addClass("lang_jp");
  }

  if (getCookie("lang") === "es") {
    $("body").addClass("lang_es");
  }

  $("body").css("visibility", "visible");

  function reSizeOd() {
    if (getCookie("lang") === "es") {
      if ($win.width() > 950) {
        $(".oxf_tool .tool_text_list").addClass("es");
      } else {
        $(".oxf_tool .tool_text_list").removeClass("es");
      }
    }
  }

  /* [s] 2023-11-14 */
  // const pop_once = document.querySelectorAll(".pop_once");
  // function showOnce(pop) {
  //   const closeBtn = pop.querySelector(".btn_close");
  //   const is_pop_show = sessionStorage.getItem(`alreadyShow_${pop.id}`);
  //   if (is_pop_show != "already shown") pop.style.display = "block";
  //   closeBtn.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     sessionStorage.setItem(`alreadyShow_${pop.id}`, "already shown");
  //     pop.style.display = "none";
  //   });
  // }
  // pop_once.forEach((pop) => showOnce(pop));

  var toggleMainPopup = function () {
    var handleStorage = {
      setStorage: function (name, exp) {
        var date = new Date();
        date = date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
        localStorage.setItem(name, date);
      },
      getStorage: function (name) {
        var now = new Date();
        now = now.setTime(now.getTime());
        return parseInt(localStorage.getItem(name)) > now;
      },
    };

    if (handleStorage.getStorage("today")) {
      $(".pop_once").removeClass("on");
    } else {
      $(".pop_once").addClass("on");
    }

    $(".pop_once").on("click", ".btn_close", function () {
      // 로컬 스토리지에 today라는 이름으로 1일(24시간 뒤) 동안 보이지 않게
      handleStorage.setStorage("today", 1);
      $(this).parents(".pop_once.on").removeClass("on");
    });
  };

  toggleMainPopup();
  /* [e] 2023-11-14 */

  // 2023-10-27 floating
  const floating = document.getElementById("floating");
  const floatingList = floating.querySelector("ul");
  const floatingBanner = floatingList.querySelectorAll("li");
  const floatingPrev = floating.querySelector(".btn_prev");
  const floatingNext = floating.querySelector(".btn_next");
  const disabledClass = "disabled";
  const movePercent = 100 / floatingBanner.length;
  const endPercent = -movePercent * (floatingBanner.length - 1);
  let currentMovePercent = 0;

  floatingList.style.width = `${100 * floatingBanner.length}%`;
  floatingPrev.classList.add(disabledClass);
  if (floatingBanner.length === 1) floatingNext.classList.add(disabledClass);

  floatingPrev.addEventListener("click", (e) => {
    if (e.target.classList.contains(disabledClass)) return;
    floatingList.style.transform = `translateX(${currentMovePercent + movePercent}%)`;
    currentMovePercent += movePercent;
    if (currentMovePercent === 0) e.target.classList.add(disabledClass);
    if (currentMovePercent !== endPercent) floatingNext.classList.remove(disabledClass);
  });

  floatingNext.addEventListener("click", (e) => {
    if (e.target.classList.contains(disabledClass)) return;
    floatingList.style.transform = `translateX(${currentMovePercent - movePercent}%)`;
    currentMovePercent -= movePercent;
    if (currentMovePercent === endPercent) e.target.classList.add(disabledClass);
    if (currentMovePercent !== 0) floatingPrev.classList.remove(disabledClass);
  });

  // 2023-06-09 챗봇
  const chatbot = document.getElementById("custom_chat_button");
  const chatbot_close = chatbot.querySelector(".close");
  chatbot_close.addEventListener("click", () => {
    chatbot.style.display = "none";
  });
});

function XSSRemoveTag(str) {
  let sting = str;

  sting = sting.replaceAll("<", "&lt;");
  sting = sting.replaceAll(">", "&gt;");
  sting = sting.replaceAll('"', "&#34;");
  sting = sting.replaceAll("'", "&#39;");
  sting = sting.replaceAll("%00", "null;");
  sting = sting.replaceAll("%", "&#37;");

  return sting;
}

function XSSRecoverTag(str) {
  let sting = str;

  sting = sting.replaceAll("&lt;", "<");
  sting = sting.replaceAll("&gt;", ">");
  sting = sting.replaceAll("&#34;", '"');
  sting = sting.replaceAll("&#39;", "'");
  sting = sting.replaceAll("null;", "%00");
  sting = sting.replaceAll("&#37;", "%");

  return sting;
}

function getCookie(cName) {
  cName = cName + "=";
  let cookieData = document.cookie;
  let start = cookieData.indexOf(cName);
  let cValue = "";
  if (start != -1) {
    start += cName.length;
    let end = cookieData.indexOf(";", start);
    if (end == -1) end = cookieData.length;
    cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
}
