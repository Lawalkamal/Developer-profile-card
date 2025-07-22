const showBtn = document.querySelector("#show-details");
const moreDetails = document.querySelector(".full");

showBtn.addEventListener('click', function () {
    if (moreDetails.classList.contains("hidden")) {
      moreDetails.classList.remove("hidden");
      showBtn.textContent = "Show less detail";
    } else {
      moreDetails.classList.add("hidden");
      showBtn.textContent = "Show more details";
    }
});
