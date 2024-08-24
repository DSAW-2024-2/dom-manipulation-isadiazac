const images = ["image_1.jpg", "image_2.jpeg", "image_3.jpeg"];

const image = document.getElementById("img");
const btnback = document.getElementById("btnback");
const btnnext = document.getElementById("btnnext");

function imagechange() {
  image.src = images[image_number];
}

function imagechange() {
  image.src = images[image_number];
  image.classList.add("fade-out");
  setTimeout(() => {
    image.classList.remove("fade-out");
    image.classList.add("fade-in");
  }, 500);
  setTimeout(() => {
    image.classList.remove("fade-in");
  }, 1000);
}

let image_number = 0;
btnback.style.visibility = "hidden";
btnnext.style.visibility = "visible";

btnback.addEventListener("click", () => {
  if (image_number > 0) {
    btnback.classList.remove("disabled");
    btnback.classList.add("enabled");
    image_number--;
    btnnext.classList.remove("disabled");
    btnnext.classList.add("enabled");
    btnnext.style.visibility = "visible";
  } else {
    btnback.classList.add("disabled");
    btnback.classList.remove("enabled");
    btnback.style.visibility = "hidden";
  }
  imagechange();
  if ((image_number = 0)) {
    btnback.style.visibility = "hidden";
    btnnext.style.visibility = "visible";
  }
});

btnnext.addEventListener("click", () => {
  if (image_number < images.length - 1) {
    btnnext.classList.remove("disabled");
    btnnext.classList.add("enabled");
    image_number++;
    btnback.classList.remove("disabled");
    btnback.classList.add("enabled");
    btnback.style.visibility = "visible";
  } else {
    btnnext.classList.add("disabled");
    btnnext.classList.remove("enabled");
    btnnext.style.visibility = "hidden";
  }
  imagechange();
  if (image_number === images.length - 1) {
    btnnext.style.visibility = "hidden";
  }
});
