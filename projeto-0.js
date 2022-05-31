const prompt = require('prompt-sync')();
console.clear();
console.log();

let resp = 0;

console.log(`BEM VINDO AO MEU PRIMEIRO PROJETO DA BLUE: DETETIVE!`);
console.log();

console.log(
    'Para melhor desenvolvimento do projeto, todas as perguntas devem ser respondidas apenas com "sim" ou "nao"!',
);
console.log();

console.log('Pressione ENTER para continuar.');
let cont = prompt();
console.clear();
console.log();

console.log(`Um assassinato aconteceu e você foi apontado como principal suspeito.
Você está em uma sala de interrogatório e eu irei te fazer algumas perguntas.`);
console.log();

let nome = prompt('Mas antes de começar, como é seu nome? ');
console.log();

console.log(`${nome}... 
Nome de assassino...

Enfim! Vamos para o interrogatório, ${nome}.`);
console.log();

console.log('Pressione ENTER para continuar.');
cont = prompt();
console.clear();
console.log();

console.log(
    `${nome}, uma testemunha no local diz ter avistado uma pessoa de casaco vermelho passando minutos depois, proximo ao local do crime.`,
);
console.log();

let pergunta1 = prompt(`Você possui um casaco assim? `).toLowerCase();
console.log();

if (pergunta1 == 'sim') {
    console.log(`Hmpf... Como imaginei.`);
    resp++;
} else if (pergunta1 == 'nao') {
    console.log(`Muito bem! Se safou dessa.`);
} else {
    console.log(
        'Resposta incorreta! Para o resultado final não ser divergente, reinicie o programa.',
    );
}
console.log();

console.log('Pressione ENTER para continuar.');
cont = prompt();
console.clear();
console.log();

console.log(
    `Analisamos algumas pegada proximas ao local do crime e concluímos que o assassino calça 38.`,
);
console.log();

let pergunta2 = prompt(`Você calça 38, Sr.${nome}? `).toLowerCase();
console.log();

if (pergunta2 == 'sim') {
    console.log(`Não poderia ser diferente, não é mesmo?`);
    resp++;
} else if (pergunta2 == 'nao') {
    console.log(`Duvido que não...`);
} else {
    console.log(
        'Resposta incorreta! Para o resultado final não ser divergente, reinicie o programa.',
    );
}
console.log();

console.log('Pressione ENTER para continuar.');
cont = prompt();
console.clear();
console.log();

console.log(`Foram encontradas vestígios de pólvora na sua roupa.`);
console.log();

let pergunta3 = prompt(
    `Até onde eu sei você não praticou estande de tiros nesse dia, correto? `,
).toLowerCase();
console.log();

if (pergunta3 == 'sim') {
    console.log(`Eu sempre estou certo! `);
    resp++;
} else if (pergunta3 == 'nao') {
    console.log(`Agora vai querer dizer que investiguei mal...`);
} else {
    console.log(
        'Resposta incorreta! Para o resultado final não ser divergente, reinicie o programa.',
    );
}
console.log();

console.log('Pressione ENTER para continuar.');
cont = prompt();
console.clear();
console.log();

console.log(
    'Falando em tiro, verificamos que você tem porte de arma que por coincidência é o mesmo modelo de arma usada no crime.',
);
console.log();

let pergunta4 = prompt(`Você estava com sua arma nesse dia? `).toLowerCase();
console.log();

if (pergunta4 == 'sim') {
    console.log(
        `Muito conveniente para quem planejava assassinar alguém, não é?`,
    );
    resp++;
} else if (pergunta4 == 'nao') {
    console.log(`Hmm...`);
} else {
    console.log(
        'Resposta incorreta! Para o resultado final não ser divergente, reinicie o programa.',
    );
}
console.log();

console.log('Pressione ENTER para continuar.');
cont = prompt();
console.clear();
console.log();

console.log('A última coisa que quero saber...');
console.log();

let pergunta5 = prompt(`Você conhecia a vítima? `).toLowerCase();
console.log();

if (pergunta5 == 'sim') {
    console.log(
        `Intrigante! Fico pensando se você não teria alguma desavença com essa pessoa.`,
    );
    resp++;
} else if (pergunta5 == 'nao') {
    console.log(`Isso é o que você diz, né.`);
} else {
    console.log(
        'Resposta incorreta! Para o resultado final não ser divergente, reinicie o programa.',
    );
}
console.log();

console.log('Pressione ENTER para continuar.');
cont = prompt();
console.clear();
console.log();

console.log(`Muito bem, Sr.${nome}.

Analisando as informaçôes que nos passou, aliado às nossas investigações, chegamos a uma conclusão:
`);

if (resp <= 2) {
    console.log(
        `Você é inocente. As investigações sobre você estão encerradas!`,
    );
} else if (resp == 3) {
    console.log(
        `Não posso te declarar culpado, mas você continua sob investigação.`,
    );
} else if (resp >= 4) {
    console.log(`Você está preso pelo crime de homicídio!`);
}
console.log();
