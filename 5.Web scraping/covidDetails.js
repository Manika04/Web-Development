// https://www.worldometers.info/coronavirus/

const request = require('request');
const cheerio = require('cheerio');

console.log('Before');

request('https://www.worldometers.info/coronavirus/', cb);
function cb(error, response, html){
    if(error){
        console.log(error);
    }
    else{
        handleHTML(html);
    }
}

function handleHTML(html){
    let selTool = cheerio.load(html); //selector tool 
    // console.log(selTool);

    let contentArr = selTool('.maincounter-number span');
    // console.log(contentArr);
    //yeh class jitni baar use hui hai ... uske elements ek arr mein honge.. for this case - 3 elements arr mein honge i.e total cases, deaths and recovered.



    // for(let i = 0; i < contentArr.length; i++){
    //     // let data = selTool(contentArr[i]);
    //     let data = selTool(contentArr[i]).text(); //.text to convert into text form and more readable form
    //     console.log(data);
    // }

    let totCases = selTool(contentArr[0]).text();
    console.log("Total cases : " + totCases);

}

console.log('After');
