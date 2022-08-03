// console collegamento
console.log('our team')

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. 
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// DATI TEAM:
// nome           role                    image

// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

// const imgTeam = [
//     './img/wayne-barnett-founder-ceo.jpg',
//     './img/angela-caroll-chief-editor.jpg',
//     './img/walter-gordon-office-manager.jpg',
//     './img/angela-lopez-social-media-manager.jpg',
//     './img/scott-estrada-developer.jpg',
//     './img/barbara-ramos-graphic-designer.jpg',
// ]


// CREO FUNZIONE CHE MI STAMPA UN MEMBRO

function creaMembro(name, role, image) {
    const membro = {
        name: name,
        role: role,
        image: `<img src = "${image}" alt="">`
    }
    return membro;
}

// creo Array usando la funzione che crea un membro
const membriTeam = [

    creaMembro('Wayne Bernett', 'Founder & CEO', './img/wayne-barnett-founder-ceo.jpg'),
    creaMembro('Angela Caroll', 'Chief Editor', './img/angela-caroll-chief-editor.jpg'),
    creaMembro('Walter Gordon', 'Office Manager', './img/walter-gordon-office-manager.jpg'),
    creaMembro('Angela Lopez', 'Social Media Manager', './img/angela-lopez-social-media-manager.jpg'),
    creaMembro('Scott Estrada', 'Develoer', './img/scott-estrada-developer.jpg'),
    creaMembro('Barbara Ramos', 'Graphic Designer', './img/barbara-ramos-graphic-designer.jpg'),

]
// stampo in console array
console.log(membriTeam)
// per ogni membro stampo nome, ruolo, img
for (let i = 0; i < membriTeam.length; i++) {
    const membroCorrente = membriTeam[i]
    const nomeMembro = membroCorrente.name
    const roleMembro = membroCorrente.role
    const imgMembro = membroCorrente.image

    console.log(nomeMembro, roleMembro, imgMembro)
}

// estrapolo ul per creare list item
const teamListEl = document.querySelector('.team-list');


// creo funzione per stampare in dom
// dove stampo nel dom il mio oggetto con le proprietà
function onLoop(membro) {
    teamListEl.innerHTML += `<li>${membro.name} ${membro.role} ${membro.image}</li>`

}
// per ogni entità dell'array membriTeam , uso la funzione onLoop
membriTeam.forEach(onLoop)


// for (let i = 0; i < imgTeam.length; i++) {
//     const src = imgTeam[i];
//     const img = `<img src = ${src} alt="">`
//     teamListEl.innerHTML += img
// }

// posso mettere una funzione dentro i parametri di una funzione ? riga 28
// che paramentri posso mettere a riga 74 per creare funzione