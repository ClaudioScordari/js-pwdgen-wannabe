// nome della persona
let nome_persona = prompt('Inserisci il tuo nome:');

// cognome della persona
let cognome_persona = prompt('Inserisci il tuo cognome:');

// colore preferito
let colore_preferito = prompt('Inserisci il tuo colore preferito');

// questo è il numero magico
const magic_number = 114;

// password generata
let password = nome_persona + cognome_persona + colore_preferito + magic_number;
document.writeln(password);