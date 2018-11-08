function muutos(gal) {
  let lit = gal * 3.785;
  return lit;
}

let kys = prompt("Anna määrä gallonoina");
let vas = muutos(kys);
document.write(vas);