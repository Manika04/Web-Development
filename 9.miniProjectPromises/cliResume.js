const inquirer = require('inquirer');
const cp = require('child_process');

function displayList(){
inquirer
  .prompt([
    {
        type : 'list',
        name : 'selection', 
        choices : ['About', 'Skills', 'Education', 'Projects']
    }
  ])
  .then(function(answers){
    if(answers.selection == 'About'){
        console.log(`A passionately curious web developer who just found out that making websites and seeing the magic happen on the internet is what excites her the most`);
        displayNext();
    }
    else if(answers.selection == 'Skills'){
        console.log("C, C++, Java, HTML, CSS, JavaScript, Wordpress, SQL, NodeJs, ReactJs");
        displayNext();
    }
    else if(answers.selection == 'Education'){
        cp.execSync('start Chrome https://drive.google.com/file/d/1SlLHLzDtdasxYuVOJ-gTpRU_seXCH3zD/view?usp=sharing');
        displayNext();
    }
    else if(answers.selection == 'Projects'){
        cp.execSync('start Chrome https://github.com/Manika04');
        displayNext();
    }
  });
}

displayList();

//Go Back option
function displayNext(){
    inquirer
  .prompt([
    {
        type : 'list',
        name : 'selection', 
        choices : ['Go Back to Main Menu', 'Exit']
    }
  ])
  .then(function(answers){
    if(answers.selection == 'Go Back to Main Menu'){
        displayList();
    }
    else if(answers.selection == 'Exit'){
        console.log('Resume Closed');
    }
  });
}