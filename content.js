chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var selected = (window.getSelection().toString()).split(" ");
      for (let word of selected) {
        get_synonym(word)
      }
    }
  }
);
function get_synonym(word){
  var syn = require("synonyms");
  var synArray = syn(word);
  console.log("SYNARRAY: "+ synArray)
  console.log("SYN(WORD): "+ syn(word))
  console.log("WORD: " + word)
  console.log("SYNARRAY LENGTH: " + Object.keys(syn).length);
  var randWord = synArray[Math.floor(Math.random() * Object.keys(syn).length)];
  console.log("RANDWORD: " + randWord)
  syn(word)
}
