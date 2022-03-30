// *******************Count the number of chars 

// function charCount(str){
//     let result = {}

//     for (let i = 0;i<str.length;i++){
//         let char = str[i].toLowerCase()
//         if (result[char] > 0){
//             result[char]++
//             }
//         else {
//             result[char] = 1
//         }
//     }
//    return result; 
// }

// let final = charCount("hello")

// console.log(final)





// **********************Compare one array with the other for squares and match frequency as well

// function same(arr1,arr2){
//     if(arr1.length !== arr2.length ){
//         return false
//     }

//     for (let i =0;i<arr1.length;i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//             if(correctIndex === -1){
//                 return false
//             }
//             arr2.splice(correctIndex,1)    
//             console.log(arr2)
//     }

//     return true;
// }

// const answer = same([1,2,3], [1,9,4])

// console.log(answer);


// **************************Valid Anagram or not

// function validAnagram (first,second){
//     if (first.length !== second.length){
//         return false
//     }
//     let lookUp = {}
//     for(let i = 0; i< first.length;i++){
//         let letter = first[i]
//         lookUp[letter] ? lookUp[letter] += 1 : lookUp[letter] = 1
//     }
//     console.log(lookUp)
    
//     for(let i =0;i<second.length;i++){
//         let letter = second[i]
//         if (!lookUp[letter]){
//             return false
//         }
//         else {
//             lookUp[letter] -= 1
//         }
//     }
//     console.log(lookUp)
//     return true
// }

// const here = validAnagram("anagram","nagmara")
// console.log(here)


// ********************SumZero

// function sumZero(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j = i + 1;j<arr.length;j++){
//             if(arr[i]+arr[j]==0){
//                 return [arr[i],arr[j]];
//             }
//         }
//     }
// }

// const solution = sumZero([-3,-2,-1,0,1,2,3])
// console.log(solution);

// BETTER SOLUTION


// function sumZero(arr){
//     let left = 0;
//     let right = arr.length -1;

//     while (left < right){
//         let sum = arr[right] + arr[left];
//         if (sum===0){
//             return [arr[right], arr[left]]
//         }
//         else if (sum>0){
//             right--;
//         } else {
//             left++;
//         }
//     }
// }

// const solution = sumZero([-3,-2,-1,0,1,2,3,4,7,9])
// console.log(solution);



// *************************Count unique values

// function countUniqueValues(arr){
//     var i = 0;
//     for (var j = 1; j < arr.length; j++){
//         if (arr[i] !== arr[j]){
//             i++;
//             arr[i] = arr[j]
//         }
//     }
//     return i + 1
// }


// ***************************Sliding Window

// function maxSubArraySum(arr,num) {
//     let maxSum = 0;
//     let tempSum = 0;

//     for (let i = 0;i<num;i++){
//         maxSum += arr[i]
//     }

//     for (let i = num ; i < arr.length ; i++) {
//         tempSum = tempSum + arr[i] - arr[i - num]
//         maxSum = Math.max(tempSum,maxSum)
//     }

//     return maxSum;
// }


// ********************************Divide and Conquer

// function searching(arr,n) {
//     let min = 0;
//     let max = arr.length - 1;

//     while (min <= max){
//     let middle  = Math.floor((min + max) / 2);
//     let currentElem = arr[middle];

//     if (arr[middle] < n){
//         min = middle + 1;
//     }
//     else if (arr[middle] > n){
//         max = middle - 1;
//     }
//     else {
//         return middle;
//         }
//     }
//     return -1;
// }

// const here = searching([10,20,30,40,50,60,70,80,90],60);

// console.log(here)


// **************************************areThereDuplicates

//    ********** Naive Solution**************

// function areThereDuplicates(arr) {
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i] === arr[j])
//             return true
//         }
//     }
//     return false;
//   }
  
//   const here = areThereDuplicates([1,2,3,4,2,7,8,9,0])
  
//   console.log(here);


// ******************************************Average Pair

// function averagePair(arr,n){
//     for(let i = 0; i < arr.length; i++){
//        for (let j = i + 1; j < arr.length; j++) {
//            let avg = (arr[i] + arr[j])/ 2
//            if(avg===n) return true
//        }
       
//     }
//     return false
//   }
  
//   const here = averagePair([1,2,3,4,5],4.5)
  
//   console.log(here);






// ****************************Recursion vs Iteration

// 1) Iteration

// function countDown(num){
//     for(let i=num; i>0;i--){
//         console.log(i)
//     }
//     console.log("All done")
// }

// countDown(10);

// 2) Recursion

// function countDown(numb){
//     if (numb <= 0) {
//         console.log('All done');
//         return;
//     }
//     console.log(numb);
//     numb--;
//     countDown(numb);
// }


// ************************************Factorial

// Recursion

// function factorial(num){
//     if (num === 0 || 1 ) return 1;
//     return num * factorial(num-1)
// }

// let here = factorial(0);
// console.log(here);


// Iteration

// function factorial(num){
//
//     let alp  = 1;
//     for(let i = num; i > 1; i-- ){
//         alp *= i;
//     }
//     return alp;
// }

// let here = factorial(4);
// console.log(here);



// *************************** Collect odd values

// function oddValues(num){
//     let result = [];

//     function helper(helperInput){
//         if (helperInput.length === 0){
//             return;
//         }

//         if (helperInput[0] % 2 !== 0){
//             result.push(helperInput[0])
//         }
//         helper(helperInput.slice(1))
//     }

//     helper(num);

//     return result;
// }

// let here = oddValues([1,2,3,5,7,8,4]);
// console.log(here);


// ***********************************Searching Algos


// function linearSearch(arr,val){
//     for(let i = 0;i<arr.length;i++){
//        if (arr[i] === val){
//            return i
//         }
//     } 
//     return -1
    
// }


// function binarySearch (arr,val){
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = (start + end)/2

//     while(arr[middle] !== val && start <= end){
//         if (val < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1
//         }
//         middle = Math.floor((start + end)/2);
//     }

//     if(arr[middle] === val) {
//         return middle;
//     } else {
//         return -1
//     }
// }



// function naiveSearch(long,short) {
//     var count = 0;
//     for(let i = 0; i<long.length;i++){
//             for(let j = 0; j <short.length; j++){
//                 console.log(short[j],long[i+j]);    
//             if (short[j] !== long[i+j]){
//           break;
//           }
//           if(j === short.length - 1){
//           console.log('Found')
//           count++;
//           }
//         }
//         }
//       return count;
     
//     }
    
//     const here = naiveSearch("lorie lollol","lol");
    
//     if (here === 1) {  console.log(`There is ${here} match`)} else{
//     console.log(`There are ${here} matches `);
//     };



// **********************SORTING

// function bubbleSort (arr) {
//     for(i = arr.length; i> 0; i--){
//         for(j=0;j<i-1;j++){
//         console.log(arr,arr[j],arr[j+1])
//         if(arr[j] > arr[j+1]){
//             var temp = arr[j];
//             arr[j] = arr[j+1]
//             arr[j+1] = temp;
//             }
//         }
//     }
//     return arr

// }

// const here = bubbleSort([4,1,8,34,12,91,2,6]);

// console.log(here);


// function insertionSort (arr) {
//     for (var i = 0; i <arr.length; i++){
//         let currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j]>currentVal ; j--){
//             arr[j+1] = arr[j]
//         }
//      arr[j+1] = currentVal;   
//     }

//     return arr
// }
// insertionSort([2,1,75,33])


//***************************************/ Merge sort

// function mergeArrays (arr1,arr2){
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while( i < arr1.length && j < arr2.length){
//         if(arr1[i] < arr2[j]){
//             results.push(arr1[i])
//             i++
//         } else {
//             results.push(arr2[j])
//             j++
//         }
//     }
//     while (i < arr1.length){
//         results.push(arr1[i])
//         i++
//     }
//     while (j < arr2.length){
//         results.push(arr2[j])
//         j++
//     }

// return results;   
// }  

// function mergeSort (arr) {
//     if(arr.length <= 1) return arr
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0,mid));
//     let right = mergeSort(arr.slice(mid));
//    return mergeArrays(left,right);
// }

// mergeSort([10,3,5,1]);


function reverse(string) {
    for(let i=0; i<string.length;i++){
        console.log(string)
    }

}

console.log(reverse('mahir'))