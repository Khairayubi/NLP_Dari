/* =========================
ALPHABET DATA
========================= */

const alphabetData = [

{
letter:'ا',
word:'انار',
meaning:'Pomegranate',
image:'assets/pictures/pomegrenade.jpeg',
transliteration:'Alef',
fact:'ا is the first letter of the Dari alphabet.'
},

{
letter:'ب',
word:'بچه',
meaning:'Child',
image:'assets/pictures/child.jpg',
transliteration:'Be',
fact:'ب has one dot beneath it.'
},

{
letter:'پ',
word:'پدر',
meaning:'Father',
image:'assets/pictures/fadar.jpg',
transliteration:'Pe',
fact:'پ exists in Persian but not Arabic.'
},

{
letter:'ت',
word:'توت',
meaning:'Mulberry',
image:'assets/pictures/mullberry.jpeg',
transliteration:'Te',
fact:'ت is one of the most common letters.'
},

{
letter:'ث',
word:'ثواب',
meaning:'Reward',
image:'assets/pictures/reward.jpeg',
transliteration:'Se',
fact:'ث sounds similar to S.'
},

{
letter:'ج',
word:'جوجه',
meaning:'Chick',
image:'assets/pictures/chick.jpg',
transliteration:'Jim',
fact:'ج creates the J sound.'
},

{
letter:'چ',
word:'چراغ',
meaning:'Lamp',
image:'assets/pictures/lamp.jpg',
transliteration:'Che',
fact:'چ is unique to Persian.'
},

{
letter:'ح',
word:'حوت',
meaning:'Fish',
image:'assets/pictures/fish.jpg',
transliteration:'He',
fact:'ح is a deep H sound.'
},

{
letter:'خ',
word:'خانه',
meaning:'House',
image:'assets/pictures/house.jpg',
transliteration:'Khe',
fact:'خانه means home.'
},

{
letter:'د',
word:'درخت',
meaning:'Tree',
image:'assets/pictures/tree.jpeg',
transliteration:'Dal',
fact:'د does not connect forward.'
},

{
letter:'ذ',
word:'ذغال',
meaning:'Coal',
image:'assets/pictures/coal.jpg',
transliteration:'Zal',
fact:'ذ sounds similar to Z.'
},

{
letter:'ر',
word:'روباه',
meaning:'Fox',
image:'assets/pictures/fox.jpg',
transliteration:'Re',
fact:'ر has a rolling sound.'
},

{
letter:'ز',
word:'زنبور',
meaning:'Bee',
image:'assets/pictures/bee.jpg',
transliteration:'Ze',
fact:'ز sounds like buzzing.'
},

{
letter:'ژ',
word:'ژاله',
meaning:'Dew',
image:'assets/pictures/dew.jpg',
transliteration:'Zhe',
fact:'ژ is used in Persian words.'
},

{
letter:'س',
word:'سیب',
meaning:'Apple',
image:'assets/pictures/apple.jpg',
transliteration:'Sin',
fact:'سیب means apple.'
},

{
letter:'ش',
word:'شیر',
meaning:'Lion',
image:'assets/pictures/lion.jpeg',
transliteration:'Shin',
fact:'ش creates the SH sound.'
},

{
letter:'ص',
word:'صابون',
meaning:'Soap',
image:'assets/pictures/soap.jpeg',
transliteration:'Sad',
fact:'ص is a heavy S.'
},

{
letter:'ض',
word:'ضیافت',
meaning:'Feast',
image:'assets/pictures/feast.jpg',
transliteration:'Zad',
fact:'ض sounds like Z.'
},

{
letter:'ط',
word:'طوطی',
meaning:'Parrot',
image:'assets/pictures/parrot.jpeg',
transliteration:'Toe',
fact:'ط is a strong T.'
},

{
letter:'ظ',
word:'ظرف',
meaning:'Bowl',
image:'assets/pictures/bowl.jpg',
transliteration:'Zoe',
fact:'ظ sounds like Z.'
},

{
letter:'ع',
word:'عینک',
meaning:'Glasses',
image:'assets/pictures/glass.jpg',
transliteration:'Ain',
fact:'ع has no exact English sound.'
},

{
letter:'غ',
word:'غنچه',
meaning:'Flower Bud',
image:'assets/pictures/flowerbud.jpg',
transliteration:'Ghain',
fact:'غ comes from the throat.'
},

{
letter:'ف',
word:'فیل',
meaning:'Elephant',
image:'assets/pictures/elephent.jpg',
transliteration:'Fe',
fact:'فیل means elephant.'
},

{
letter:'ق',
word:'قلم',
meaning:'Pen',
image:'assets/pictures/pen.jpeg',
transliteration:'Qaf',
fact:'ق is pronounced deeply.'
},

{
letter:'ک',
word:'کتاب',
meaning:'Book',
image:'assets/pictures/book.jpg',
transliteration:'Kaf',
fact:'کتاب means book.'
},

{
letter:'گ',
word:'گل',
meaning:'Flower',
image:'assets/pictures/flower.jpg',
transliteration:'Gaf',
fact:'گ exists in Persian.'
},

{
letter:'ل',
word:'لباس',
meaning:'Clothes',
image:'assets/pictures/cloths.jpg',
transliteration:'Lam',
fact:'ل has a soft flow.'
},

{
letter:'م',
word:'ماه',
meaning:'Moon',
image:'assets/pictures/moon.jpeg',
transliteration:'Mim',
fact:'ماه means moon.'
},

{
letter:'ن',
word:'نان',
meaning:'Bread',
image:'assets/pictures/bread.jpg',
transliteration:'Nun',
fact:'نان inspired naan bread.'
},

{
letter:'و',
word:'ورزش',
meaning:'Sports',
image:'assets/pictures/sports.jpeg',
transliteration:'Waw',
fact:'و changes pronunciation in words.'
},

{
letter:'ه',
word:'هوا',
meaning:'Air',
image:'assets/pictures/air.jpg',
transliteration:'He',
fact:'ه is a soft breathing sound.'
},

{
letter:'ی',
word:'یخ',
meaning:'Ice',
image:'assets/pictures/ice.png',
transliteration:'Ye',
fact:'یخ means ice.'
}

];

/* =========================
ELEMENTS
========================= */

const letterEl =
document.getElementById('letter');

const wordEl =
document.getElementById('word');

const meaningEl =
document.getElementById('meaning');

const translitEl =
document.getElementById('translit');

const factEl =
document.getElementById('factText');

const imageEl =
document.getElementById('letterImage');

const counterEl =
document.getElementById('counter');

const progressFill =
document.getElementById('progressFill');

const nextBtn =
document.getElementById('nextBtn');

const prevBtn =
document.getElementById('prevBtn');

const playBtn =
document.getElementById('playBtn');

const loader =
document.getElementById('loader');

const loaderBar =
document.getElementById('loaderBar');

const loaderPercent =
document.getElementById('loaderPercent');

const loaderMessage =
document.getElementById('loaderMessage');

const hamburger =
document.getElementById('hamburger');

const mobileMenu =
document.getElementById('mobileMenu');

const glow =
document.querySelector('.cursor-glow');

/* =========================
STATE
========================= */

let current = 0;

/* =========================
UPDATE CARD
========================= */

function updateCard(){

  const item =
  alphabetData[current];

  imageEl.style.opacity = 0;
  letterEl.style.opacity = 0;
  wordEl.style.opacity = 0;

  setTimeout(()=>{

    letterEl.textContent =
    item.letter;

    wordEl.textContent =
    item.word;

    meaningEl.textContent =
    item.meaning;

    translitEl.textContent =
    item.transliteration;

    factEl.textContent =
    item.fact;

    imageEl.src =
    item.image;

    counterEl.textContent =
    `${current + 1} / ${alphabetData.length}`;

    progressFill.style.width =
    `${((current + 1) / alphabetData.length) * 100}%`;

    imageEl.style.opacity = 1;
    letterEl.style.opacity = 1;
    wordEl.style.opacity = 1;

  },150);

}

/* =========================
CONFETTI
========================= */

function createConfetti(){

  for(let i = 0; i < 140; i++){

    const confetti =
    document.createElement('div');

    confetti.classList.add(
      'confetti'
    );

    confetti.style.left =
    Math.random() * 100 + 'vw';

    confetti.style.animationDelay =
    Math.random() * 2 + 's';

    confetti.style.animationDuration =
    (Math.random() * 3 + 2) + 's';

    confetti.style.background =
    `hsl(${Math.random()*360},100%,60%)`;

    confetti.style.width =
    (Math.random()*10 + 6) + 'px';

    confetti.style.height =
    confetti.style.width;

    document.body.appendChild(
      confetti
    );

    setTimeout(()=>{

      confetti.remove();

    },5000);

  }

}

/* =========================
NEXT BUTTON
========================= */

nextBtn.addEventListener(
'click',
()=>{

  if(current === alphabetData.length - 1){

    createConfetti();

  }

  current++;

  if(current >= alphabetData.length){

    current = 0;

  }

  updateCard();

});

/* =========================
PREVIOUS BUTTON
========================= */

prevBtn.addEventListener(
'click',
()=>{

  current--;

  if(current < 0){

    current =
    alphabetData.length - 1;

  }

  updateCard();

});

/* =========================
AUDIO
========================= */

playBtn.addEventListener(
'click',
()=>{

  const item =
  alphabetData[current];

  speechSynthesis.cancel();

  const utterance =
  new SpeechSynthesisUtterance(
    `${item.letter} ${item.word}`
  );

  utterance.lang = 'fa-AF';

  utterance.rate = 0.72;

  utterance.pitch = 1;

  speechSynthesis.speak(
    utterance
  );

});

/* =========================
CURSOR EFFECT
========================= */

window.addEventListener(
'mousemove',
(e)=>{

  glow.style.left =
  e.clientX + 'px';

  glow.style.top =
  e.clientY + 'px';

});

/* =========================
MOBILE MENU
========================= */

hamburger.addEventListener(
'click',
()=>{

  mobileMenu.classList.toggle(
    'open'
  );

});

/* =========================
LOADER
========================= */

const loadingMessages = [

'ENTERING THE LANGUAGE',

'LOADING PRONUNCIATION',

'PREPARING EXPERIENCE',

'INITIALIZING ALPHABETS'

];

let msgIndex = 0;

setInterval(()=>{

  msgIndex++;

  if(msgIndex >= loadingMessages.length){

    msgIndex = 0;

  }

  loaderMessage.textContent =
  loadingMessages[msgIndex];

},1200);

let progress = 0;

const loaderInterval =
setInterval(()=>{

  progress++;

  loaderBar.style.width =
  progress + '%';

  loaderPercent.textContent =
  progress + '%';

  if(progress >= 100){

    clearInterval(
      loaderInterval
    );

    setTimeout(()=>{

      loader.classList.add(
        'hidden'
      );

    },600);

  }

},18);

/* =========================
IMAGE FALLBACK
========================= */

imageEl.addEventListener(
'error',
()=>{

  imageEl.src =
  'assets/pictures/book.jpg';

});

/* =========================
KEYBOARD SUPPORT
========================= */

document.addEventListener(
'keydown',
(e)=>{

  if(e.key === 'ArrowRight'){

    nextBtn.click();

  }

  if(e.key === 'ArrowLeft'){

    prevBtn.click();

  }

});

/* =========================
INIT
========================= */

updateCard();
