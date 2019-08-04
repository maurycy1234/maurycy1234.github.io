
let result;
let zad = (n) => {
    result = n;
    for( let i=result - 1; i>0; --i) {
      result = result * i
    }
    return result
}

console.log(zad(3))

console.log(zad(5))


function silnia(n) {
    let wynik = 1;
    if(n<0) {
        return "Silnia od liczby ujemnej nie istnieje"
    }
    else if (n<2) {
        return wynik
    }
    else {
        wynik= n*silnia(n-1);
    }
    return wynik;
}
console.log(silnia(6))


