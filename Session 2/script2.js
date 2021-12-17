let salary=0;

function enterInformation(){
    let userName=prompt ("Enter your username:");
    let email=prompt ("Enter your email")
    salary=prompt ("Enter your salary")

    console.log(userName ,email ,salary);
    hello("Ray");
    annualCalculation(salary);
}

enterInformation();

function hello(name){
    console.log("This is a function inside of a function...." + name);
}

function annualCalculation(sal){
    console.log(" The annual salary is:"+ (sal*12));
}