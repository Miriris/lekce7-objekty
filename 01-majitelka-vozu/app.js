// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..

let auto = {
  znacka: 'Ford',
  barva: 'modrá',
  rokVyroby: 2015,
  spz: '1B2 3456',
};

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)

auto.majitel = {};
auto.majitel.jmeno = 'Jana';
auto.majitel.prijmeni = 'Czechita';

// Přepiš značku na Škoda

auto['znacka'] = 'Škoda';
// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.

let majitelka = auto.majitel.jmeno + ' ' + auto.majitel.prijmeni;
let znacka = auto.znacka;
let spz = auto.spz;

/*
let poleCisel = [12, 78, 18, 40];
console.log(poleCisel);
poleCisel.sort(porovnej);
console.log(poleCisel);

function porovnej(cis1, cis2) {
  if (cis1 > cis2) {
    return 1;
  } else {
    return -1;
  }
};


let poleKamaradu = [
  { jmeno: 'Vanda', vek: 12},
  { jmeno: 'Hubert', vek: 78},
  { jmeno: 'Amalie', vek: 18},
  { jmeno: 'Olivie', vek: 40},
];


poleKamaradu.forEach() {
  console.log()
} 


console.log(poleKamaradu);
poleKamaradu.sort(porovnejObj);
console.log(poleKamaradu);

*/
