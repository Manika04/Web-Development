const puppeteer = require("puppeteer");
//Puppeteer works on promises

console.log("Before");

let browserWillBeLaunchedPromise = puppeteer.launch({
    headless : false,
    defaultViewport : null,
    rgs: ['--start-maximized']
});

browserWillBeLaunchedPromise.then(function(browserInstance){
    let newTab = browserInstance.newPage();
    return newTab;
}).then(function(newTab){
    console.log("New tab opened");
    let pageWillBeOpenedPromise = newTab.goto("https://www.pepcoding.com/");
    return pageWillBeOpenedPromise;
}).then(function(){
    console.log("Website Opened.");
});

console.log("After");