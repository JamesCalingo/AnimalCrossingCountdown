const actions = ["eating spicy food", "flamenco dancing", "collecting stamps", "surfing the web", "fixing things", "window shopping", "woodworking", "collecting figurines", "reading fortunes", "making playlists", "watching movies", "learning languages", "taking long naps", "watching trash TV", "practicing kung fu", "growing vegetables", "eating free pizza", "making mosaics", "bungee jumping", "clipping coupons", "watching trains", "scrapbooking", "doing brainteasers", "building models", "learning new stuff"];

const places = ["toothbrush", "glasses case", "pocketbook", "microphone", "photo album", "microscope", "hand mirror", "change jar", "fitted sheet", "leg warmer", "blue crayon", "calculator", "saltshaker", "electric razor", "jewelry box", "ballpoint pen", "inkjet printer", "jackhammer", 
"beach towel", "pencil case", "pack of gum", "glockenspiel", "kaleidoscope", "rubber band", "water bottle", "compost bin", "cotton swab", "toaster oven", "wristwatch", "mountain bike", "blowtorch", "tambourine", "picnic basket", "stethoscope", "paperweight", "pocketknife", "screwdriver", "pomade tin"];

const sweets = ["almond jelly", "gingerbread", "shaved ice", "cotton candy", "apple cobbler", "fried dough", "Bavarian cream", "rainbow sherbet", "key-lime pie", "apple cake", "peach cobbler", "tarte tatin", "crème brûlée", "coffee cake", "pumpkin pie", "coconut cream pie", "peanut brittle", "cheesecake", "spice cake", "fried ice cream", "bread pudding", "figgy pudding", "vanilla gelato", "banana bread", "apple strudel", "sponge cake", "rice pudding", "raisin bread", "mint ice cream", "lime sherbet", "blueberry pie", "bûche de Noël", "lemon sorbet"];

const activities = ["hula dancing", "golf", "tap dancing", "cricket", "badminton", "archery", "muay thai", "arm wrestling", "wrestling", "power lifting", "hockey", "step aerobics", "kung fu", "boxing", "water skiing", "basketball", "soccer", "racquetball", "swimming", "football", "bodybuilding", "rugby", "hot yoga", "ice skating", "curling", "baseball", "canoeing", "karate", "bocce", "bowling", "volleyball"];

const musicStyles = ["rock", "salsa", "synthpop", "blues", "punk", "hip-hop", "disco", "doo-wop", "J-pop", "tango", "electronica", "reggae", "samba", "bebop", "bluegrass", "dubstep", "rockabilly", "cabaret", "karaoke"];

const houseItems = ["compost bin", "cotton swab", "toaster oven", "wristwatch", "mountain bike", "blowtorch", "tambourine", "picnic basket", "stethoscope", "paperweight", "pocketknife", "screwdriver", "pomade tin"]

let select = arr => {
let randNum=Math.floor(Math.random() * arr.length);
console.log(randNum)
let selection = arr[randNum];
return selection;
};

let phraseSelect = Math.round(Math.random());
console.log(phraseSelect)

if(phraseSelect === 0){
let thing1=select(actions);
let thing2=select(places);
let vowelCheck = str =>{
  if(str.substring(0,1) === "a"||str.substring(0,1) === "e"||str.substring(0,1) === "i"||str.substring(0,1) === "o"||str.substring(0,1) === "u"){
return true
  }
}
let isVowel =  vowelCheck(thing2);
console.log(isVowel)
if(isVowel === true){
  $("#message").html(`Touchdown like ${thing1} in an ${thing2}--we are parked and proud!`)
}else{
$("#message").html(`Touchdown like ${thing1} in a ${thing2}--we are parked and proud!`);
}
}
else{
  let thing1=select(sweets);
  let thing2=select(activities);
$("#message").html(`Trainwreck ${thing1} is reporting tango ${thing2} is go.`);
};
console.log(`Bellbottom ${select(musicStyles)} this is stovetop ${houseItems[0]}, do you require assistance? Over.`)