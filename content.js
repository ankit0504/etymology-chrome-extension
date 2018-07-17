chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var selected = (window.getSelection().toString()).split(" ")
      //chrome.runtime.sendMessage({"message": "open_new_tab", "url": selected});
      for (let word of selected) {

      }
    }
  }
  function get_synonym(word){

  }
);
