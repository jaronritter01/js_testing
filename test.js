
/*
requirements - node.js
*/

const fs = require('fs');

const MSUBears = () => {
    /******************************************************/
    // Takes no parameters
    // iterates through numbers 1 - 100 excluding 100
    // if the num is divisible by 3, logs "MSU"
    // if the num is divisible by 5, logs "Bears"
    // if the num is divisible by 3 and 5, logs "MSU Bears"
    /******************************************************/

    for (var i = 1; i < 100; i++) {
        if (i % 3 == 0 && i % 5 != 0) {
            console.log("MSU");
        }
        else if (i % 5 == 0 && i % 3 != 0) {
            console.log("Bears");
        }
        else if (i % 3 == 0 && i % 5 == 0) {
            console.log("MSU Bears");
        }
        else {
            console.log(i);
        }
    }
}

const readFileCheck = (filePath, word) => {
    /***********************************************/
    // takes in a file path and a word to search for
    // 
    // will return true if the word is found
    // will return false if the word is not found
    /***********************************************/

    let found = false; //this will be changed if the specified word is found the the string return from the file
    //reads the specified file
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        //if an error occured in the reading process then it will return it

        let dataArr = data.split(" "); // will split the string returned into an array of words
        dataArr.forEach((index) => {
            //iterated through the array and if the word is found set the found var to false
            if (index == word) {
                found = true;
            }
        });

        if (!found) {
            return false;
        }
        else {
            return true;
        }
    }
    catch {
        return "Error: An error has occured while tring to read the file";
    }
}


//recursive solution
const fibonacci = (n) => {
    if (n === 0) {
        return 1;
    }
    else if (n === 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}


//console.log(fibonacci(6));
//console.log(readFileCheck("input.txt", "bear"));
//MSUBears();