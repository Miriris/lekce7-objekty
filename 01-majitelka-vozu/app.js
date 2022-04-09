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

document.getElementById('majitelka').textContent = majitelka;
document.getElementById('znacka').textContent = auto.znacka;
document.getElementById('spz').textContent = auto.spz;

/*
let poleCisel = [12, 78, 18, 40];
console.log(poleCisel);

1.možnost - callback funkce:
poleCisel.sort(porovnej);
  
function porovnej(cis1, cis2) {
  if (cis1 > cis2) {
    return 1;
  } else {
    return -1;
  }
};

2.možnost - anonymní funkce:
poleCisel.sort(function (cis1, cis2) {
  if (cis1 > cis2) {
    return 1;
  } else {
    return -1;
  }
})

console.log(poleCisel);



let poleOsob - bylo na začátku, potom přejmenováno na poleKamaradu
let poleKamaradu = [
  { jmeno: 'Vanda', vek: 12},
  { jmeno: 'Hubert', vek: 78},
  { jmeno: 'Amalie', vek: 18},
  { jmeno: 'Olivie', vek: 40},
];

console.log(poleOsob);
poleOsob.sort(porovnejObj)

function porovnejObj(object1, object2) {
  if (object1.vek > object2.vek) {
    return 1;
  } else {
    return -1;
  }
};

console.log(poleKamaradu); //špatně zobrazuje v devtools - už seřazené
vidíme to na foreachem proiterované hodnotě věk
poleKamaradu.forEach(function(object) {
  console.log(object.vek);
});

poleKamaradu.sort(porovnejObj);
console.log(poleKamaradu);

poleKamaradu.forEach(function(object) {
  console.log(object.vek);
});

poleOsob.forEach(pridejNarozeni)

function pridejNarozeni(osoba) {
  osoba.narozeni = 2022 - osoba.vek;
  return osoba;
} 

poleOsob.filter(najdiDospele);

function najdiDospele(osoba) {
  if (osoba.vek > 18) {
    return true;
  } else {
    return false;
  }
}



*/
