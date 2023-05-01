//aktualni rok do paticky

let currentYear=document.querySelector('.currentYear')
let GetDnesniDatum=new Date()

currentYear.innerHTML=GetDnesniDatum.getFullYear()

//oznaceni DNES a ZITRA na uvodni stranku do Pravidelneho programu

const currentDay=GetDnesniDatum.getDay()
const regularEvents=document.querySelector('.regular-event')
if (currentDay>=1 && currentDay<=5) {
    const dayToday=regularEvents.children[currentDay-1].children[0].children[0]
    const innerHTMLdayToday=dayToday.innerHTML
    dayToday.innerHTML=`<span class="regular-event__today">DNES:</span> ${innerHTMLdayToday}`
}
if (currentDay>=0 && currentDay<=4) {
    const dayTomorrow=regularEvents.children[currentDay].children[0].children[0]
    const innerHTMLdayTomorrow=dayTomorrow.innerHTML
    dayTomorrow.innerHTML=`<span class="regular-event__today">ZÍTRA:</span> ${innerHTMLdayTomorrow}`
}

// ovladaci panel carouselu pro accesibility
const glideStop=document.getElementById('glide__stop');
glideStop.addEventListener('click',StopGlideShow);

function StopGlideShow() {
    glide.update({
        autoplay: false
      }).mount()
};

const glideStart=document.getElementById('glide__start');
glideStart.addEventListener('click',StartGlideShow);

function StartGlideShow() {
    glide.update({
        autoplay: autoplayValue
      }).mount()
};

const MainElement=document.getElementById('main');
const skipToMain=document.getElementById('glide__skipToMain');
const glideAccesibility=document.querySelector('.glide__accesibility')
const mainContent = document.querySelector('main');

skipToMain.addEventListener('focus', (event) => {
    glideAccesibility.style.opacity='1'
});

skipToMain.addEventListener('blur', (event) => {
    glideAccesibility.style.opacity='0'
  });

glideStart.addEventListener('focus',(event) => {
    glideAccesibility.style.opacity='1';
});

glideStart.addEventListener('blur', (event) => {
    glideAccesibility.style.opacity='0'
  });

glideStop.addEventListener('focus',(event) => {
    glideAccesibility.style.opacity='1';
});

glideStop.addEventListener('blur', (event) => {
    glideAccesibility.style.opacity='0'
  });
  
skipToMain.addEventListener('click', (event) => {
    event.preventDefault();
    mainContent.tabIndex = -1;
    mainContent.focus();
  });
  
mainContent.addEventListener('blur', () => {
    mainContent.tabIndex = 0;
  });




  



