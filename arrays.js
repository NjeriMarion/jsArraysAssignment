// finding the last element of the following arrays

let arr1 = [3,7,34,90,12];
let arr2 = [true, "green", "where", 12, 56];
console.log(arr1[arr1.length -1]);
console.log(arr2[arr2.length -1]);

//converting arrays to strings
let myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.toString())

// sorting elements of an array
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
console.log(arr3.sort());

// removing duplicates from an array
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

let duplicates = arr.filter((y, index)=> {
     return arr.indexOf(y) ===index;

});
console.log(arr);
console.log(duplicates);


// checking for a word in an array
let arr5 = ["the", "way", "x", 4, 23];
if (arr5.includes(4)){
    console.log(4)
}
else{
    console.log("the search word was not found")
}

//sorting a string
let word = "lufituaeb"
let word2 =word.split("")
word2.sort()
console.log(word2.join(''))