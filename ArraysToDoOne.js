//  function one (push to front)//

const pushToFront = (arr,newValue) => {
    arr.push(newValue);
    let temp = newValue
    for(let i = arr.length-1 ; i > 0 ; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = temp;
    console.log(arr);
}



// pushToFront([5,7,2,3], 8)

// function two (Insert at) //

const insertAt = (arr, idx, value) => {
    arr.push(value);
    let temp = value
    for(let i = arr.length-1 ; i > 0 ; i--){
        arr[i] = arr[i-1]
        if(i == idx){
            arr[i] = temp;
            break;
        }
    }
    console.log(arr);
}
// insertAt([100,200,5], 2, 311);
// insertAt([9,33,7], 1, 42);

