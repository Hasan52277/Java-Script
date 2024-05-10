// DOM 
// Documents object Modal


// console.log(window.document);
// console.dir(window.document);



// ***** Select element using get element by id

// const mainHeading = document.getElementById("main-heading")
// console.log(mainHeading);



// ***** Select element using Query selector

// const mainHeading  = document.querySelector("#main-heading")
// const header = document.querySelector(".header")
// console.log(header);
// // console.log(mainHeading);



//        textContent and innerText
// ***** change karana textContent ko 

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent)
// mainHeading.textContent = "this is something else"
// console.log(mainHeading.textContent);




// ****** change the style  of element
// const mainHeading  = document.querySelector("div.headline h2")
// // console.log(mainHeading);
// mainHeading.style.backgroundColor = "blue";
// mainHeading.style.border = "5px solid green"



// **** get and set attributes
// const link = document.querySelector("a")
// console.log(link.getAttribute("href"));
// link.setAttribute("href")

// const inputElements = document.querySelector(".form-todo input")






//***** get multipel element using getElements by class name 
//***** get multiple element item using querySelectorAll

// const navitem = document.getElementsByTagName("a")  // HTML colllection
// we can't use forEcah method to iterate through HTML collection
// simple for loop
// fior of loop
// foreach


// for(let i=0; i<navitem.length;i++){
//     // console.log(navitem[i]);
//     const navItem = navItem[i]
//     navItem.style.color = "green"
//     navItem.style.backgroundColor = "#fff"
// }


// for (let navItem of navItem) {
//     navItem.style.color = "green"
//     navItem.style.backgroundColor = "#fff"
// }

// console.log(navitem[0]);
// console.log(typeof navitem[0]);
// console.log(Array.isArray(navitem));  //  array checkd property

// const navitem = document.querySelectorAll("nav-item")   // node list
// console.log(navitem[3]);





// ***** inner HTML

// const headline  = document.querySelector(".headline")
// // console.log(headline.innerHTML);

// headline.innerHTML = "<h1>Inner HTML change</h1>"
// headline.innerHTML+="<button>learn more</button>"
// console.log(headline.innerHTML);




// const sectiontodo = document.querySelector(".section-todo ")
// console.log(sectiontodo.classList);
// // sectiontodo.classList.add('bg-dark')       // add class in js
// // sectiontodo.classList.remove('container')  // removed class in js

// // sectiontodo.classList.toggle("bg-dark")
// const header = document.querySelector(".header")
// console.log(header.classList);




