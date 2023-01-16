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
console.log(dati);
for(let key in dati){
    console.log(key + ":",dati[key]);
}