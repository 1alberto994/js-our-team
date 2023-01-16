const dati=[
    {
        nome:"Wayne Barnett",
        role:"Founder e CEO",
        image:"wayne-barnett-fonder-ceo.jpg",
    },
    {
        nome:"Angela Caroll",
        role:"Chief editor",
        image:"angela-caroll-chief-editor.jpg",
    },
    {
        nome:"Walter Gordon",
        role:"Office Manager",
        image:"walter-gordon-office-manager.jpg",
    },
    {
        nome:"Angela Lopez",
        role:"Social media manager",
        image:"angela-lopez-social-media-manager.jpg",
    },
    {
        nome:"Scott Estrada",
        role:"Developer",
        image:"scott-estrada-developer.jpg",
    },
    {
        nome:"Barbara Ramos",
        role:"Graphic Designer",
        image:"barbara-ramos-graphic-designer.jpg",
    },
]
const nuoviDati=document.getElementById("container")

console.log(dati);
for(let i=0;i<dati.length;i++){
    console.log(i + "DATI",dati[i]);
     
    nuoviDati.innerHTML+=`<div class="mini-container">${dati[i].nome}</div>`
    nuoviDati.innerHTML+=`<div class="mini-container">${dati[i].role}</div>`
    nuoviDati.innerHTML+=`<div class="mini-container">${dati[i].image}</div>`
    
}

