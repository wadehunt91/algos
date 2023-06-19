// Problem 1 : Countdown //

const countdown = (number) => {
    let arr = [number];
    let arrValue = 0
    let loop = 1;
    for(let i = 1 ; i <= number ; i++){
       arrValue = number -loop
       loop +=1;
       arr[i] = arrValue;
    }
    console.log(arr);
}

countdown(15);

//Problem 2 : Print and Return //

const printAndReturn = (num1, num2) => {
    console.log(num1);
    return num2;
}


printAndReturn(1,2);

//problem 3 : First plus length //

const firstPlusLength = (arr) => {
    
}