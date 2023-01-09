/*let suma = 50 + 50;
let resta = 50 - 50;
console.log(suma, resta);*/
function calcular_interes(monto, cuotas) {
  let interes;
  if (cuotas == 3) {
    interes = monto * 0.15;
    return interes;
  } else if (cuotas == 6) {
    interes = monto * 0.35;
    return interes;
  } else if (cuotas == 12) {
    interes = monto * 0.6;
    return interes;
  } else if (cuotas == 9) {
    interes = monto * 0.45;
    return interes;
  } else {
    return false;
  }
}

let monto = parseFloat(prompt("Ingresa el monto que deseas"));
let cuotas = parseInt(prompt("Selecciona cantidad de cuotas 3-6-12-18"));

console.log("Solicitaste: $", monto);
console.log("En", cuotas, "cuotas");
console.log("total a devolver:", monto + calcular_interes(monto, cuotas));
console.log(
  "Pagaras por mes: $100",
  (monto + calcular_interes(monto, cuotas)) / cuotas
);

/*if (cuotas == 3 || 6 || 9 || 12) {
}*/
