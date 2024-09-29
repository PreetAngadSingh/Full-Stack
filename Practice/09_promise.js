// const fs = require('fs');

// // my own asynchronous function
// function kiratsReadFile() {
//   return new Promise(function(resolve) {
//     fs.readFile("a.txt", "utf-8", function(err, data) {
//         console.log("before resolve");
//       resolve(data);
//       console.log("after resolve");
//     });
//   })
// }

// // callback function to call
// function onDone(data) {
//   console.log(data)
// }

// let a=kiratsReadFile();
// console.log(a);
// a.then(onDone);


const fs = require("fs")

function kiratsReadFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err, data){
            resolve(data);
        });
    })
}

function onDone(data){
    console.log(data)
}

kiratsReadFile().then(onDone);