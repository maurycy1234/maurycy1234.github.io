let Kaja = {
    imie: "kaja",
    wzrost: 152,
    przedstawOsobe() {
        console.log(this.imie)
    }


}

let Krystian = {
    imie: "Krystian",
    wzrost: 180,
    przedstawOsobe() {
        console.log(this.imie)
    },
    stanCywilny: "żonaty/zamężny"
}

Kaja.przedstawOsobe();
Krystian.przedstawOsobe();


console.log(Krystian.stanCywilny)

console.log(Kaja.wzrost);

console.log(Kaja);

class Osoba {
    constructor(imie,nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost;
        this.oczy;
    }
    wyswietlInfo() {

    }
}
