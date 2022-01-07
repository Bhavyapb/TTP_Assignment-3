//1) Select the section with an id of container without using querySelector.
//document.getElementById("#container")
const cont = document.getElementById("container")
console.log(cont);

//2) Select the section with an id of container using querySelector.
const containerQ=document.querySelector("#container")
console.log(containerQ);

//3) Select all of the list items with a class of "second".
document.querySelectorAll(".second")

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
const newListItem = document.querySelector("ol")
console.log(newListItem.lastElementChild)

//5) Give the section with an id of container the text "Hello!".
container.innerText="Hello"

//6) Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer")
const newMain=document.createElement("main")
footer.append(newMain)

//7) Remove the class main on the div with a class of footer.
newMain.remove();

//8) Create a new li element.
const newLi =document.createElement("li")

//9) Give the li the text "four".
newLi.innerText="four"

//10) Append the li to the ul element.
const ul = document.querySelector("ul")
ul.append(newLi)

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const ol = document.querySelector("ol")
const olItems =ol.children
const olItemsArray = Array.from(olItems)
olItemsArray.forEach((el)=> {
    el.style.background ="green"
})

//13) Remove the div with a class of footer.
footer.remove()

