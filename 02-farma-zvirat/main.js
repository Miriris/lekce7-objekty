/*let krava = {
    jmeno: 'Kravička',
    foto: 'obrazky/krava.jpg',
  };
  
  let ovecka = {
    jmeno: 'Ovečka',
    foto: 'obrazky/ovce.jpg',
  };
*/

let farma = document.querySelector('.farma');
//farma.appendChild(zvire);

let zvirata = [
  {
    jmeno: 'Kravička',
    foto: 'obrazky/krava.jpg',
  },

  {
    jmeno: 'Ovečka',
    foto: 'obrazky/ovce.jpg',
  },

  {
    jmeno: 'Husička',
    foto: 'obrazky/husa.jpg',
  },

  {
    jmeno: 'Kočička',
    foto: 'obrazky/kocka.jpg',
  },

  {
    jmeno: 'Koník',
    foto: 'obrazky/kun.jpg',
  },

  {
    jmeno: 'Pejsek',
    foto: 'obrazky/pes.jpg',
  },
];

for (let i = 0; i < zvirata.length; i++) {
  let zvire = document.createElement('div');
  zvire.classList.add('zvire');

  let fotoZvirete = document.createElement('img');
  fotoZvirete.classList.add('foto');

  fotoZvirete.src = zvirata[i].foto;
  fotoZvirete.alt = zvirata[i].jmeno;

  let jmenoZvirete = document.createElement('div');
  jmenoZvirete.classList.add('jmeno');
  jmenoZvirete.textContent = zvirata[i].jmeno;

  zvire.appendChild(fotoZvirete);
  zvire.appendChild(jmenoZvirete);

  farma.appendChild(zvire);
}

// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

//let zvire = document.createElement('div');
//zvire.className = 'zvire';

// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
//2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.

//let fotoZvirete = document.createElement('img');
//fotoZvirete.className = 'foto';
//fotoZvirete.src = krava.foto;

//2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

/*
let jmenoZvirete = document.createElement('span');
jmenoZvirete.className = 'jmeno';
jmenoZvirete.innerHTML = krava.jmeno;

//2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)

zvire.appendChild(fotoZvirete);
zvire.appendChild(jmenoZvirete);

// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

let farma = document.querySelector('.farma');
farma.appendChild(zvire);
*/

// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...

// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?
