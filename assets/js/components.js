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
  });

  hideTabContent();
  showTabContent();

  //   FAQ
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      faqItems.forEach((el) => {
        if (el !== item) el.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });

  //   MODAL
  const openModalBtn = document.querySelector(".modal-btn"),
    closeModalBtns = document.querySelectorAll(".close"),
    modal = document.querySelector(".modal-wrapper");

  function openModal() {
    modal.classList.add("flex");
    modal.classList.remove("hide");
    document.querySelector("body").style.overflowY = 'hidden'
  }

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("flex");
    document.querySelector("body").style.overflowY = "scroll";
  }

  openModalBtn.addEventListener("click", function () {
    openModal();
  });

  closeModalBtns.forEach((item) => {
    item.addEventListener("click", function () {
      closeModal();
    });
  });

  modal.addEventListener("click", function (e) {
    if (e.target.classList === modal.classList) {
      closeModal();
    }
  });
});
