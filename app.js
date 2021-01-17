'use strict';

var maxAttempt = 25;
var userAttemptCounter = 0;

var firstImageIndex;
var secondImageIndex;
var thirdImageIndex;

var firstImageElement = document.getElementById('firstImg');
var secondImageElement = document.getElementById('secondImg');
var thirdImageElement = document.getElementById('thirdImg');

function Products(name, source) {
    this.name = name;
    this.source = source;
    this.showenImgTimes = 0;
    this.vote=0;

    Products.prototype.allProducts.push(this);    
}

Products.prototype.allProducts = [];
new Products('bag', 'img/bag.jpg');
new Products('banana', 'img/banana.jpg');
new Products('bathroom', 'img/bathroom.jpg');
new Products('boots', 'img/boots.jpg');
new Products('breakfast', 'img/breakfast.jpg');
new Products('bubblegum', 'img/bubblegum.jpg');
new Products('chair', 'img/chair.jpg');
new Products('cthulhu', 'img/cthulhu.jpg');
new Products('dog-duck', 'img/dog-duck.jpg');
new Products('dragon', 'img/dragon.jpg');
new Products('pen', 'img/pen.jpg');
new Products('pet-sweep', 'img/pet-sweep.jpg');
new Products('scissor', 'img/scissors.jpg');
new Products('shark', 'img/shark.jpg');
new Products('sweep', 'img/sweep.png');
new Products('tauntaun', 'img/tauntaun.jpg');
new Products('unicorn', 'img/unicorn.jpg');
new Products('usb', 'img/usb.gif');
new Products('water-can', 'img/water-can.jpg');
new Products('wine-glass', 'img/wine-glass.jpg');


function generateRandomIndex() {
   return Math.floor(Math.random() * Products.prototype.allProducts.length);
}
rendernThreeRandomImages();

function rendernThreeRandomImages() {

    // var firstImageIndex ;
    // var secondImageIndex ;
    // var thirdImageIndex ;
    console.log('Hi'); 

    firstImageIndex = generateRandomIndex();
    console.log(firstImageIndex+'Hi'); 
    do {
        secondImageIndex = generateRandomIndex();
        thirdImageIndex = generateRandomIndex();
    }
    while (secondImageIndex === firstImageIndex || secondImageIndex === thirdImageIndex || firstImageIndex === thirdImageIndex );
   
    Products.prototype.allProducts[firstImageIndex].showenImgTimes++;
    Products.prototype.allProducts[secondImageIndex].showenImgTimes++;
    Products.prototype.allProducts[thirdImageIndex].showenImgTimes++;


    firstImageElement.src = Products.prototype.allProducts[firstImageIndex].source;
    secondImageElement.src = Products.prototype.allProducts[secondImageIndex].source;
    thirdImageElement.src = Products.prototype.allProducts[thirdImageIndex].source;
};


function handleClick(event) {
    console.log(event.target.id);
    userAttemptCounter++;
    if (userAttemptCounter < maxAttempt ) {
        if (event.target.id === 'firstImg') {
            Products.prototype.allProducts[firstImageIndex].vote++;
        }
        else if (event.target.id === 'secondImg') {
            Products.prototype.allProducts[secondImageIndex].vote++;
        }
        else {
            Products.prototype.allProducts[thirdImageIndex].vote++;
        }
        rendernThreeRandomImages();
    } else {

        var resultList = document.getElementById('resultList');
        var productResult = 0
        for (var i = 0; i < Products.prototype.allProducts.length; i++) {
            productResult = document.createElement('li');
            resultList.appendChild(productResult);
            productResult.textContent = Products.prototype.allProducts[i].name + ' had ' +  Products.prototype.allProducts[i].vote+ ' votes ' +
                ', and was seen '+ Products.prototype.allProducts[i].showenImgTimes +' times'
        }
        firstImageElement.removeEventListener('click', handleClick);
secondImageElement.removeEventListener('click', handleClick);
thirdImageElement.removeEventListener('click', handleClick);
    }
}
    
// handleClick();
firstImageElement.addEventListener('click', handleClick);
secondImageElement.addEventListener('click', handleClick);
thirdImageElement.addEventListener('click', handleClick);