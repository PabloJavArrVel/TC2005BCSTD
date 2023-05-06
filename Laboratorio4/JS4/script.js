
function calcular() {
    const n = parseInt(document.getElementById("input").value);
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    const output = document.getElementById("output");
    output.innerHTML = `Los primeros ${n} términos de la secuencia de Fibonacci son: ${fibonacci.join(", ")}.`;
  }
  