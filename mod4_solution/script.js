
(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(name of names) {

  regex = /^[j|J]/; 
  // please note that i used regular expression to do the matching, which is much cleaner than using charAt()

  if(regex.test(name)) {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }

}

})();

