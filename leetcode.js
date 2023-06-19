// function twoSum(nums, target) {
//     for(let i = 0; i < nums.length ; i++){
//         for(let j = 1 ; j < nums.length ; j++){
//             if(nums[i] + nums[j] == target){
//                 if( i != j){
//                 return [i,j]
//                 }
//             }
//         }
//     }
// }

// twoSum([3,2,3],6)

// function lengthOfLongestSubstring(string) {
//     var max = 0, 
//     current_string = "", 
//     i, 
//     char, 
//     pos;

//     for (i = 0; i < string.length; i += 1) {
//         char = string.charAt(i);
//         pos = current_string.indexOf(char);
//         if (pos !== -1) {
//             current_string = current_string.substr(pos + 1);
//         }
//         current_string += char;
//         max = Math.max(max, current_string.length);
//     }
//     console.log(max)
//     return max;
// }

// lengthOfLongestSubstring("dvdf");

