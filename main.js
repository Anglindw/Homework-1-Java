//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","pUrple","Dog"]

const findWords = (arr) =>{
    for (let i of arr){
        arr = arr.replace(',', '')
    }
    console.log(arr)
    arr = arr.split(" ")
    console.log(arr)
    for(let i of arr){
        console.log(i)
        if (dog_names.includes(i)){
            console.log('Matched ' + i)
        } else {
            console.log('No Match')
        }
    }
}

findWords(dog_string)


//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let bole = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

const replaceEvens = (arr) => {
    //code goes here
    for (let i in arr){
        if (i % 2 == 0) {
            console.log(arr.splice(i, 1, 'even index'))
        }
    }
    console.log(arr)
}



replaceEvens(bole)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

/* https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

Solution: 
function solution(number){
  let total = 0
  for (let i = 0; i < number; i++){
    if (i % 3 == 0 && i % 5 == 0){
      total += i
    } else if (i % 3 == 0){
      total += i
    } else if (i % 5 == 0){
      total += i
    }
  }
  return total
}
*/

/*
https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

Solution:
function disemvowel(str) {
  let vowel = ['a','e','i','o','u','A','E','I','O','U'];
  for (let i of str ){
    if (vowel.includes(i)){
      str = str.replace(i, "")
      
    }
  }
  return str;
}

*/