const arr = [1,2,3,4,5];

function average (arr) {
    let sum = 0;
    for(let item of arr) {
        sum += item;
    }
    return (sum/arr.length)
};

const fylesytem = require('fs')

function writeInFile (stringVariable){
    fylesytem.writeFileSync("Archivo.txt",stringVariable)
}

function WriteFibonacci (number){
    let fibonacci = [0,1];
    for (let i = 2; i < number;i++){
        fibonacci[i]=fibonacci[i-1] + fibonacci[i-2];
    }
    console.log(fibonacci)
}
writeInFile("Hola mundo!")
WriteFibonacci(10);
console.log(average(arr));
