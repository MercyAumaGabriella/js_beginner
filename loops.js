//LOOPS IN JAVASCRIPT.

//1. FOR LOOP
for(var item = 2; item < 11; item++){
    //console.log(item);
}
console.log(item);

//2. WHILE LOOP
console.log('WHILE LOOP');
let count = 0;
while (count < 10) {
    //console.log(count);
    count+=2;
}

//3. DO...WHILE LOOP
console.log('do...while loop');
let counter = 0;
do{
    //console.log('count is ' +counter);
    counter++
}
while (counter < 10);

//3. FOR...IN
let arr = ["dog", "cat", "cow", "sheep"];

for (let item in arr) {
    console.log("At"+ item + ", the array item is "+ arr[item]);
}

//4. FOR...EACH

//5. SWITCHES