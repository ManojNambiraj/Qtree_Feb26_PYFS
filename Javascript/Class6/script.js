// DOM --> Document Object Model

// let ele = document.getElementById("demo")

// console.log(ele);

// ele.innerText = "Hello world"
// ele.innerHTML = "<h1>Good evening</h1>"
// ele.value = "Hello"

// let cEle = document.getElementsByTagName("p")

// console.log(cEle);

// cEle.innerText = "hello"

let ulEle = document.createElement("ul")
ulEle.setAttribute("class", "lists")
ulEle.setAttribute("id", "demo")

let liEle1 = document.createElement("li")
let liEle2 = document.createElement("li")

liEle1.innerText = "Sports"
// liEle1.style.color = "orange"
// liEle1.style.fontSize = "1.5em"

liEle2.innerText = "Music"

ulEle.append(liEle1)
ulEle.append(liEle2)

document.body.append(ulEle)
