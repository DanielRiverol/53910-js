//file system
const fs = require("fs");
const http =require('http')
// fs.writeFile("./archivo.txt", "Hola Mundo", () => {
//   try {
//     console.log("exito");
//   } catch (error) {
//     console.log(error);
//   }
// });


http.createServer((req,res)=>{
 res.write('<h1>Hola desde Node</h1>')
 res.end()
}).listen(4000)