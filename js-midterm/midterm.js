const redGnome = document.body.querySelector("#redGnome");
const blueGnome = document.body.querySelector("#blueGnome");
const greenGnome = document.body.querySelector("#greenGnome");
const volumeText = document.body.querySelector("#volume");
const canvas = document.querySelector("canvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);


var currentVol = random(25,75);
        volumeText.innerHTML = "Volume: " + currentVol;


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Gnome{
    constructor(volume, x,y, velX, velY, heightInput, widthInput){
        this.volume = volume
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.height = heightInput;
        this.width = widthInput;
        console.log(width + " " + height);
    }

    update(){
        if(this.x+this.velX +this.width >= width || this.x+this.velX <= 0){
            this.velX = -(this.velX);
            console.log("Switching x direction");
        }
    
        if(this.y + this.velY+this.height >= height || this.y+this.velY <= 0){
            this.velY = -(this.velY);
            console.log("Switching y direction");
        }
        
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;

    }

    randomNewPosition(){
        this.x = random(0, width);
        this.y = random(0, height);
        this.velX = random(-5, 5);
        this.velY = random(-5, 5);
    }

    gotClicked(){
        this.randomNewPosition();
        console.log("Sound has been updated");
        if(currentVol + this.volume <= 100 && currentVol + this.volume >= 0){
            currentVol += this.volume;
        }
        volumeText.innerHTML = "Volume: " + currentVol;
    }
}

const redGnomeObject = new Gnome(2, 100, 100, 1, 1, redGnome.height, redGnome.width);
redGnome.style.left = redGnomeObject.x+"px";
redGnome.style.top = redGnomeObject.y+"px";
const blueGnomeObject = new Gnome(-2, 400, 400, 2, 1.5, blueGnome.height, blueGnome.width);
blueGnome.style.left = blueGnomeObject.x+"px";
blueGnome.style.top = blueGnomeObject.y+"px";
const greenGnomeObject = new Gnome(0, 250, 250, -2, 1.5, greenGnome.height, greenGnome.width);
greenGnome.style.left = greenGnomeObject.x+"px";
greenGnome.style.top = greenGnomeObject.y+"px";

function updateRedGnome(){
    console.log("Before Red Update");
    console.log(redGnomeObject.x);
    console.log(redGnomeObject.y);
    redGnomeObject.gotClicked();
    console.log("After Blue Update")
    console.log(redGnomeObject.x);
    console.log(redGnomeObject.y);
    redGnome.style.left = redGnomeObject.x+"px";
    redGnome.style.top = redGnomeObject.y+"px";
    console.log("The image should have ");
    console.log(redGnome.style.left);
    console.log(redGnome.style.top);
}

function updateBlueGnome(){
    console.log("Before Blue Update");
    console.log(blueGnomeObject.x);
    console.log(blueGnomeObject.y);
    blueGnomeObject.gotClicked();
    console.log("After Blue Update")
    console.log(blueGnomeObject.x);
    console.log(redGnomeObject.y);
    blueGnome.style.left = blueGnomeObject.x+"px";
    blueGnome.style.top = blueGnomeObject.y+"px";
    console.log("The image should have ");
    console.log(blueGnome.style.left);
    console.log(blueGnome.style.top);
}

function updateGreenGnome(){
    greenGnomeObject.gotClicked();
    greenGnome.style.left = greenGnomeObject.x+"px";
    greenGnome.style.top = greenGnomeObject.y+"px";
    currentVol = random(0,100);
    console.log("Entered Green Gnome");
    window.open("./gnomeMeme.webp", "_blank");
}

function redGnomeClicked(){
    console.log("RED Gnome Clicked");
    requestAnimationFrame(updateRedGnome);
}

function blueGnomeClicked(){
    console.log("BLUE Gnome Clicked");
    requestAnimationFrame(updateBlueGnome);
}


function greenGnomeClicked(){
    updateGreenGnome();
}

redGnome.addEventListener('mouseenter', redGnomeClicked);
blueGnome.addEventListener('mouseenter', blueGnomeClicked);
greenGnome.addEventListener('mouseenter', greenGnomeClicked);


function loop(){
    redGnomeObject.update();
    redGnome.style.left = redGnomeObject.x+"px";
    redGnome.style.top = redGnomeObject.y+"px";
    blueGnomeObject.update();
    blueGnome.style.left = blueGnomeObject.x+"px";
    blueGnome.style.top = blueGnomeObject.y+"px";
    greenGnomeObject.update();
    greenGnome.style.left = greenGnomeObject.x+"px";
    greenGnome.style.top = greenGnomeObject.y+"px";
    requestAnimationFrame(loop);
}

loop();