//  Wk 1 Lecture 1 //
function isEven(num) {
    if(num % 2 == 0){
        console.log("true")
        return true;
    }
    else{
        console.log("false")
        return false;
    }
}

isEven(30)
isEven(579)

// WK 1 Lecture 2 //
// Fizzbuzz //

function fizzBuzz(list){
    for(i = 0 ; i < length(list) ; i ++){
        if(list[i] % 3 == 0 && list[i] % 5 ==0){
            console.log("fizzbuzz")
        }
        else if(list[i] % 5 == 0){
            console.log("Buzz")
        }
        else if(list[i] % 3 == 0){
            console.log("fizz")
        }
    }
}

