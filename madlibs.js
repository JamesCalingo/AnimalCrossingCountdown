const actions = ["eating spicy food", "flamenco dancing", "collecting stamps", "surfing the web", "fixing things", "window shopping", "woodworking", "collecting figurines", "reading fortunes", "making playlists", "watching movies", "learning languages", "taking long naps", "watching trash TV", "practicing kung fu", "growing vegetables"];

const places = [" toothbrush", " glasses case", " pocketbook", " microphone", " photo album", " microscope", " hand mirror", " change jar", " fitted sheet", " leg warmer", " blue crayon", " calculator", " saltshaker", "n electric razor", " jewelry box", " ballpoint pen", "n inkjet printer"];
// The space/n before the item is to make it appear properly and grammatically correct in the sentence. This is the only place where it is necessary.

const desserts = ["almond jelly", "gingerbread", "shaved ice", "cotton candy", "apple cobbler", "fried dough", "Bavarian cream", "rainbow sherbet", "key-lime pie", "apple cake", "peach cobbler", "tarte tatin", "crème brûlée", "coffee cake", "pumpkin pie", "coconut cream pie", "peanut brittle", "cheesecake", "spice cake", "fried ice cream", "bread pudding", "figgy pudding", "vanilla gelato"];

const activities = ["hula dancing", "golf", "tap dancing", "cricket", "badminton", "archery", "muay thai", "arm wrestling", "wrestling", "power lifting", "hockey", "step aerobics", "kung fu", "boxing", "water skiing", "basketball", "soccer", "racquetball", "swimming", "football", "bodybuilding", "rugby", "hot yoga", "ice skating"];

let select = array => {
let randNum=Math.floor(Math.random() * array.length);
let selection = array[randNum];
return selection;
};

let phraseSelect = Math.round(Math.random());

if(phraseSelect === 0){
let thing1=select(actions);
let thing2=select(places);
console.log(`Touchdown like ${thing1} in a${thing2}--we are parked and proud!`);
}
else{
  let thing1=select(desserts);
  let thing2=select(activities);
console.log(`Trainwreck ${thing1} is reporting tango ${thing2} is go.`);
};