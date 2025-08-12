let herois = [
     { nome: "Goku", xp: 7500 },
     { nome: "vegeta", xp: 3500 },
     { nome: "gohan", xp: 5500 },
     { nome: "tranks", xp: 10000 },
     
]

for (let contador = 0; contador < herois.length; contador++) {
    let xp = herois[contador].xp;
    let nivel = "";

    if (xp < 1000) 
        nivel = "Ferro";

    else if (xp <= 2000) 
        nivel = "Bronze";

    else if (xp <= 5000) 
        nivel = "Prata";

    else if (xp <= 7000) 
        nivel = "Ouro";

    else if (xp <= 8000) 
        nivel = "Platina";

    else if (xp <= 9000) 
        nivel = "Ascendente";

    else if (xp <= 10000) 
        nivel = "Imortal";

    else nivel = "Radiante";

    console.log(`O Herói de nome ${herois[contador].nome} está no nível de ${nivel}`);
}