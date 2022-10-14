/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

const container = document.querySelector('.container');
const limit = 100;
const fizz = 'Fizz'
const buzz = 'Buzz'
const fizzBuzz = 'Fizz-Buzz'
//STAMPA DEI NUMERI FINO A 100
for (let i = 1; i <= limit; i++){
    //console.log(i);
    //creazione box
    const box = document.createElement('div');
    //aggiunta classe
    box.className ='box';
    //scrivo nel box
    box.innerHTML = i;
    //aggiunta al container
    container.append(box);

    //creazione condizione if/else per stampare fizz
    if(i % 15 === 0){
        box.classList.add('light-pink');
        box.innerHTML = fizzBuzz;
    }
    else if(i % 3 === 0){
        box.innerHTML = fizz;
        box.classList.add('ligh-blue');
    }else if(i % 5 === 0){
        box.innerHTML = buzz;
        box.classList.add('cr-gray');
    }else{
        box.classList.add('d-blue');
        box.innerHTML = i;
    }
}