let inquirer = require('inquirer');
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type : 'list',
        name : 'selection', //it keeps track of choices you select
        choices : ['choice 1', 'choice 2']
    }
  ])
  .then(function(answers){
    // Use user feedback for... whatever!!
    if(answers.selection == 'choice1'){
        console.log("Choice 1 Selected");
    }
    else{
        console.log("Choice  Selected");
    }
  })
  