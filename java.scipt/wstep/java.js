function dodawanie (a,b) {
    let result;
    result = (a + b) * 2;
    return result;
}
console.log(dodawanie(5,6))
dodawanie (5,6)

let odejmowanie = (x,y) => {
    let result;
    result = x - y;
    return result;
}
console.log(odejmowanie(5,3))

let backtick = 50;
let napis = `ola ma ${backtick} lat`
console.log(napis);

// let pensja = (podstawa,premia) => {
//     let result;
//     result = podstawa + premia;
//     return result
// }
// result = pensja(12219831913,82632751)
// let napis1 = `Chciałbym zarabiać ${result}`;
// console.log(napis1)

let pensja = (podstawa,premia) => {
    let result;
    result = podstawa + premia;
    return result
}
let napis1 = "Chciałbym zarabiać "
console.log(napis1 + pensja(100000,1000000))

