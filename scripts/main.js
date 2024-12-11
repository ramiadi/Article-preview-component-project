document.addEventListener("DOMContentLoaded", function () {
  const shareButton = document.querySelector(".share");
  const shareMenu = document.querySelector(".share-meny");

  shareButton.addEventListener("click", function () {
    shareMenu.style.display =
      shareMenu.style.display === "flex" ? "none" : "flex";
  });
});
