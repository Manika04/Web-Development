//STRING IS A SEQUENCE OF CHARACTERS

let str = "manika"
// console.log(str)

//METHODS
    //1.LENGTH OF STRING
        // console.log(str.length) //6

    //2.EXTRACTION - extracting a part of a string
        //2.1. SLICE METHOD - slice(start,end)
            let slicedStr = str.slice(0,3)  //end wala index inclusive nhi hai i.e hume end+1 dena hai    
            // console.log(slicedStr)

        //2.2. SUBSTRING METHOD - substr(start,length)    
            let subStr = str.substr(2,4)
            // console.log(subStr)
       
    //3.REPLACING STRING CONTENT - replace(value to be replaced,value to be replaced with)       
        let sayHello = "Hello Manika"
        // console.log(sayHello)
        let sayBye = sayHello.replace("Hello", "Bye")
        sayHello = sayHello.replace("Hello", "Bye")
        // console.log(sayBye)
        // console.log(sayHello)

    //4.ToUpperCase AND ToLowerCase
        let text1 = "Hello World"    
        let text2 = text1.toUpperCase();
        let text3 = text1.toLowerCase();
        // console.log(text2)
        // console.log(text3)

    //5.CONCATENATION
        let firstStr = "Hello"
        let secondStr = "Manika"
        let concatenation = firstStr.concat(" ",secondStr)
        // console.log(concatenation);
        // console.log(firstStr + " " + secondStr);

    //6.TRIM - used to remove all the whitespaces
        let text = "         Hello World       "   
        // console.log(text)
        text = text.trim()
        // console.log(text)

    //7.SPLIT - jo character pass karege vahan se voh string split ho jayegi aur jo character pass karege voh output mein nhi hoga. Output ek array ke form mein aayega.
        let str1 = "Hello World";
        let partOfStr = str1.split('o');
        console.log(partOfStr);    

    //8.JOIN - jo character pass karege toh voh vahan se join ho jayega i.e array mein jo empty space hoga vahan yeh character fill ho jayega and return karega yeh string.
        let joinStr = partOfStr.join('o');
        console.log(joinStr);     

