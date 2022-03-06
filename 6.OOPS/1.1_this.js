//NODE - STRICT MODE 
    "use strict";
    //1.using "this" in global area and will return an empty obj
    console.log(this);

    //2.Inside a function - Undefined
    function f1(){
        console.log(this);
    }
    f1();

    //3.Inside a function inside an object - here it returns whole obj
    let obj = {
        name : "manika",
        funcName : function(){
            console.log(this);
        }
    }

    obj.funcName(); 

    //4.Function inside a function inside an obj - undefined
    let obj1 = {
        name : "manika",
        funcName2 : function(){
            function g(){
                console.log(this);
            }
            g();
        }
    }
    obj1.funcName2(); 




 
//BROWSER - STRICT MODE
    "use strict";
    //1.using "this" in global area and will return window obj
    console.log(this);

    //2.Inside a function - This will return undefined
    function f1(){
        console.log(this);
    }
    f1(); 
    
    //3.Inside a function inside an object - here it returns whole obj
    let obj = {
        name : "manika",
        funcName : function(){
            console.log(this);
        }
    }

    obj.funcName(); 

    //4.Function inside a function inside an obj - undefined
    let obj1 = {
        name : "manika",
        funcName2 : function(){
            function g(){
                console.log(this);
            }
            g();
        }
    }
    obj1.funcName2(); 
    
    