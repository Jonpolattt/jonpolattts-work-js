window.addEventListener("DOMContentLoaded", function () {
  // TABS
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContents = document.querySelectorAll(".tab_content"),
    tabParent = document.querySelector(".tab-header__items");

  function hideTabContent() {
    tabContents.forEach((item, index) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(index = 0) {
    tabContents[index].classList.add("show", "fade");
    tabContents[index].classList.remove("hide");
    tabs[index].classList.add("tabheader__item_active");
  }

  tabParent.addEventListener("click", function (e) {
    const target = e.target;

    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, index) => {
        if (target === item) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
    console.log(event.target);
  });

  hideTabContent();
  showTabContent();
});
