const images = [
    "assets/images/screenshot1.jpg",
    "assets/images/screenshot2.jpg",
    "assets/images/screenshot3.jpg",
    "assets/images/screenshot4.jpg"
];

let index = 0;

const phoneImage = document.getElementById("phoneImage");

setInterval(() => {

    index++;

    if(index >= images.length){
        index = 0;
    }

    phoneImage.src = images[index];

},3000);