const fs = require("fs");
const xlsx = require("xlsx");

// let buffer = fs.readFileSync("./example.json");

// //console.log(buffer)

// let data = JSON.parse(buffer);
 // This methods is used to covert buffer or any type of  data to json


 // requiring JSON File
let jsonFile = require('./example.json');
//console.log(data)

// pushing a new object into JSON File
jsonFile.push({
  name: "Thor",
  "last name": "Odinson",
  isAvenger: true,
  friends: ["Tony", "Peter", "Bruce"],
  age: 102,
  address: {
    planet: "Asgard",
  },
});
//console.log(data)


// converting json data into string so that we can write it in other files
let stringData = JSON.stringify(jsonFile);
//console.log(stringData)

// writing to json file
fs.writeFileSync("example.json", stringData);
console.log("JSON file Updated");

function excelWriter(fileName, sheetName, jsonData){
  //Creating a new Workbook
  let newWB = xlsx.utils.book_new();

  // json is converted to sheet format(rows and cols)
  let newWS = xlsx.utils.json_to_sheet(jsonData);

  xlsx.utils.book_append_sheet(newWB, newWS,sheetName);
  xlsx.writeFile(newWB,fileName);
}

function excelReader(fileName, sheetName){
  let wb = xlsx.readFile(fileName);
  let excelData = wb.Sheets[sheetName];
  let ans = xlsx.utils.sheet_to_json(excelData);
  console.log(ans);
}


    //Idhar excel mein friends aur address blank hoga kyuki excel mein single value hi store ho sakti hai ek cell mein multiple value nhi





