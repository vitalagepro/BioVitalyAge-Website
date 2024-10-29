/* Carousel */

const extremPagination = document.getElementById('extreme');
const firstPagination = document.getElementById('first');
const currentPagination = document.getElementById('current');

const leftBtn = document.getElementById('button-left');
const rightBtn = document.getElementById('button-right');


const elencoFunzioni = [
    {
        img: "../../includes/images/piattaforma1.png",
        marcatore: 'tecnologia',
        descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Omnis quaerat officia ipsa id quae reiciendis ducimus quos possimus dolorum amet soluta tempora quasi nam delectus necessitatibus impedit voluptatum ratione',
        titolo: 'Titolo placeholder 1',
        current: 'yes',
    },
    {
        img: "../../includes/images/piattaforma1.png",
        marcatore: 'tecnologia',
        descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Omnis quaerat officia ipsa id quae reiciendis ducimus quos possimus dolorum amet soluta tempora quasi nam delectus necessitatibus impedit voluptatum ratione',
        titolo: 'Titolo placeholder 2',
        current: 'no',
    },
    {
        img: "../../includes/images/piattaforma1.png",
        marcatore: 'tecnologia',
        descrizione: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit Omnis quaerat officia ipsa id quae reiciendis ducimus quos possimus dolorum amet soluta tempora quasi nam delectus necessitatibus impedit voluptatum ratione',
        titolo: 'Titolo placeholder 3',
        current: 'no',
    }
];

var length = elencoFunzioni.length;
extremPagination.textContent = length;

let counter = 0;


rightBtn.addEventListener('click', ()=>{
    for (let i = 0; i < elencoFunzioni.length; i++) {
       
        if (elencoFunzioni[i].current == 'yes'){
            elencoFunzioni[i].current = 'no';
            
            counter += 1;
            return;
        }
    }
    currentPagination.textContent = counter
    elencoFunzioni[counter].current = 'yes';
    console.log(elencoFunzioni[counter])



})