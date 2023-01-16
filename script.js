const dati=[
    {
        nome:"Wayne Barnett  _   ",
        role:"Founder e CEO   _  ",
        image:"wayne-barnett-fonder-ceo.jpg",
    },
    {
        nome:"Angela Caroll_",
        role:"Chief editor_",
        image:"angela-caroll-chief-editor.jpg",
    },
    {
        nome:"Walter Gordon_",
        role:"Office Manager_",
        image:"walter-gordon-office-manager.jpg",
    },
    {
        nome:"Angela Lopez_",
        role:"Social media manager_",
        image:"angela-lopez-social-media-manager.jpg",
    },
    {
        nome:"Scott Estrada_",
        role:"Developer_",
        image:"scott-estrada-developer.jpg",
    },
    {
        nome:"Barbara Ramos_",
        role:"Graphic Designer_",
        image:"barbara-ramos-graphic-designer.jpg",
    },
]
const nuoviDati=document.getElementById("dati")

console.log(dati);
for(let i=0;i<dati.length;i++){
    console.log(i + "DATI",dati[i]);
     
    nuoviDati.innerHTML+=`<li>${dati[i].nome} ${dati[i].role}${dati[i].image}</li>`
    
    
}

