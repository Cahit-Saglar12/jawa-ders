//Faktiriyel nemdir.
// kendisi ve kendisinden öncekı tam sayıların carpımıdır.
// Örnek  5 in faktorıyeli 5.4.3.2.1=120

let sayi = Number(prompt('Bir sayı giriniz.'))
let carpim =1;

for (let i =1; i<= sayi ; i++){
    carpim = carpim*i ;
}
alert('Sonuc :' + carpim);