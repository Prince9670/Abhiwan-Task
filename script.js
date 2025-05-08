
// search bar

  const searchIcon = document.getElementById("searchIcon");
  const searchBar = document.querySelector(".search-bar");
  const navLinks = document.querySelector(".nav-links");

  searchIcon.addEventListener("click", () => {
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
      navLinks.style.display = "none";
      searchBar.style.display = "block";
    } else {
      navLinks.style.display = "flex";
      searchBar.style.display = "none";
    }
  });
