'use strict'

var merchPic = [];
var voteRounds = 0;

function busMallImg (picName, imagePath) {
    this.picName = picName;
    this.imagePath = imagePath;
    this.numClicked = 0;
    this.timesRendered = 0;
    merchPic.push(this);
}

new busMallImg('bag', 'assets/bag.jpg');
new busMallImg('banana', 'assets/banana.jpg');
new busMallImg('bathroom', 'assets/bathroom.jpg');
new busMallImg('boots', 'assets/boots.jpg');
new busMallImg('breakfast', 'assets/breakfast.jpg');
new busMallImg('bubblegum', 'assets/bubblegum.jpg');
new busMallImg('chair', 'assets/chair.jpg');
new busMallImg('cthulhu', 'assets/cthulhu.jpg');
new busMallImg('dog-duck', 'assets/dog-duck.jpg');
new busMallImg('dragon', 'assets/dragon.jpg');
new busMallImg('pen', 'assets/pen.jpg');
new busMallImg('pet-sweep', 'assets/pet-sweep.jpg');
new busMallImg('scissors', 'assets/scissors.jpg');
new busMallImg('shark', 'assets/shark.jpg');
new busMallImg('sweep', 'assets/sweep.png');
new busMallImg('tauntaun', 'assets/tauntaun.jpg');
new busMallImg('unicorn', 'assets/unicorn.jpg');
new busMallImg('usb', 'assets/usb.gif');
new busMallImg('water-can', 'assets/water-can.jpg');
new busMallImg('wine-glass', 'assets/wine-glass.jpg');

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
        // console.log(index);
        return merchPic[index];
}

function renderImg() {
    console.log(img1.src);
    // console.log(index);


var newImg1 = generateRandomImages();
img1.src = newImg1.imagePath;
img1.picName = newImg1.picName;
newImg1.timesRendered++;  

var newImg2 = generateRandomImages();
img2.src = newImg2.imagePath;
img2.picName = newImg2.picName;
newImg2.timesRendered++; 

var newImg3 = generateRandomImages();
img3.src = newImg3.imagePath;
img3.picName = newImg3.picName;
newImg3.timesRendered++; 

}
renderImg();

function renderResults() {
    var listEl = document.getElementById('votes');

    for (var i = 0; i < merchPic.length; i++) {
    var votes = document.createElement('li');
    // console.log(merchPic[i].picName)
    var message = (merchPic[i].picName + ' had ' + merchPic[i].numClicked + ' showed ' + merchPic[i].timesRendered + ' times! ');
    votes.textContent = message;
    listEl.appendChild(votes);
}
};


function clickHandler(event) {
    // console.log(event.target.name);
    voteRounds++;
    
    var listEl = document.getElementById("votes")
    listEl.innerHTML = '';
    
    for (var i = 0; i < merchPic.length; i++) {
        // console.log(merchPic[i].picName)
        if (merchPic[i].picName === event.target.picName) {
            merchPic[i].numClicked++;
            renderImg();
        } if (voteRounds === 25) { 
            event = false;           
            renderResults();
            img1.removeEventListener('click', clickHandler);
            img2.removeEventListener('click', clickHandler);
            img3.removeEventListener('click', clickHandler);
            break;
        }
    }
};

    
        



img1.addEventListener('click', clickHandler);
img2.addEventListener('click', clickHandler);
img3.addEventListener('click', clickHandler);
