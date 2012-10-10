# Flashblock Detector

Flash Block Detector is a lightweight JQuery file which detects if Flash is disabled on a browser. The function expects a callback function to execute. It calls function with an integer argument, where:

0. all well
1. flash is not installed
2. some flashblocker plugin is enabled

### Usage

Just include the `flashblock-detector.js` file in the title of your page and call the flashBlockDetect() function on window.load().

### Flash blockers covered

#### Mac:

*    Chrome
     1. Flashblock
     2. AdBlock Pro


*    Firefox
     1. Flashblock 1.5.15.1


*    Safari
     1. ClickToFlash

#### Windows:

*    IE
     1. Shockwave Player disabled on IE
     2. AdBlock
