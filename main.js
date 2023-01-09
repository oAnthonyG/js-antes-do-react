//document.body.innerHTML = 'hello friend!'

//Object

const user1 = {
    name1: 'anthony',
    idade: 24,
    address: {
        street: 'Rua teste',
        number: 123,
    },
};

// Destruturação

const { address, idade: age1, nickname = 'Guilherme' } = user1

function mostraIdade({ idade }) {
    return idade
}

// Rest operator

/*const { name1, ...rest } = user1;*/


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, , third, ...rest] = array


// Short Syntax

const name2 = 'Anthony';
const age2 = 24;

const user = {
    name2,
    age2
};

// Optional Chaining

const user2 = {
    name: 'Anthony',
    age: 24,
    address: {
        street: 'Rua teste',
        number: 176,
        zip: {
            code: '12345678',
            city: 'são paolo'
        }
    },
};

document.body.innerHTML= user2.address?.zip?.code ?? 'não informado'