const fs = require('fs');
// fs.readFile('./resources/game.txt',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString());
// });

//使用promise 封装
const p = new Promise(function(resolve,reject){
    fs.readFile('./resources/game.txt',(err,data)=>{
        if(err) reject(err);
        resolve(data);
    });

})

p.then(function(value){
  console.log(value.toString())
},function(reason){
    console.log(reason)
})