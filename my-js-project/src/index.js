const romain = document.getElementById("romain");

romain.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.currentTarget);
});

const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("img-circle");
  });
});
