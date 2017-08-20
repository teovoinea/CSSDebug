chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text == 'debug') {
        loadCSS('debug');
    }
    else if (msg.text == 'nodebug') {
        unloadCSS('debug')
    }
})

function loadCSS(file) {
    var link = document.createElement("link");
    link.href = chrome.extension.getURL(file + ".css");
    link.id = file;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  
function unloadCSS(file) {
    var cssNode = document.getElementById(file);
    cssNode && cssNode.parentNode.removeChild(cssNode);
}