window.onload = function () {
  var newDate = new Date();
  newDate.setDate(newDate.getDate());
  document.getElementById('displayDate').innerHTML = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();

var customName = document.getElementById('customname');
var customVerb = document.getElementById('customverb');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a :inserta:. When he got to :inserty:, he stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not :insertb: — :insertx: weighs 80 pounds, and it was a really weird day.';
var insertX = ['Peter Piper', 'Jack Be Nimble', 'Sasquatch'];
var insertY = ['The Hundred Acre Wood', 'the mall', 'Hill Valley'];
var insertZ = ['gave high-fives', 'played Blackjack', 'started breakdancing'];
var insertA = ['drive', 'frozen yogurt', 'haircut'];
var insertB = ['impressed', 'scared', 'having it'];
var animalImage = ['../images/blank.png','../images/cat-tilt.png', '../images/dog-tilt.png'];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);
  var aItem = randomValueFromArray(insertA);
  var bItem = randomValueFromArray(insertB);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);
  newStory = newStory.replace(':inserta:', aItem);
  newStory = newStory.replace(':insertb:', bItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Bob',name);
  }

  if(customVerb.value !== '') {
    var verb = customVerb.value;
    newStory = newStory.replace('stared',verb);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/14) + ' stone';
    var temperature =  Math.round((94-32) * 5/9) + ' centigrade';
    newStory = newStory.replace('80 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }

  if(document.getElementById("cat").checked) {
    document.getElementById('imageURL').src='../images/cat-tilt.png'
  } else if (document.getElementById("dog").checked) {
    document.getElementById('imageURL').src='../images/dog-tilt.png';
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
}
