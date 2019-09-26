/* js file for budget page */

const toggle = document.querySelector(".toggle");
let items = document.querySelectorAll(".item");

toggle.addEventListener("click", function() {
  items.forEach(item => {
    if (item.style.display == "") {
      item.style.display = "block";
    } else {
      item.style.display = "";
    }
  });
});

//  the code above is for the nav bar
