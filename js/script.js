const navigation = document.querySelectorAll(".navigation");
const genbody = document.querySelectorAll(".gen-body");
const toggleButtons = document.querySelectorAll(".toogle")

toggleButtons.forEach((button, index) => {
     button.addEventListener("click", function () {
          if (navigation[index].classList.contains("navigation-hidden")) {
               navigation[index].classList.remove("navigation-hidden");
               genbody[index].classList.remove("gen-body-full");
          } else {
               navigation[index].classList.add("navigation-hidden");
               genbody[index].classList.add("gen-body-full");
          }
     });
});