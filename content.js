chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var selected = (window.getSelection().toString()).split(" ");
      if (selected) {
        for (let word of selected) {
          word = get_synonym(word)
        }
        console.log(selected)
      }
      else {
        return
      }
    }
  }
);
function get_synonym(word){
  var syn = require("synonyms");
  var withPartOfSpeech = syn(word);
  var synonyms = randomPartOfSpeech(withPartOfSpeech);
  var randSynonym = synonyms[Math.floor(Math.random() * synonyms.length)];
  console.log(synonyms)
  console.log("*****************")
  console.log(randSynonym)
  return randSynonym
}

function randomPartOfSpeech(object) {
  var keys = Object.keys(object)
  return object[keys[ keys.length * Math.random() << 0]];
};
