'use strict'

var merchPic = [];

function busMallImg (picName, imagePath) {
    this.picName = picName;
    this.imagePath = imagePath;
    this.numClicked = 0;
    this.timesRendered = 0;
    merchPic.push(this);
}

new busMallImg('bag', '/assets/bag.jpg');
new busMallImg('banana', '/assets/banana.jpg');
new busMallImg('bathroom', '/assets/bathroom.jpg');
new busMallImg('boots', '/assets/boots.jpg');
new busMallImg('breakfast', '/assets/breakfast.jpg');
new busMallImg('bubblegum', '/assets/bubblegum.jpg');
new busMallImg('chair', '/assets/chair.jpg');
new busMallImg('cthulhu', '/assets/cthulhu.jpg');
new busMallImg('dog-duck', '/assets/dog-duck.jpg');
new busMallImg('dragon', '/assets/dragon.jpg');
new busMallImg('pen', '/assets/pen.jpg');
new busMallImg('pet-sweep', '/assets/pet-sweep.jpg');
new busMallImg('scissors', '/assets/scissors.jpg');
new busMallImg('shark', '/assets/shark.jpg');
new busMallImg('sweep', '/assets/sweep.png');
new busMallImg('tauntaun', '/assets/tauntaun.jpg');
new busMallImg('unicorn', '/assets/unicorn.jpg');
new busMallImg('usb', '/assets/usb.gif');
new busMallImg('water-can', '/assets/water-can.jpg');
new busMallImg('wine-glass', '/assets/wine-glass.jpg');

var img1 = document.getElementById('source1');
var img2 = document.getElementById('source2');
var img3 = document.getElementById('source3');
console.log(merchPic)

function generateRandomImages() {
    var index = Math.floor(Math.random() * merchPic.length);
    while (
        merchPic[index].picName === img1.picName ||
        merchPic[index].picName === img2.picName ||
        merchPic[index].picName === img3.picName 
    ) {
        index = Math.floor(Math.random() * merchPic.length);

    }
    return merchPic[index];
}

function renderImg() {
    console.log(img1.src);
    console.log(img2.src);
    console.log(img3.src);


var newImg1 = generateRandomImages();
img1.src = newImg1.imagePath;
img1.name = newImg1.name;
newImg1.timesRendered++;  

var newImg2 = generateRandomImages();
img2.src = newImg2.imagePath;
img2.name = newImg2.name;
newImg2.timesRendered++; 

var newImg3 = generateRandomImages();
img3.src = newImg3.imagePath;
img3.name = newImg3.name;
newImg3.timesRendered++; 

}
renderImg();

function clickHandler(event) {
    console.log(event.target.name);


for (var i = 0; i < imagePath.length; i++) {
    if (imagePath[i].name === event.target.name) {
        imagePath[i].numClicked++;
    }
}
renderImg();
}
img1.addEventListener('click', clickHandler);
img2.addEventListener('click', clickHandler);
img3.addEventListener('click', clickHandler);