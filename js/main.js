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
