// wk 1 lectiure 1

function isEven(num){
    if ( num % 2 ==0){
        console.log("true")
        return true
    }
    else{
        console.log("false")
        return false
    }
}

isEven(16)

//  wk 1 lecture 2

function fizzBuzz(list){
    for(let i = 0 ; i < list.length ; i++){
        // console.log(list[i])
        if(list[i] % 3 == 0 && list[i] % 5 == 0){
            console.log(list[i] + "fizzBuzz")
        }
        if(list[i] % 3  == 0 ){
            console.log(list[i] + "fizz")
        }
        if( list[i] % 5 == 0){
            console.log(list[i] + "buzz")
        }
    }
}

fizzBuzz([1,5,8,2,"hello",879,93.42,"Fizz",true])

// wk 1 lecutre 3

function indexOfMinVal(nums) {
    let min = nums[0];
    for(let i = 0 ; i < nums.length ; i ++){
        if(nums[i] < min ){
            min = i;
        }
    }
    if(min == null){
        console.log("-1")
        return -1;
    }
    else{
        console.log(min)
        return min;
    }
}

indexOfMinVal([5, 2, 3]);
indexOfMinVal([5, 7, 2, 3]);
indexOfMinVal([]);

function secondLargest(nums){
    let largest = nums[0];
    let secondLargest = nums[0]
    console.log(nums.length);
    if( nums.length < 2){
        console.log("null")
        return null
    }
    for( let i = 0 ; i  < nums.length ; i++){
        if(nums[i] > largest){
            largest = nums[i];
        }
    }
    console.log(largest);
}

secondLargest([2, 3, 1, 4, 5])
secondLargest([3, 3])
secondLargest([2])
secondLargest([]);