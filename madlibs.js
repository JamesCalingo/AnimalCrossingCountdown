const actions = ["eating spicy food", "flamenco dancing", "collecting stamps", "surfing the web", "fixing things", "window shopping", "woodworking", "collecting figurines", "reading fortunes"];

const places = ["toothbrush", "glasses case", "pocketbook", "microphone", "photo album", "microscope", "hand mirror", "change jar", "fitted sheet"];

const desserts = ["almond jelly", "gingerbread", "shaved ice", "cotton candy", "apple cobbler"];

const activities = ["hula dancing", "golf", "tap dancing", "cricket", "badminton", "archery"];

let select = array => {
let randNum=Math.floor(Math.random() * array.length);
let selection = array[randNum];
return selection
};

let phraseSelect = Math.round(Math.random());

if(phraseSelect === 0){
let thing1=select(actions);
let thing2=select(places);

console.log(`Touchdown like ${thing1} in a ${thing2}--we are parked and proud!`)
}

else{
  let thing1=select(desserts);
  let thing2=select(activities)
console.log(`Trainwreck ${thing1} is reporting tango ${thing2} is go.`)
};