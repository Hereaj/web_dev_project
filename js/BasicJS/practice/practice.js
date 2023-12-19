// drill
// I should know where the element what I want to use is
// document.body.children[1].children[0].href = "https://www.instagram.com/";

// Query => html id
let anchorElement = document.getElementById("external-link");
anchorElement.href = "http://www.google.com/";

// Query => CSS selctor
// always find the first element with matching condition.
// querySelectorAll() => return all
anchorElement = document.querySelector("body a");
anchorElement.href = "http://www.instagram.com/";

// add an element 
// 1. Create the element
// 2. Find path in the parent element
// 3. insert

let newElement = document.createElement("a");
newElement.textContent = " AJ link";
newElement.href = "http://www.naver.com/";

let bodyP = document.querySelector("body p");

bodyP.append(newElement);

// Delete an element
// 1. select element
// 2. remove it

let removableElement = document.querySelector("h1");
removableElement.remove();
// removableElement.parentElement.removeChild(removableElement); // older brower


// Movind Elements
bodyP.parentElement.append(bodyP);
//document.querySelector("body").append(bodyP);


// InnerHTML
// textContent => taking just text context
// InnerHTML => taking string as "HTML syntax"

// check
console.log(bodyP.textContent);

bodyP.innerHTML = "AJ again <strong>WOW</strong>";