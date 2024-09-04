// for (var i = 0; i < 10; i++) {
//     console.log('Go' + i + 'step');
// }

// var num;
// do{
//     console.log('Inside the Loop');
//     num = prompt('Enter the number');


// }while(num < 10);

// console.log('Outside the Loop')

//do while loop

// var num;
// do {
//     console.log('Inside the way')
//     num = prompt ("Enter the code")

// }while (num < 20){
//     console.log('Out side the path')

// };


// while loop
// var num = 0; while(num < 10) {
//     num = prompt('Enter the number: ');
// }

// console.log ('Out of the loop');


// var num = 20; 
// while(num <10){
//     console.log("Inside the loop")
//     num =prompt("Enter the number!")
// }

// console.log("Out of the loop")


// let text = "";
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { break; }
//   text += "The number is " + i + "<br>";
// }



for(var i = 0; i < 10; i++) {
    if(i === 5) {
        console.log(i + ' is skipped');
        
        continue;
    }
    
    console.log('i is now at: ' + i);
}
for (let i = 0; i < 5; i++){
    console.log(i);
}

let i = 0;
while(i <5) {
    console.log(i);
    i++;
}

let i = 0;
do{
    console.log(i);
    i++

}while(i < 5);
