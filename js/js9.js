const fibonacci = (luku) =>
{
  let jono = [1,1];
  for (i=2; i<luku; i++) {
    jono[i] = jono[i-2] + jono[i-1];
  }
  document.write(jono[i-1]);
}

let mones = prompt("Monesko Fibonaccin luku");
fibonacci(mones);