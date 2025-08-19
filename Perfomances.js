// const { createElement } = require("react");

// const t1 = performance.now();

// // Code-1

// for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is Para: " + i;
//     document.body.appendChild(para); 
// }

// const t2 = performance.now();

// console.log("Total time taken bt code-1: " + (t2-t1));

// Code-2

// const t3 = performance.now();

// let myDiv = document.createElement('div');

// for(let i = 1; i<=100; i++){
//   let para = document.createElement('p');
//   para.textContent = "This is Para: " + i;
//   myDiv.appendChild(para);
// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();

// console.log("Total time taken by code-2:" + (t4-t3));


// Best Practises

// let fragment = document.createDocumentFragment();

// for(let i=1; i<=100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para: " + (i+100);
//     // No Reflow and No Repaint
//     fragment.appendChild(para);
// }

// document.body.appendChild(fragment);

//Promises=================================================================================

// let firstPromise = new Promise( (resolve, rehject) =>{
    
//     setTimeout(function sayMyName(){
//         console.log("My Name is Shivam");
//     }, 10000);
// });

// Promise1.then((Message)=>{
//     console.log("The ka message is " + Message);
// }).catch((error)=>{
//         console.log("Error: " + error);
//     })


// let Promise1 = new Promise((resolve, reject) =>{
//     let success = true;
//     if(success == true){
//         resolve("Promise Fulfiled");
//     } else{
//         reject("Promise Rejected");
//     }
// });

// Promise1.then((message)=>{
//     console.log("First message: "+ message);
//     return "Promise Fullfiled Second Message";
// }).then((message)=>{
//     console.log("Second message: "+ message);
//     return "Promise Fullfiled Third Message";
// }).then((message)=>{
//     console.log("Third message: "+ message);
    
// })


