let taulu = [1,2,3,4,5];

function liita(lista) {
  for (i=0; i<lista.length; i++) {
    var muut;
    if (i===0) {
      muut = String(lista[i]);
    } else {
      muut += String(lista[i]);
    }
  }
  return muut;
}

let jon = liita(taulu);
document.write(jon);