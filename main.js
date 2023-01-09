//document.body.innerHTML = 'hello friend!'

//Object

/*const user = {
    name: 'anthony',
    idade: 24,
    address: {
        street: 'Rua teste',
        number: 123,
    },
};*/

// Destruturação

//const { address, idade: age, nickname = 'Guilherme' } = user

/*function mostraIdade({ idade }) {
    return idade
}*/

// Rest operator

//const { name, ...rest } = user;
/*
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, , third, ...rest] = array
*/




document.body.innerHTML = JSON.stringify({ first, third, rest })