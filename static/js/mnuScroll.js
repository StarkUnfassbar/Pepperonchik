var mnuScroll = document.querySelector(".mnu-scroll");
var currentScrollPos = window.scrollY;
var mineHead = document.querySelector(".mine-head");
var buttonsPopupOpen = document.querySelectorAll(".popup_link");
var buttonsPopupClose = document.querySelectorAll(".close-popup");
var popups = document.querySelectorAll(".popup");
mnuScroll.addEventListener("click", function() {
  if (mnuScroll.classList.contains("hidden")) {
    mnuScroll.classList.remove("hidden");
  } else {
    mnuScroll.classList.add("hidden");
  }
});

window.addEventListener("scroll", function() {
    currentScrollPos = window.scrollY;
    if (currentScrollPos > mineHead.clientHeight) {
        if (mnuScroll.classList.contains("no-active")) {
            mnuScroll.classList.remove("no-active");
            mnuScroll.classList.add("hidden");
        }
    } else {
        mnuScroll.classList.remove("hidden");
        mnuScroll.classList.add("no-active");
    }
});

buttonsPopupOpen.forEach((buttonPopupOpen) => {
    buttonPopupOpen.addEventListener('click', () => {
        if(mnuScroll.classList.contains("hidden")){
            mnuScroll.classList.remove("hidden");
            mnuScroll.classList.add("no-active");
        } else{
            setTimeout(function () {
                mnuScroll.classList.remove("hidden");
            }, 30);          
            mnuScroll.classList.add("no-active");
        }
    });
});

buttonsPopupClose.forEach((buttonPopupClose) => {
    buttonPopupClose.addEventListener('click', () => {
        if(currentScrollPos > mineHead.clientHeight){
            mnuScroll.classList.remove("no-active");
            mnuScroll.classList.add("hidden");
        }
    });
});

popups.forEach((popup) => {
    popup.addEventListener("click", function (e){
        if (!e.target.closest('.popup_content')){
            if(currentScrollPos > mineHead.clientHeight){
                mnuScroll.classList.remove("no-active");
                mnuScroll.classList.add("hidden");
            }
        }
    });
});