// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Loaded from a js file");

//     console.log("Hello World!");

//     const paragraph = document.querySelector(".paragraph");
//     paragraph.innerText = "Hello C7!";
        
// })

console.log("Hello World!");

const paragraph = document.querySelector(".paragraph");
paragraph.textContent = "Hello C7!";

const paragraphs = document.querySelectorAll(".paragraph");
// console.log(paragraph);

const heading = document.querySelector("#main-heading");
console.log(heading);
heading.textContent = "Cool Stuff I've Learned About the DOM";

paragraphs[0].textContent = "The DOM is a hierarchical representation of the HTML elements in your document.";
paragraphs[1].textContent = "It provides us with an API which allows us to traverse our HTML document.";

// DON'T use innerHTML, that will overwrite any id or class declarations you've made in your HTML file.
// document.querySelector("h2").innerHTML = "Important Methods & Properties:";
document.querySelector("h2").textContent = "Important Methods & Properties:";

// Create a DOM element
const listItem1 = document.createElement("li");
listItem1.textContent = "querySelector() - select the first element that matches a query";
const listItem2 = document.createElement("li");
listItem2.textContent = "querySelectorAll() - select all elements that match a query";
const listItem3 = document.createElement("li");
listItem3.textContent = "convertToSpaceMonkey() - use your space monkey ray-gun to convert all elements to space-monkeys";


// Add the DOM element to your page
const list = document.querySelector('.list');
list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);

list.removeChild(list.childNodes[3]);

// Zero-indexed item represents the text within the beginning of the <ul>
list.removeChild(list.childNodes[0]);

// forces console to return JS representation of element
console.dir(list);