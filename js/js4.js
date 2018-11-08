let lista = [];

function suurin() {
  let iso = Math.max(...lista);
  return iso;
}

for (i=0; i<5; i++) {
  lista[i] = prompt("Anna luku");
}

let luku = suurin();
document.write("Suurin luku oli: " + luku);