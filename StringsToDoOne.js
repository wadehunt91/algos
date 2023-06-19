// Problem 1 = Remove Blanks //

const removeBlanks = (string) => {
    let noBlanks = "";
    for(let i = 0 ; i < string.length ; i++){
        if( string[i] !== " "){
            noBlanks += string[i];
        }
    }
    console.log(noBlanks);
}

removeBlanks("Pl ayTha tF u nkyM usi c")
removeBlanks("I can not BELIEVE it's not BUTTER")

// Problem 2 = Get digits //

const getDigits = (string) => {
    let digits = "";
    for( let i = 0 ; i < string.length ; i++){
        if(isNaN(string[i])){
            continue
        }
        else{
            digits += string[i];
        } 
    }
    digitsNumber = parseInt(digits);
    console.log(digitsNumber)
}

getDigits("abc8c0d1ngd0j0!8")
getDigits("0s1a3y5w7h9a2t4?6!8?0")

// Problem 3 = Acronyms //

const acronym = (string) => {
    var words = string.split(" ");
    var result = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i] !== "") {
        result += words[i][0].toUpperCase();
        }
    }
    console.log(result)
}
acronym(" there's no free lunch - gotta pay yer way. ")
acronym("Live from New York, it's Saturday Night!")

//Problem 4 count non-spaces //

const countNonSpaces = (string) => {
    let result = 0;
    for(let i = 0 ; i < string.length; i++){
        if( string[i] !== " "){
            result += 1;
        }
    }
    console.log(result);
}
countNonSpaces("Honey pie, you are driving me crazy")
countNonSpaces("Hello world !")

//problem 5 remove Shorter Strings //

const removeShorterStrings = (arrStrings, minString) => {
    let result = [];
    for(let i = 0 ; i < arrStrings.length ; i++){
        if(arrStrings[i].length >= minString){
            result.push(arrStrings[i])
        }
    }
    console.log(result);
}

removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) 
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)