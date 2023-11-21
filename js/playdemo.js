document.addEventListener("DOMContentLoaded", () => {
  const show = (el) => (el.style.display = "block");
  const hide = (el) => (el.style.display = "none");

  // Step
  const demoStep = document.querySelectorAll(".step_wrap .step");
  const stepBtnNext = document.querySelector(".step_btns .btn_next");
  const stepBtnDone = document.querySelector(".step_btns .btn_done");

  // 2023-05-08 버튼 비활성화
  hide(stepBtnNext);
  hide(stepBtnDone);

  if (demoStep) {
    demoStep.forEach((step, sidx) => {
      if (sidx === 0) show(step);
      else hide(step);
    });
  }

  // 2023-05-08 현재 스텝 찾기 함수로 뺌
  const findCurrentStep = () => Array.from(demoStep).find((step) => step.style.display === "block");

  // 2023-05-08 이전 경로에 따라 버튼 활성화
  const activeProgramBtn = Array.from(findCurrentStep().querySelectorAll(".pr_btn"))?.find((program) =>
    program.hasAttribute("onActive")
  );

  // [LOCAL TEST]
  if (/play_/g.test(document.referrer)) {
    // if (/demo\/\w+/g.test(document.referrer)) {
    // 서브 경로
    activeProgramBtn.classList.add("on");
    if (demoStep.length === 1) show(stepBtnDone);
    else show(stepBtnNext);
  }

  function goNextStep() {
    const currentStep = findCurrentStep(); // 2023-05-08
    const nextStep = currentStep.nextElementSibling;

    hide(currentStep);
    show(nextStep);
    hide(stepBtnNext); // 항목 선택시에 보임
  }
  stepBtnNext.addEventListener("click", goNextStep);

  stepBtnDone.addEventListener("click", () => {
    // 1. activity pop open
    // 2. other pop open
    // => check activeView(attr) in currentStep

    const currentStep = findCurrentStep(); // 2023-05-08
    const activeView = currentStep.getAttribute("activeView");
    const choices = [...currentStep.children].find((el) => el.classList.contains("choices"));
    let activeChoice, activeIndex;
    if (choices) {
      activeChoice = Array.from(currentStep.querySelectorAll("input")).find((radio) => radio.checked).parentElement;
      activeIndex = Array.from(currentStep.querySelectorAll(".item")).indexOf(activeChoice);
    }

    if (activeView !== null) {
      if (activeView === "activity") {
        openActivity(activeChoice, activeIndex);
      } else {
        openChoicePop(activeChoice, activeView);
      }
    }
  });

  // Step Choice
  const choices = document.querySelectorAll(".step .choices .item");

  if (choices) {
    choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        const isChecked = choice.querySelector("input").checked;
        const currentStep = findCurrentStep(); // 2023-05-08
        const lastStep = demoStep[demoStep.length - 1];

        // check & last_step or last choice => done
        if (isChecked) {
          if (currentStep === lastStep || choice.getAttribute("last-choice") !== null) {
            hide(stepBtnNext);
            show(stepBtnDone);
          } else {
            hide(stepBtnDone);
            show(stepBtnNext);
          }
        }
      });
    });
  }

  // Popup Common
  const popBackBtn = document.querySelectorAll(".demo_pop .btn_back");

  if (popBackBtn) {
    popBackBtn.forEach((btn, idx) => {
      btn.addEventListener("click", (e) => {
        let popContainer = e.target;
        for (; !popContainer.classList.contains("demo_pop"); popContainer = popContainer.parentElement);
        hide(popContainer);

        const teacherIframe = document.querySelector("#teacher_m iframe");
        const studentIframe = document.querySelector("#student_m iframe");
        const iframes = popContainer.querySelectorAll("iframe");
        const videos = popContainer.querySelectorAll("video");

        if (teacherIframe) teacherIframe.src = null;
        if (studentIframe) studentIframe.src = null;

        // iframe video reload => stop
        if (iframes) iframes.forEach((ifr) => (ifr.src += ""));
        if (videos)
          videos.forEach((vid) => {
            vid.pause();
            vid.currentTime = 0;
          });
      });
    });
  }

  // How It Works? Popup
  const howBtn = document.querySelectorAll(".btn_how");
  const howPop = document.querySelectorAll(".demo_pop.howit");

  function openHowPop(howNum, program) {
    const thisHowPop = Array.from(howPop).find((pop) => pop.classList.contains(program));
    const thisHowThumb = thisHowPop.querySelectorAll(".thumb");

    show(thisHowPop);

    thisHowThumb.forEach((thumb) => {
      const videos = thumb.querySelectorAll("iframe");
      videos.forEach((video, vidx) => {
        if (vidx === Number(howNum) - 1) show(video);
        else hide(video);
      });
    });
  }

  if (howBtn) {
    howBtn.forEach((btn) => {
      const howNum = btn.getAttribute("how_num");
      const program = Array.from(btn.classList).find((cl) => cl !== "btn_how");
      btn.addEventListener("click", () => openHowPop(howNum, program));
    });
  }

  // Demo Popup
  const activityPop = document.querySelector(".demo_pop.activity");
  const activityTitle = activityPop.querySelector(".ac_tit");
  const titles = activityTitle.querySelectorAll(".title");
  const subTitle = activityPop.querySelectorAll(".sub_tit");
  const haveSub = [...titles].filter((tit) => tit.getAttribute("haveSub") !== null);
  const activityContent = activityPop.querySelector(".ac_con");
  const activityVideo = activityPop.querySelectorAll(".thumb");
  const infoBtn = document.querySelector(".btn_info");
  const demoTip = document.getElementById("demo_tip");
  const chatbot = document.getElementById("custom_chat_button");

  function adjustSizeView(view) {
    const frame = view.offsetParent;
    let scale = frame.offsetWidth / 1280;
    view.style.transform = `scale(${scale})`;
  }

  function showSubTitle(tit) {
    if (haveSub.includes(tit)) {
      subTitle.forEach((sub, sidx) => {
        if (sidx === haveSub.indexOf(tit)) {
          show(sub);
          sub.querySelectorAll("li")[0].click();
        } else {
          hide(sub);
        }
      });
    } else {
      subTitle.forEach((s) => hide(s));
    }
  }

  function showActTitle(idx) {
    titles.forEach((tit, tIdx) => {
      if (idx !== undefined) {
        if (tIdx === idx) {
          show(tit);
          showSubTitle(tit);
        } else {
          hide(tit);
        }
      }

      if (activityTitle.classList.contains("more")) {
        if (tIdx === 0) tit.click();
      }
    });
  }

  if (titles) {
    titles.forEach((tit, tidx) => {
      const siblings = [...tit.parentElement.children].filter((el) => el !== tit);

      tit.addEventListener("click", () => {
        tit.classList.add("on");
        siblings.forEach((s) => s.classList.remove("on"));
        showSubTitle(tit);
        demoTip.querySelectorAll("p").forEach((tip, idx) => {
          if (idx === tidx) show(tip);
          else hide(tip);
        });
        show(demoTip);
      });
    });
  }

  function openActivity(activeChoice, activeIndex) {
    const teacherView = document.querySelector("#teacher_m div");
    const studentView = document.querySelector("#student_m div");
    let activeFunc, viewType;
    if (activeChoice) {
      activeFunc = activeChoice.getAttribute("activefunc");
      viewType = activeChoice.getAttribute("viewType");
    }
    const currentStep = findCurrentStep(); // 2023-05-08
    const videoType = [...currentStep.querySelectorAll(".item")].filter(
      (el) => el.getAttribute("viewType") === "video"
    );

    show(activityPop);
    if (activeFunc) eval(activeFunc);
    if (activeIndex !== undefined) showActTitle(activeIndex);
    else showActTitle();
    if (viewType && viewType === "video") {
      if (activityContent) hide(activityContent);
      if (activityVideo) {
        activityVideo.forEach((video, vidx) => {
          if (vidx === videoType.indexOf(activeChoice)) {
            show(video);
            const videoItem = video.querySelectorAll("iframe");
            videoItem.forEach((item, i) => {
              if (i === 0) show(item);
              else hide(item);
            });
          } else hide(video);
        });
      }
      if (infoBtn) hide(infoBtn);
    } else {
      if (activityVideo) activityVideo.forEach((video) => (video.style.display = "none"));
      if (activityContent) show(activityContent);

      if (teacherView) adjustSizeView(teacherView);
      if (studentView) adjustSizeView(studentView);
      show(demoTip);
    }
  }

  if (subTitle) {
    subTitle.forEach((sub) => {
      const subItems = sub.querySelectorAll("li");

      subItems.forEach((item, idx) => {
        const siblings = [...item.parentElement.children].filter((el) => el !== item);
        item.addEventListener("click", () => {
          const activeVideo = [...activityVideo].find((video) => video.style.display === "block");
          item.classList.add("on");
          siblings.forEach((s) => s.classList.remove("on"));
          if (activeVideo) {
            const iframe = activeVideo.querySelectorAll("iframe");
            iframe.forEach((ifr, i) => {
              if (i === idx) show(ifr);
              else hide(ifr);
            });
          }
        });
      });
    });
  }

  // Other Popup (Pre-class...)
  function openChoicePop(choice, value) {
    const choicePop = [...document.querySelectorAll(".demo_pop")].find((pop) => pop.classList.contains(value));
    const choiceIndex = [...choices]
      .filter((v) => v.getAttribute("last-choice") === choice.getAttribute("last-choice"))
      .indexOf(choice);
    // 2023-11-07 .class_tit 클래스 추가
    const choiceTitle = choicePop.querySelectorAll(".class_tit .title");
    const choiceVideo = choicePop.querySelectorAll("iframe");
    // 2023-11-07
    const choiceContent = choicePop.querySelectorAll(".ch-cont");

    function activeChoiceIndex(nodes) {
      nodes.forEach((node, i) => {
        if (i === choiceIndex) show(node);
        else hide(node);
      });
    }
    show(choicePop);
    activeChoiceIndex(choiceTitle);
    activeChoiceIndex(choiceVideo);

    // 2023-11-07
    if (choiceContent) {
      choiceContent.forEach((cont) => {
        if (cont.classList.contains(`con${choiceIndex + 1}`)) {
          show(cont);
        } else {
          hide(cont);
        }
      });
    }
  }

  // screen rotate
  window.addEventListener("orientationchange", () => {
    if (activityPop.style.display === "block" && window.orientation === 90) {
      const currentStep = findCurrentStep(); // 2023-05-08
      let activeChoice, activeFunc;
      if (!currentStep.querySelector(".program")) {
        activeChoice = Array.from(currentStep.querySelectorAll("input")).find((radio) => radio.checked).parentElement;
        activeFunc = activeChoice.getAttribute("activeFunc");
      }

      // wings, elif
      if (activeFunc) eval(activeFunc);
      // od, odf, mathalive
      else {
        const subItems = activityPop.querySelectorAll(".sub_tit li");
        subItems.forEach((sub) => {
          if (sub.classList.contains("on")) sub.click();
        });
      }
    }
  });

  // hide chatbot in playdemo/sub
  if (chatbot) {
    if (/demo\/\w+/g.test(window.location.pathname)) hide(chatbot);
    else show(chatbot);
  }
});
