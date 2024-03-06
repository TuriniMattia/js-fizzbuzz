// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz” al post del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
// 1-dichiare una variabile n
    let n = 100
// 2-dichiaro una variabile i
    for (let i = 0; i < n; i++){
        let num = i + 1;
        console.log(num)
    }
//SE è un multiplo di 15 , stamperà FizzBuzz
//ALTRIMENTI SE è un multimo di 3 stamperà Buzz
//ALTRIMENTI SE è un multimo di 5 stamperà Fizz
//ALTRIMENTI stamperà il nunero