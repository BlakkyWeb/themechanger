const container = document.querySelector('[data-container]');
const topSection = document.querySelector('[data-top-section]');
const topsectionHead = document.querySelector('[data-top-section-head]');
const checkBox = document.querySelector('[data-check-box]');
const label = document.querySelector('[data-label]');
const toggler = document.querySelector('[data-ball]');
const statsCard = document.querySelectorAll('[data-stats-card]');
const statsCardHeader = document.querySelectorAll('[data-stats-card-header]');
const overview = document.querySelector('[data-overview]');


checkBox.addEventListener('change', () => {
    container.classList.toggle('lightBG');
    topSection.classList.toggle('lightCardBG');
    topsectionHead.classList.toggle('headerText');
    toggler.classList.toggle('toggleBG');
    label.classList.toggle('linearBG');
    statsCard.forEach((item) =>{
        item.classList.toggle('lightCardBG');
    });
    statsCardHeader.forEach((lol) => {
        lol.classList.toggle('mainTextDark');
    });
    overview.classList.toggle('overviewText');
})