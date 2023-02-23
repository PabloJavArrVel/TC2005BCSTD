console.log("Node");
const fylesystem = require('fs');
fylesystem.writeFileSync("Hola.txt","Hola desde node");

const arreglo =[10,61,60,2000,5000,1000,10000]

for (let item of arreglo){
    setTimeout(() =>{
        console.log(item);
    },item);
}