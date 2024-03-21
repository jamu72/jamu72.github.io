const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "Maybe it was 20 fahrenheit, but idk. :insertx: and wanted to go to Popeyes for that cripsy chicken. But they got lost and they got to :inserty:, then hit the gritty.They also  :insertz:. Bob no longer wanted to live, but found his way to popeyes and go popeyes. :insertx: bought 300 pounds of chicken.";
let insertX = ["Selena Gomez", "Big Daddy Jr.", "Omni-man"];
let insertY = ["your mom's house", "the place no one should ever go also known as Gary Indiana", "33.018364, -96.734236"];
let insertZ = ["knew how he was going to die but not when", "got turned into a cat after laughing at a wizard", "became immortal but would die if he was ever touched by an immmortal snail that is always chasing him"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);



    if(customName.value !== '') {
      const name = customName.value;
      newStory = newStory.replaceAll("Bob", name);
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(300/14) + ' stones';
      const temperature =  Math.round((94-32)*5/9) + " cels";
      newStory = newStory.replaceAll("94 fahrenheit", temperature);
      newStory = newStory.replaceAll("300 pounds", weight);
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
  }


