"use strict";

const WEASEL = "METHINKS IT IS LIKE A WEASEL";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
const VARIATION = 5

var randomString = function(){
  var text = "";

  for(var i = 0; i < WEASEL.length; i++)
    text += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));

  return text;
};

var randomNumber = function(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var mustChangeChar = function(){
  return randomNumber(1,100) <= VARIATION;
};

var randomChar = function(){
  return ALPHABET[randomNumber(0, ALPHABET.length - 1)];
}

var getCopy = function(str){
  var copy = "";

  for (var i in str)
    copy += mustChangeChar() ? randomChar() : str[i];

  return copy;
};

var getScore = function(str){
  var score = 0;
  for (var i in str){
    if (str[i] === WEASEL[i]){
      score++;
    }
  }
  return score;
};

var isTarget = function(str){
  return str === WEASEL;
};

var print = function(str){
  document.write(str + "<br>");
};

(function weasel_algorithm(){
  var init_str = randomString(WEASEL.length);
  var iteration = 1;
  var mayor_score = 0;
  var mayor_copy;

  while(!isTarget(init_str)){
    for (var i = 1; i <= 100; i++){
      var copy = getCopy(init_str);
      var score = getScore(copy);
      if (score > mayor_score){
        mayor_score = score;
        mayor_copy = copy;
      }
    }
    init_str = mayor_copy;
    print("Iteration: " + iteration + " String: " + init_str);
    iteration++;
  }

})();
