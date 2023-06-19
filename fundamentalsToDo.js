// Setting and Swapping 
// const setAndSwap = (myNumber, myName) => {
//     let temp1 = myNumber;
//     let temp2 = myName;
//     myNumber = temp2;
//     myName = temp1;
//     console.log(myNumber,myName)
// }
// setAndSwap(2537537509, "Wade")

// Print -52 to 1066
// const printIntegers = (min,max) => {
//     for(i = min ; i <=max ; i++){
//         console.log(i)
//     }
// }
// printIntegers(-52,1066)

// Dont worry, Be happy
// const beCheerful = () => {
//     console.log("Good Morning!")
// }
// for(let i = 0; i <= 98 ; i++){
//     beCheerful();
// }

// Multiples of 3 : But not all
const multiplesOfThree = (min,max) => {
    for (let i = min ; i <= max ; i++){
        if( i % 3 == 0){
            if( i == -3 || i == -6){
                continue
            }
            else{
                console.log(i)
            }
        }
    }
}
multiplesOfThree(-300,0)