/*
    this ka behavior node environment aur browser mein alag hota hai
*/

//1.NODE - NON STRICT MODE
    //1.using "this" in global area and will give an empty obj
    // console.log(this);

    //2.Inside a function - This will return gloabal obj
    function f(){
        console.log(this);
    }
    // f();

    //3.Inside a function inside an object - here it returns whole obj
    let obj = {
        name : "manika",
        funcName : function(){
            console.log(this);
        }
    }

    // obj.funcName(); //here funcName is key whose value is function

    //4.Function inside a function inside an obj - this will return global object
    let obj2 = {
        name : "manika",
        funcName2 : function(){
            function g(){
                console.log(this);
            }
            g();
        }
    }
    // obj2.funcName2();



//BROWSER - NON STRICT MODE
    //1.using "this" in global area and will give a window function which contains a list of all the functions that we can use.
    console.log(this);

    //2.Inside a function - This will return window object
    function f(){
        console.log(this);
    }
    f();

    //3.Inside a function inside an object - here it returns whole obj
    let obj = {
        name : "manika",
        funcName : function(){
            console.log(this);
        }
    }

    obj.funcName();

    //4.Function inside a function inside an obj - this will return window object
    let obj2 = {
        name : "manika",
        funcName2 : function(){
            function g(){
                console.log(this);
            }
            g();
        }
    }
    obj2.funcName2();

      

