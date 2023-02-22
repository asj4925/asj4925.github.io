document.addEventListener('DOMContentLoaded', () => {

    // Step
    const demoStep = document.querySelectorAll(".step_wrap .step");
    const stepBtnNext = document.querySelector(".step_btns .btn_next");
    const stepBtnDone = document.querySelector(".step_btns .btn_done");

    if(demoStep.length === 1) stepBtnNext.style.display = "none";
    else stepBtnDone.style.display = "none";

    if(demoStep) {
        demoStep.forEach((step, sidx) => {
            if(sidx === 0) step.style.display = "block";
            else step.style.display = "none";
        });
    }

    function goNextStep() {
        const currentStep = Array.from(demoStep).find(step => step.style.display === "block");
        const nextStep = currentStep.nextElementSibling;

        currentStep.style.display = "none";
        nextStep.style.display = "block";
        stepBtnNext.style.display = "none"; // 항목 선택시에 보임
    }
    stepBtnNext.addEventListener("click", goNextStep);

    stepBtnDone.addEventListener("click", () => {
        // 1. activity pop open
        // 2. other pop open
        // => check activeView(attr) in currentStep

        const currentStep = Array.from(demoStep).find(step => step.style.display === "block");
        const activeView = currentStep.getAttribute("activeView");
        const choices = [...currentStep.children].find(el => el.classList.contains("choices"));
        let activeChoice, activeIndex;
        if(choices) {
            activeChoice = Array.from(currentStep.querySelectorAll("input")).find(radio => radio.checked).parentElement;
            activeIndex = Array.from(currentStep.querySelectorAll(".item")).indexOf(activeChoice);
        }

        if(activeView !== null) {
            if(activeView === "activity") {
                openActivity(activeChoice, activeIndex);
            } else {
                openChoicePop(activeChoice, activeView);
            }
        }
    });


    // Step Choice
    const choices = document.querySelectorAll(".step .choices .item");

    if(choices) {
        choices.forEach((choice) => {
            choice.addEventListener("click", () => {
                const isChecked = choice.querySelector("input").checked;
                const currentStep = Array.from(demoStep).find(step => step.style.display === "block");
                const lastStep = demoStep[demoStep.length - 1];
    
                // check & last_step or last choice => done
                if(isChecked) {
                    if(currentStep === lastStep || choice.getAttribute("last-choice") !== null) {
                        stepBtnNext.style.display = "none";
                        stepBtnDone.style.display = "block";
                    } else {
                        stepBtnDone.style.display = "none";
                        stepBtnNext.style.display = "block";
                    }
                }
            })
        });
    }


    // Popup Common
    const popBackBtn = document.querySelectorAll(".demo_pop .btn_back");

    if(popBackBtn) {
        popBackBtn.forEach((btn, idx) => {
            btn.addEventListener("click", (e) => {
                let popContainer = e.target;
                for(;!popContainer.classList.contains("demo_pop"); popContainer = popContainer.parentElement);
                popContainer.style.display = "none";
    
                const teacherIframe = document.querySelector("#teacher_m iframe");
                const studentIframe = document.querySelector("#student_m iframe");
                const iframes = popContainer.querySelectorAll("iframe");
                const videos = popContainer.querySelectorAll("video");

                // unlock(); 2023-02-22 삭제

                if(teacherIframe) teacherIframe.src = null;
                if(studentIframe) studentIframe.src = null;

                // iframe video reload => stop
                if(iframes) iframes.forEach((ifr) => ifr.src += '');
                if(videos) videos.forEach((vid) => {
                    vid.pause();
                    vid.currentTime = 0;
                })
            });
        });
    }

        
    // How It Works? Popup
    const howBtn = document.querySelectorAll(".btn_how");
    const howPop = document.querySelectorAll(".demo_pop.howit");

    function openHowPop(howNum, program) {
        const thisHowPop = Array.from(howPop).find(pop => pop.classList.contains(program));
        const thisHowThumb = thisHowPop.querySelectorAll(".thumb");

        thisHowPop.style.display = "block";

        thisHowThumb.forEach((thumb) => {
            const videos = thumb.querySelectorAll("iframe");
            videos.forEach((video, vidx) => {
                if(vidx === Number(howNum) - 1) {
                    video.style.display = "block";
                } else {
                    video.style.display = "none";
                }
            });
        });
    }
    
    if(howBtn) {
        howBtn.forEach((btn) => {
            const howNum = btn.getAttribute("how_num");
            const program = Array.from(btn.classList).find(cl => cl !== "btn_how");
            btn.addEventListener("click", () => openHowPop(howNum, program));
        });
    }


    // Demo Popup
    const activityPop = document.querySelector(".demo_pop.activity");
    const activityTitle = activityPop.querySelector(".ac_tit");
    const titles = activityTitle.querySelectorAll(".title");
    const subTitle = activityPop.querySelectorAll(".sub_tit");
    const haveSub = [...titles].filter(tit => tit.getAttribute("haveSub") !== null);
    const activityContent = activityPop.querySelector(".ac_con");
    const activityVideo = activityPop.querySelectorAll(".thumb");
    const infoBtn = document.querySelector(".btn_info");

    function adjustSizeView(view) {
        const frame = view.offsetParent;
        let scale = frame.offsetWidth / 1280;
        view.style.transform = `scale(${scale})`;
    }

    function showSubTitle(tit) {
        if(haveSub.includes(tit)) {
            subTitle.forEach((sub, sidx) => {
                if(sidx === haveSub.indexOf(tit)) {
                    sub.style.display = "block";
                    sub.querySelectorAll("li")[0].click();
                } else {
                    sub.style.display = "none";
                }
            });
        } else {
            subTitle.forEach(s => s.style.display = "none");
        }  
    }

    function showActTitle(idx) {
        titles.forEach((tit, tIdx) => {
            if(idx !== undefined) {
                if(tIdx === idx) {
                    tit.style.display = "block";
                    showSubTitle(tit);
                } else {
                    tit.style.display = "none";
                }                   
            }

            if(activityTitle.classList.contains("more")) {
                if(tIdx === 0) tit.click(); 
            }
        });
    }

    if(titles) {
        titles.forEach((tit) => {
            const siblings = [...tit.parentElement.children].filter(el => el !== tit);

            tit.addEventListener("click", () => {
                tit.classList.add("on");
                siblings.forEach((s) => s.classList.remove("on"));
                showSubTitle(tit);   
            });
        });
    }

    function openActivity(activeChoice, activeIndex) {
        const teacherView = document.querySelector("#teacher_m div");
        const studentView = document.querySelector("#student_m div");
        let activeFunc, viewType;
        if(activeChoice) {
            activeFunc = activeChoice.getAttribute("activefunc");
            viewType = activeChoice.getAttribute("viewType");
        }
        const currentStep = Array.from(demoStep).find(step => step.style.display === "block");
        const videoType = [...currentStep.querySelectorAll(".item")].filter(el => el.getAttribute("viewType") === "video");
        const demoTip = document.getElementById("demo_tip");

        activityPop.style.display = "block";
        if(activeFunc) eval(activeFunc);
        if(activeIndex !== undefined) showActTitle(activeIndex);
        else showActTitle();
        if(viewType && viewType === "video") {
            if(activityContent) activityContent.style.display = "none";
            if(activityVideo) {
                activityVideo.forEach((video, vidx) => {
                    if(vidx === videoType.indexOf(activeChoice)) {
                        video.style.display = "block";
                        const videoItem = video.querySelectorAll("iframe");
                        videoItem.forEach((item, i) => {
                            if(i === 0) item.style.display = "block";
                            else item.style.display = "none";
                        })
                    } else {
                        video.style.display = "none";
                    }
                });
            }
            if(infoBtn) infoBtn.style.display = "none";
        } else {
            // lock("landscape"); 2023-02-22 삭제
            if(activityVideo) activityVideo.forEach(video => video.style.display = "none");
            if(activityContent) activityContent.style.display = "block";
            if(teacherView) adjustSizeView(teacherView);
            if(studentView) adjustSizeView(studentView);
            demoTip.style.display = "block";
        }
    }

    if(subTitle) {
        subTitle.forEach((sub) => {
            const subItems = sub.querySelectorAll("li");

            subItems.forEach((item, idx) => {
                const siblings = [...item.parentElement.children].filter(el => el !== item);
                item.addEventListener("click", () => {
                    const activeVideo = [...activityVideo].find(video => video.style.display === "block");
                    item.classList.add("on");
                    siblings.forEach((s) => s.classList.remove("on"));
                    if(activeVideo) {
                        const iframe = activeVideo.querySelectorAll("iframe");
                        iframe.forEach((ifr, i) => {
                            if(i === idx) ifr.style.display = "block";
                            else ifr.style.display = "none";
                        })
                    }
                });
            });
        });
    }

    // Other Popup (Pre-class...)
    function openChoicePop(choice, value) {
        const choicePop = [...document.querySelectorAll(".demo_pop")].find(pop => pop.classList.contains(value));
        const choiceIndex = [...choices].filter(v => v.getAttribute("last-choice") === choice.getAttribute("last-choice")).indexOf(choice);
        const choiceTitle = choicePop.querySelectorAll(".title");
        const choiceVideo = choicePop.querySelectorAll("iframe");

        function activeChoiceIndex(nodes) {
            nodes.forEach((node, i) => {
                if(i === choiceIndex) node.style.display = "block";
                else node.style.display = "none";
            });
        }
        choicePop.style.display = "block";
        activeChoiceIndex(choiceTitle);
        activeChoiceIndex(choiceVideo);
    }
        

    // lock orientaion 2023-02-22 삭제
});