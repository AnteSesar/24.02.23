var auto = {
    brand: {
        marka: "vw",
        model: "golf"
    },
    gorivo: "benzin",
    godina: 2022,
    boja: "crvena",
    maxBrzina: 160,
    //minBrzina: 0,
    trenutnaBrzina: 0,
    ubrzaj: function(ubrzanje) {
        this.trenutnaBrzina += ubrzanje
        return this.trenutnaBrzina;
    },
    zakoči: function(brojSekundi){
        while (this.trenutnaBrzina > 0 && brojSekundi >= 0 ){
            this.trenutnaBrzina -= 2;
            console.info("Trenutna brzina pri kočenju je: " + this.trenutnaBrzina);  // console.log = console.info = console.debug (razlike u browseru)
            brojSekundi--;
        }
        return this.trenutnaBrzina;
    },
    brojKotača: 4
};



console.log(auto.propertyIsEnumerable(auto.godina));

console.log("Ja vozim auto marke: " + auto.brand.marka);
//console.log(`Ja vozim auto marke: $(auto.marka)`);
console.log("Auto vozi brzinom " + auto.trenutnaBrzina);
console.log("Auto nakon ubrzanja vozi brzinom "+ auto.ubrzaj(10));

console.log("Auto nakon kočenja vozi brzinom "+ auto.zakoči(2));

for (let key in auto){
    if (auto.propertyIsEnumerable(key)){
        console.log("ključ: " + key + "; vrijednost " + auto[key]);
    }
}

console.log("Ja vozim auto marke: " + auto.brand.marka + "; model " + auto.brand.model);

var json = JSON.stringify(auto);
console.log(json);