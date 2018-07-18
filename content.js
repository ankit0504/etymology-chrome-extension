chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var selected = (window.getSelection().toString()).split(" ");
      var i;
      var replace = [];
      for (i = 0; i < selected.length; i++) {
        replace.push(get_synonym(selected[i]));
      }
      const replacement = replace.join(" ");
      replaceSelection(replacement)
    }
  }
);

function get_synonym(word){
  var tcom = require("thesaurus-com");
  var synonyms = tcom.search(word).synonyms;
  if (synonyms.length > 0){
    return synonyms[Math.floor(Math.random() * synonyms.length)];
  }
  else {return word}
}

function replaceSelection(text) {
  var range = window.getSelection().getRangeAt(0);
  range.deleteContents();
  range.insertNode(document.createTextNode(text));
}
