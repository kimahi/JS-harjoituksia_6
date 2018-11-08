let taulu = [1,2,3,4,5,6,43,534,9,1234];

function parilliset(lista) {
  let pari = [];
  for (i=0; i<lista.length; i++) {
    if (lista[i]%2===0) {
      pari[pari.length] = lista[i];
    }
  }
  return pari;
}

let lista = parilliset(taulu);
document.write(lista);
