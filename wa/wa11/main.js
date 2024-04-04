const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageNames = ["images/huhCat.jpg", "images/wakingUp.jpg", "images/sunshine.jpg", "images/birb.jpg", "images/forg.jpg"];

/* Declaring the alternative text for each image file */
const altText = ["Weird eye that is gross", "Me when I wake up", "You are my sunshine", "birb", "Literally me"];


/* Looping through images */

function imageClicked(imageNumber){
    displayedImage.setAttribute('src', imageNames[imageNumber]);
    displayedImage.setAttribute('alt', altText[imageNames]);
}

function buttonClicked(){
    /* Wiring up the Darken/Lighten button */
    let className = btn.getAttribute("class");
    if(className === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "light";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }else if(className === "light"){
        btn.setAttribute("class", "dark");
        btn.textContent = "dark";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
}

for(let i = 0; i < 5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageNames[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', ()=>imageClicked(i));
}

btn.addEventListener('click', buttonClicked);
