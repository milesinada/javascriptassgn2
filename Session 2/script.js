//Loops
//for loop i++ (increments of 1) i+=10(incremnets of 10)
for(let i=0;i<=10;i++){
    console.log(i)
}
for(let j=10;j<81;j+=2){
    console.log(j);
}
//sumation from 1 to 10
let sumation=0;
for(let x=1;x<=10;x++){
    sumation=sumation+x;  //?=0+1 ->1 //?1+2 ->3  //?3+3-> 6
}
console.log("The sumation is " +sumation)
//1+2+3+4+5+6+7+8+9+10=55
let number=0;
while(number<10){ //while won't execute unless conditions are met
    console.log(number);
    number++;
}
let counter=100;
do{ //do will always execute one line
    console.log(counter);
    counter++;
}while(counter<10)

//condition statement
//expectation == reality
if("wall in front"=="wall in front"){
    console.log("robot stop");
}else{
    console.log("robot walk")
}