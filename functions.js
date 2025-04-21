function sayMyName(){
    console.log("J");
    console.log("A");
    console.log("I");
    console.log("S");
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("R");
    console.log("A");
    console.log("M");
}

// sayMyName();

function addTwoNumber(num1 , num2){
    console.log(num1 + num2);
}
// addTwoNumber(5,9);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a user name");
        return;
    }
        return `${username} just loged in`;
}

// console.log(loginUserMessage("Sonu"));
// console.log(loginUserMessage("sam"));
// console.log(loginUserMessage(""));


function calculateCartPrice(val1, val2, val3, val4, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200,300,400,600,2000));

const user = {
    username: "hitesh",
    price : 999
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: " sam",
    price: 1999
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,600]));



