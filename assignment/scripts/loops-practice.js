console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

for (let i = 0; i < 6; i++){
  console.log(i);
}
//You would change the number 4 to 5 in the second 'i'.



// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

for( let i = 3; i < 6; i++){
  console.log(i);
}
// You would change the first 'i' value from 0 to 3. And you would change the second 'i' value from less than 4 to less than 6.



// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

for (let i = 1; i<11; i++){
  if(i % 2 == 0){
    console.log(i);
  }
}
//You would need to change the value of the first 'i' to 1. And change the value of the second 'i' to 11. This allows the loop to include all
// the numbers requested in the instructions. Then you need to add an 'if' statement. This if statement will take the value of 'i' and divide it by 2.
// If the remainder of the equation is 0, the console will read out the number originally divided by 2. If the remainder is not 0, the console will not read out anything.


// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let i = 5; i >= 0; i--){
  console.log(i);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

for ( some of stars){
  console.log(some);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

let n = 0;
while (n < stars.length){
  console.log(stars[n]);
  n++;
}


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let i = 0;
const max = 6;
while (i < max){
  console.log(i);
  i++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let v = 10;
let b = 4;
while(v > b){
  console.log(v);
  v--;
}
