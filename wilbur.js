// This file contains everything pertaining to Wilbur. These arrays are the various diologue options he has

const actions = ["eating spicy food", "flamenco dancing", "collecting stamps", "surfing the web", "fixing things", "window shopping", "woodworking", "collecting figurines", "reading fortunes", "making playlists", "watching movies", "learning languages", "taking long naps", "watching trash TV", "practicing kung fu", "growing vegetables", "eating free pizza", "making mosaics", "bungee jumping", "clipping coupons", "watching trains", "scrapbooking", "doing brainteasers", "building models", "learning new stuff", "reading novels", "doing magic tricks", "playing card games", "break dancing", "doing paper crafts", "boogie boarding", "playing the kazoo", "playing the drums"];

const places = ["toothbrush", "glasses case", "pocketbook", "microphone", "photo album", "microscope", "hand mirror", "change jar", "fitted sheet", "leg warmer", "blue crayon", "calculator", "saltshaker", "electric razor", "jewelry box", "ballpoint pen", "inkjet printer", "jackhammer", 
"beach towel", "pencil case", "pack of gum", "glockenspiel", "kaleidoscope", "rubber band", "water bottle", "compost bin", "cotton swab", "toaster oven", "wristwatch", "mountain bike", "blowtorch", "tambourine", "picnic basket", "stethoscope", "paperweight", "pocketknife", "screwdriver", "pomade tin", "camera case", "water wing", "baking sheet", "space heater", "mixing bowl", "potpourri jar", "walking stick", "snowmobile", "socket wrench", "handkerchief"];

const sweets = ["almond jelly", "gingerbread", "shaved ice", "cotton candy", "apple cobbler", "fried dough", "Bavarian cream", "rainbow sherbet", "key-lime pie", "apple cake", "peach cobbler", "tarte tatin", "crème brûlée", "coffee cake", "pumpkin pie", "coconut cream pie", "peanut brittle", "cheesecake", "spice cake", "fried ice cream", "bread pudding", "figgy pudding", "vanilla gelato", "banana bread", "apple strudel", "sponge cake", "rice pudding", "raisin bread", "mint ice cream", "lime sherbet", "blueberry pie", "bûche de Noël", "lemon sorbet", "frozen parfait", "coconut cake", "crème caramel", "shortbread", "carrot cake", "megaphone", "yogurt parfait", "fruit parfait", "moon cake"];

const activities = ["hula dancing", "golf", "tap dancing", "cricket", "badminton", "archery", "muay thai", "arm wrestling", "wrestling", "power lifting", "hockey", "step aerobics", "kung fu", "boxing", "water skiing", "basketball", "soccer", "racquetball", "swimming", "football", "bodybuilding", "rugby", "hot yoga", "ice skating", "curling", "baseball", "canoeing", "karate", "bocce", "bowling", "volleyball", "surfing", "capoeira", "tennis", "roller skating", "skateboarding", "table tennis", "tae kwon do", "snooker"];

const musicStyles = ["rock", "salsa", "synthpop", "blues", "punk", "hip-hop", "disco", "doo-wop", "J-pop", "tango", "electronica", "reggae", "samba", "bebop", "bluegrass", "dubstep", "rockabilly", "cabaret", "karaoke", "opera", "folk", "mariachi", "zydeco", "techno", "jazz", "power pop", "country", "R&B", "heavy metal", "surf rock", "soul", "new wave", "bossa nova", "flamenco"];

// This function selects a random value from the array

let select = arr => {
let randNum=Math.floor(Math.random() * arr.length);
console.log(randNum)
let selection = arr[randNum];
return selection;
};
// This determins what sentence gets displayed and thus which arrays are used

$("#arrive").on("click", function(e){
  e.preventDefault()
let thing1=select(actions);
let thing2=select(places);
// Because this sentence in particular has an a/an situation, we need to check if the first letter of the place is a vowel
let vowelCheck = str =>{
  let firstLetter = (str.substring(0,1))
  if(firstLetter === "a"||firstLetter === "e"||firstLetter === "i"||firstLetter === "o"||firstLetter === "u"){
return true;
  }
}
let isVowel =  vowelCheck(thing2);
console.log(isVowel)
if(isVowel === true){
  $("#message").html(`Touchdown like ${thing1} in an ${thing2}--we are parked and proud!`)
}else{
$("#message").html(`Touchdown like ${thing1} in a ${thing2}--we are parked and proud!`);
}
})
$("#depart").on("click", function(e){
  e.preventDefault()
  let thing1=select(sweets);
  let thing2=select(activities);
$("#message").html(`Trainwreck ${thing1} is reporting tango ${thing2} is go.`);
}
)
// {

// };

// console.log(`Bellbottom ${select(musicStyles)} this is stovetop ${select(places)}, do you require assistance? Over.`)