// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz” al post del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
// 1-dichiare una variabile n
const n = 100
// 2-dichiaro una variabile i
for (let i = 0; i < n; i++) {
    let num = i + 1;
    //SE è un multiplo di 15 , stamperà FizzBuzz
    if ((num % 3 === 0) && (num % 5 === 0)) {
        console.log("fizzbuzz");
    }
    //ALTRIMENTI SE è un multimo di 3 stamperà Fizz
    else if (num % 3 === 0) {
        console.log("fizz");
    }
    //ALTRIMENTI SE è un multimo di 5 stamperà Buzz
    else if (num % 5 === 0) {
        console.log("buzz");
    }
    //ALTRIMENTI stamperà il nunero
    else {
        console.log(num)

    }
}
