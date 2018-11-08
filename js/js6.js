let taulu = [1,2,3,4,5];

function vastaluvuksi(lista) {
  for (i=0; i<lista.length; i++) {
    let vasta = lista[i] * -1;
    document.write(vasta + "<br>");
  }
}

vastaluvuksi(taulu);