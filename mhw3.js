/* Menù a tendina titoli*/
function showMenu(event) {
  const titolo = event.currentTarget;
  if (titolo.dataset.titolo === 'prodotti') {
    const menu = document.querySelector('.menu-prodotti');
    menu.classList.remove('hidden');

    menu.addEventListener('mouseleave', hideMenu);
  }
}

function hideMenu() {
  const menu = document.querySelector('.menu-prodotti');
  menu.classList.add('hidden');
}

const titoli = document.querySelectorAll('.titoli .bottom a');

for (const titolo of titoli) {
  titolo.addEventListener('mouseover', showMenu);
}

/* Scorrimento immagini section */

const linkImmaginiSezione = [
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/teaser-crispy-days--carousel-dsk_0.png.webp?itok=QuOQiEB4',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/spicy-nuggets-evento--carousel-dsk.jpg.webp?itok=9ESevcrz',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/carousel-dsk--crispytemptation-restyle_0.png.webp?itok=KNNTNfx3',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/crispy-mcbacon-temptation--carousel-dsk_1.jpg.webp?itok=pfQe5a9e',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/le-ricche-fries--carousel-dsk_0.jpg.webp?itok=qZFXlhjq',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/happy-meal-time--carousel-dsk.jpg.webp?itok=hzhY8gVK',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/arches--carousel-dsk_0.jpg.webp?itok=yEQR23s9',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/waste-recycling--carousel-dsk.jpg.webp?itok=i84Q9uz0',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/eevm--carousel-dsk_3_0.jpg.webp?itok=Mlhh1b14',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/donut--carousel-dsk_0.jpg.webp?itok=wopP3GzW',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/brownie--carousel-dsk-2.jpg.webp?itok=acltOqvn',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/croissant-pistacchio--carousel-dsk-7.jpg.webp?itok=3IW1rpqD',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/app-mobile--carousel-dsk_1.jpg.webp?itok=mwdtdFhA',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/ordina-in-app--carousel-dsk.jpg.webp?itok=pdfqSD8v',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/ambiente--carousel-dsk_0.jpg.webp?itok=TTXLMBiR',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/hm-yugiho--carousel-dsk.png.webp?itok=tYab3uOX',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/compleanno--carousel-dsk.png.webp?itok=Z0ceLMyQ',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/happy-meal-readers--carousel-dsk.jpg.webp?itok=7VYlS8b0',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/best-practices--carousel-dsk_1.jpg.webp?itok=NEcs1jWu',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/pasti-caldi--carousel-dsk_2.png.webp?itok=GgBgxeJq',
];

const linkImmaginiSezioneRidimenzionate = [
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/evento-8-crispy-days-aprile--carousel-mob.jpg.webp?itok=Hjr3eZeI',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/spicy-nuggets-evento--carousel-mob_2.jpg.webp?itok=h_XH4NGN',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/carousel-mob--crispytemptation-restyle_0.png.webp?itok=R16amDcj',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/crispy-mcbacon-temptation--carousel-mob_1.jpg.webp?itok=0Jjt8Xad',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/le-ricche-fries--carousel-mob_0.jpg.webp?itok=W6AOsXBt',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/happy-meal-time--carousel-mob.jpg.webp?itok=a6UYtd4S',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/arches--carousel-mob_0.jpg.webp?itok=Ur5QpV5p',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/waste-recycling--carousel-mob.jpg.webp?itok=jKYvlOrW',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/eevm--carousel-mob_3.jpg.webp?itok=pFyeC1TF',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/donut--carousel-mob_1.jpg.webp?itok=N1Ef9f6n',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/brownie--carousel-mob-2.jpg.webp?itok=1NKg9AdK',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/croissant-pistacchio--carousel-mob_0.jpg.webp?itok=nhrV9G17',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/app-mobile--carousel-mob_1.jpg.webp?itok=zM3s0hps',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/ordina-in-app--carousel-mob.jpg.webp?itok=wKinw23c',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/ambiente--carousel-mob.jpg.webp?itok=JkSc1T5P',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/hm-yugiho--carousel-mob.png.webp?itok=cH3AtDe8',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/compleanno--carousel--mob.png.webp?itok=0vo6qW54',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/happy-meal-readers--carousel-mob_0.jpg.webp?itok=ppMamEio',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/best-practices--carousel-mob-1.jpg.webp?itok=m5YNHqvc',
  'https://www.mcdonalds.it/sites/default/files/styles/compressed/public/slide/pasti-caldi--carousel-mob.jpg.webp?itok=8nkwbVG0'
];

/* Aggiunta bottoni*/

document.addEventListener('DOMContentLoaded', avvioSlide);

let index = 0;
const sezione = document.querySelector('.section-slide');
const bottoni = document.querySelectorAll('button[data-index]');

function avvioSlide() {
  slideAutomatico();
  buttonClick();
}

function creaImmagine() {
  let immagine = sezione.querySelector('img');
  if (!immagine) {
    immagine = document.createElement('img');
    sezione.appendChild(immagine);
  }
  return immagine;
}

function slideAutomatico() {
  setInterval(aggiornaImmagine, 5000);
}

function aggiornaImmagine() {
  index = (index + 1) % linkImmaginiSezione.length;
  cambiaImmagine(index);
}

function cambiaImmagine(indice) {
  let immagine = creaImmagine();
  if (window.innerWidth < 500) {
    immagine.src = linkImmaginiSezioneRidimenzionate[indice];
    index = indice;
  } else {
    immagine.src = linkImmaginiSezione[indice];
    index = indice;
  }
}

function buttonClick() {
  for (let i = 0; i < bottoni.length; i++) {
    aggiungiGestoreClick(i);
  }
}

function aggiungiGestoreClick(indiceBottone) {
  bottoni[indiceBottone].addEventListener('click', function () {
    gestisciClickBottone(indiceBottone);
  });
}


function gestisciClickBottone(indiceBottone) {
  index = parseInt(bottoni[indiceBottone].getAttribute('data-index')) - 1;
  cambiaImmagine(index);
}


/* Toggle menu*/

const toggleMenuButton = document.querySelector('#toggle-menu');

function toggleMenu() {
  const menuChiuso = toggleMenuButton.querySelector('.icona-menu-chiuso');
  const menuAperto = toggleMenuButton.querySelector('.icona-menu-aperto');
  const menu = document.querySelector('.toggle-menu-aperto');

  if (menuChiuso.classList.contains('hidden')) {
    menuChiuso.classList.remove('hidden');
    menuAperto.classList.add('hidden');
    menu.classList.add('hidden');
    document.body.classList.remove('no-scroll');
  } else {
    menuChiuso.classList.add('hidden');
    menuAperto.classList.remove('hidden');
    menu.classList.remove('hidden');
    document.body.classList.add('no-scroll');
  }
}

toggleMenuButton.addEventListener('click', toggleMenu);


/* Bottoni menu mobile*/

const bottoniMenuMobile = document.querySelectorAll('.menu-main button[data-nome]');
const frecciaGiu = document.querySelector('.menu-chiuso');
const frecciaSu = document.querySelector('.menu-aperto');


function controlloMenu(event) {
  const bottone = event.currentTarget;
  const bottoneProdotti = document.querySelector('.menu-main .prodotti');
  const bottoneMondoMc = document.querySelector('.menu-main .mondo-mc');
  const bottoneImpegno = document.querySelector('.menu-main .impegno');

  if (bottone.getAttribute('data-nome') === 'prodotti') {
    if (bottoneProdotti.classList.contains('hidden')) {
      bottoneProdotti.classList.remove('hidden');
      frecciaGiu.classList.add('hidden');
      frecciaSu.classList.remove('hidden');
    } else {
      bottoneProdotti.classList.add('hidden');
      frecciaGiu.classList.remove('hidden');
      frecciaSu.classList.add('hidden');
    }
  } else if (bottone.getAttribute('data-nome') === 'mondo-mc') {
    if (bottoneMondoMc.classList.contains('hidden')) {
      bottoneMondoMc.classList.remove('hidden');
      frecciaGiu.classList.add('hidden');
      frecciaSu.classList.remove('hidden');
    } else {
      bottoneMondoMc.classList.add('hidden');
      frecciaGiu.classList.remove('hidden');
      frecciaSu.classList.add('hidden');
    }
  } else if (bottone.getAttribute('data-nome') === 'impegno') {
    if (bottoneImpegno.classList.contains('hidden')) {
      bottoneImpegno.classList.remove('hidden');
      frecciaGiu.classList.add('hidden');
      frecciaSu.classList.remove('hidden');
    } else {
      bottoneImpegno.classList.add('hidden');
      frecciaGiu.classList.remove('hidden');
      frecciaSu.classList.add('hidden');
    }
  }

}



for (const bottone of bottoniMenuMobile) {
  bottone.addEventListener('click', controlloMenu);
}



/* API*/

function onJson(json) {
  console.log('Json ricevuto');
  console.log(json);
  for (const holidays of json.holidays) {
    if (holidays.date === '2023-12-25') {
      linkImmaginiSezione.push('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lapaginadeglisconti.it%2Fmcdonalds-winterdays-2023-ogni-giorno-unofferta-esclusiva-diversa-fino-a-natale%2F&psig=AOvVaw3Zf_RnDm-RUACJgXtXwHNm&ust=1713540757988000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKjUpvSKzIUDFQAAAAAdAAAAABAE');
    }
  }
}

function onResponse(response) {
  console.log('Risposta ricevuta');
  return response.json();
}

function getHolidays(event) {

  event.preventDefault();
  const url = api_endpoint + '?key=' + api_key + '&country=' + country + '&year=' + year;

  fetch(url).then(onResponse).then(onJson);
}

const year = '2023';
const country = 'IT';
const api_key = 'b3b5aeb9-b00b-412f-9c91-df9e700ad808';
const api_endpoint = 'https://holidayapi.com/v1/holidays';

document.addEventListener('DOMContentLoaded', getHolidays);




