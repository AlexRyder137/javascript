/*console.log('I like pizza')
console.log("it's really good");
window.alert("I REALLY LOVE PIZZA")*/

/*let firtName = "Gustavo"//String
let age = 21//Number
let study = true//Boolean

age +=1


console.log("Hello" + firtName)
console.log(age)
console.log(study)

document.getElementById("p1").innerHTML = "Hello " + firtName
document.getElementById("p2").innerHTML = "You are " + age + " years old"
document.getElementById("p3").innerHTML = "Enrolled " + study*/


//Arithemic expressions
//let student = 20

//student +=1
//student -=1
//student *=2
//student /= 2

//console.log(student)


// 1ªPrimeira forma
/*let username = window.prompt("What's is your name")
console.log(username)*/

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value
    console.log(username)
    document.getElementById("myLabel").innerHTML = `Hello ${username}`
}



