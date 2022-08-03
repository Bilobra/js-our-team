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

// CREO FUNZIONE CHE MI STAMPA UN MEMBRO

function creaMembro(name, role, image) {
    const membro = {
        name: name,
        role: role,
        image: image,
    }
    return membro;
}
const membriTeam = [
    creaMembro('Wayne Bernett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    creaMembro('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    creaMembro('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    creaMembro('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    creaMembro('Scott Estrada', 'Develoer', 'scott-estrada-developer.jpg'),
    creaMembro('Barbara Ramos', 'Graphic Designer', ' barbara-ramos-graphic-designer.jpg'),

]

console.log(membriTeam)

for (let i = 0; i < membriTeam.length; i++){
    const membroCorrente = membriTeam[i]
    const nomeMembro = membroCorrente.name
    const roleMembro = membroCorrente.role
    const imgMembro = membroCorrente.image

    console.log(nomeMembro, roleMembro, imgMembro)
}

