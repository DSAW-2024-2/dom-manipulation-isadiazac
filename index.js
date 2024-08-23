const images=[
    "image_1.jpg",
    "image_2.jpeg",
    "image_3.jpeg"
];

const image = document.getElementById("img");
const btnback = document.getElementById("btnback");
const btnnext = document.getElementById("btnnext");


function imagechange(){
    image.src=images[image_number];
}

let image_number=0;

btnback.addEventListener("click", () => {
    if (image_number > 0) {
      image_number--;
    } else {
      image_number = images.length - 1;
    }
    imagechange();
  });
  
  btnnext.addEventListener("click", () => {
    if (image_number >= images.length - 1) {
      image_number = 0; 
    } else {
      image_number++;
    }
    imagechange();
  });