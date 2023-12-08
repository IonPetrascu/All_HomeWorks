//1
const cars = {
  producator :"Bayerische Motoren Werke AG",
  model:"X1 Sports Activity Vehicle",
  anul_lansarii:2023,
  viteza_medie:80,
  afisarea_informatiei(){
    console.log(this.producator);
    console.log(this.model);
    console.log(this.anul_lansarii);
    console.log(this.viteza_medie);
  },
  travelTime(distance){
    const needTime = distance / this.viteza_medie
    const numberPauses = needTime / 4;
    const fullTime = Math.floor(needTime + numberPauses);
    return fullTime
  }
}


//2
function calculeazaCmmdc(a, b) {
  while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

// Exemplu de utilizare
const cmmdcExemplu = calculeazaCmmdc(48, 18);
console.log("CMDC al numerelor 48 și 18:", cmmdcExemplu);


function Fractie(numarator, numitor) {
  this.numarator = numarator;
  this.numitor = numitor;
}

Fractie.prototype.simplifica = function () {
  const cmmdc = this.calculeazaCmmdc(this.numarator, this.numitor);
  return new Fractie(this.numarator / cmmdc, this.numitor / cmmdc);
};

Fractie.prototype.calculeazaCmmdc = function (a, b) {
  if (b === 0) {
      return a;
  }
  return this.calculeazaCmmdc(b, a % b);
};

// Exemplu de utilizare
const fractie = new Fractie(4, 8);
const fractieSimplificata = fractie.simplifica();

console.log("Fracția inițială:", fractie);
console.log("Fracția simplificată:", fractieSimplificata);