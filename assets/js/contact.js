window.addEventListener("DOMContentLoaded", function () {
  emailjs.init("Eiepc66CLfc3LE6FW");
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const textArea = document.querySelector("#message");

    if (textArea.value.length < 10) {
      document.querySelector(".error-massage").style.display = "block";
      textArea.style.outline = "1px solid rgb(197, 0, 0)";
    } else {
      emailjs
        .sendForm("service_6i904rp", "template_hopz0q7", form)
        .then(() => {
          alert("Успешно отправлено ✅");
        })
        .catch((error) => {
          console.log("Ошибка:", error);
        });
    }
  });
});
