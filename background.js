let flipper = 0;
chrome.browserAction.onClicked.addListener(
    function(tab) { 
        if (flipper % 2 == 0) {
            chrome.tabs.sendMessage(tab.id, {text: 'debug'});
            flipper = flipper + 1;
        }
        else {
            chrome.tabs.sendMessage(tab.id, {text: 'nodebug'});
            flipper = flipper + 1;
        }
    }
);
