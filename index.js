function changeImage1 () {
    document.querySelector('.header__image').style.backgroundImage = "url('Group 9.png')";    
}
function changeImage2 () {
    document.querySelector('.header__image').style.backgroundImage = "url('Group 13.png')";    
}
function changeImage3 () {
    document.querySelector('.header__image').style.backgroundImage = "url('Group 14.png')";    
}
function changeImage4 () {
    document.querySelector('.header__image').style.backgroundImage = "url('Group 18.png')";    
}
setInterval(changeImage2, 100);
setInterval(changeImage3, 200);
setInterval(changeImage4, 300);
setInterval(changeImage1, 400);


document.getElementById('landing_button').addEventListener('click', () => {
    document.querySelector('.landing').style.display = 'block';
    document.querySelector('.internet-store').style.display = 'none';
    document.querySelector('.private-site').style.display = 'none';
});
document.getElementById('prod').addEventListener('click', () => {
    let landingPrice = '15 000 руб';
    let landingDays = '2 дня';
    console.log('Hello');
    document.getElementById('landing-price').textContent = landingPrice;
    document.getElementById('landing-days').textContent = landingDays;
});
document.getElementById('podpis').addEventListener('click', () => {
    let landingPrice = '17 000 руб';
    let landingDays = '3 дня';
    console.log('Hello');
    document.getElementById('landing-price').textContent = landingPrice;
    document.getElementById('landing-days').textContent = landingDays;
});
document.getElementById('virus').addEventListener('click', () => {
    let landingPrice = '20 000 руб';
    let landingDays = '6 дней';
    console.log('Hello');
    document.getElementById('landing-price').textContent = landingPrice;
    document.getElementById('landing-days').textContent = landingDays;
});
document.getElementById('differ').addEventListener('click', () => {
    let landingPrice = '11 000 руб';
    let landingDays = '2 дня';
    console.log('Hello');
    document.getElementById('landing-price').textContent = landingPrice;
    document.getElementById('landing-days').textContent = landingDays;
});


document.getElementById('internet-store_button').addEventListener('click', () => {
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.internet-store').style.display = 'block';
    document.querySelector('.private-site').style.display = 'none';
});
let frontPrice = 0;
let backPrice = 0;
let frontDays = 0;
let backDays = 0;
document.getElementById('vue').addEventListener('click', () => {
    frontPrice = 20;
    frontDays = 4;
});
document.getElementById('react').addEventListener('click', () => {
    frontPrice = 50;
    frontDays = 7;
});
document.getElementById('angular').addEventListener('click', () => {
    frontPrice = 70;
    frontDays = 11;
});
document.getElementById('node').addEventListener('click', () => {
    backPrice = 70;
    backDays = 12;
});
document.getElementById('php').addEventListener('click', () => {
    backPrice = 50;
    backDays = 10;
});
document.getElementById('django').addEventListener('click', () => {
    backPrice = 70;
    backDays = 11;
});
document.getElementById('intercount').addEventListener('click', () => {
    document.getElementById('inter-price').textContent = '' + (frontPrice + backPrice) + ' 000 руб';
    document.getElementById('inter-days').textContent = '' + (frontDays + backDays) + ' дней';
});
document.getElementById('interdelete').addEventListener('click', () => {
    document.getElementById('inter-price').textContent = '0';
    document.getElementById('inter-days').textContent = '0';
    frontPrice = 0;
    backPrice = 0;
    frontDays = 0;
    backDays = 0;
});


document.getElementById('private').addEventListener('click', () => {
    document.getElementById('private-price').textContent = '70 000 руб';
    document.getElementById('private-days').textContent = '11 дней';
});


document.getElementById('private-site_button').addEventListener('click', () => {
    document.querySelector('.landing').style.display = 'none';
    document.querySelector('.internet-store').style.display = 'none';
    document.querySelector('.private-site').style.display = 'block';
});