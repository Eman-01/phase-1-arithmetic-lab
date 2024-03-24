function doMath(num1, num2){
    console.log(num1*num2)
    return num1 * num2
}
console.log(doMath(3, 4))
function greeting(name, time){
    console.log("Hello "+ name+time)
}
greeting("kuku ", "evening")
greeting("chicken ", "morning")
function functionName(){
    console.log("Inside a function")
}
functionName()
functionName()
function capitaitalizeFirstWord(str){
    const capitalize = str.charAt(0).toUpperCase()+ str.slice(1)
       return capitalize;
}
console.log(capitaitalizeFirstWord("hello world"))



const sum = (num1, num2) => num1 + num2;
sum(2, 3);
console.log()

function testJava(word){
    word()
    console.log(word)
}
const name = "moringa"
function javaTest(){
    console.log("I am the son")
}
testJava(javaTest)

function myTest(){
    return 42
}
const myAnswer = myTest ()* 2;
myAnswer
