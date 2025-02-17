// Ensure all IDs and classes are in quotes
const seriesLink = document.getElementById("seriesLink");
const movieLink = document.getElementById("moviesLink");
const links = document.getElementsByClassName("links");
const watchlist = document.getElementsByClassName("watchlist");
const moviesContainer = document.getElementById("moviesContainer");
const listofitems = document.getElementsByClassName("listofitems");
const seriesContainer = document.getElementById("seriesContainer");
const seriesList = document.getElementById("seriesList");
const movielist = document.getElementById("movieList");
const add = document.querySelectorAll(".add");
const ve = document.getElementById("ve");
const listsclass = document.querySelectorAll("lists");
// Check if seriesLink is correctly referenced
const saveSeries = document.getElementById("saveSeries");
const cleanSeries = document.getElementById("cleanSeries");
seriesLink.addEventListener("click", function (ev) {
  seriesContainer.style.display = "block";
  moviesContainer.style.display = "none";
});

movieLink.addEventListener("click", function (e) {
  seriesContainer.style.display = "none";
  moviesContainer.style.display = "block";
});

//since the add represent list of elements in array we need to loop over
let isclicked = false;

seriesLink.addEventListener("click", function (z) {
  isclicked = true;
  if (isclicked) {
    add.forEach((element) => {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        const newElement = document.createElement("textarea");
        seriesList.appendChild(newElement);
        newElement.classList.add("newlist");
        console.log(newElement);
      });
    });
  }
});

movieLink.addEventListener("click", function (z) {
  isclicked = true;
  if (isclicked) {
    add.forEach((element) => {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        const newElement = document.createElement("textarea");
        movielist.appendChild(newElement);
        newElement.classList.add("newlist");
      });
    });
  }
});
// newElement.style.listStyle = "none";
//ve.style.display = "block";

// Similarly, you can check for movieLink and others if needed
saveSeries.addEventListener("click", function () {
  const seriesItems = Array.from(
    document.getElementById("seriesList").children
  ).map((textarea) => textarea.value);
  console.log(JSON.stringify(seriesItems));
  localStorage.setItem("series", JSON.stringify(seriesItems));
});

window.addEventListener("load", function loadWatchlists() {
  //const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
  const savedSeries = JSON.parse(localStorage.getItem("series")) || [];

  /* savedMovies.forEach((movie) => {
    const newListItem = document.createElement("li");
    newListItem.textContent = movie;
    document.getElementById("movieList").appendChild(newListItem);
  });*/

  savedSeries.forEach((series) => {
    const newListItem = document.createElement("textarea");
    newListItem.value = series;
    document.getElementById("seriesList").appendChild(newListItem);
  });

  cleanSeries.addEventListener("click", () => {
    localStorage.removeItem("series");
  });
});
