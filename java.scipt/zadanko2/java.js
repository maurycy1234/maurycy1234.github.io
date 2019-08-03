let result;
let zad = (a,b,c) => {
    result = a * b * c
    return result
}

zad(2,5,8)


if(result % 2 ==0) {
    console.log("parzyste");
} else {
    console.log('nieparzyste');
}

if(result % 3 ==0) {
    console.log(`Nasza liczba ${result} jest podzielna przez 3`);
} else {
    console.log(`Nasza liczba ${result} nie jest podzielna przez 3`);
}


    
let tab=[ 'm1' ,'m2','m3', 'm4', 'm5']
    //let i in tab
for(let i=0; i<tab.length; i++) {
    console.log(i + 1 + " Imię to: " + tab[i])
}

