// Asal Sayı Bulma
// kullanıcıdan bır sayı ıstıyoruz ve bu sayının asal olup olmadıgına bakacaz.
// Asal sayı 1 e ve kendısınden baska bolenı olmayan sayılara asaı-l sayılar dıyoruz.
/*
 13 sayısı  = 2, 3, 4, 5, 6, ...
bir sayıyı kendısının yarısı olan bır sayıya 
kadar bolunebıldıgıne bakmamız yeterlıdır. 
Bu durumu tek sayılar ıcın dusundugumuzde ıse
(15/2= 7,5  ==> 7 ye kadar) yarısından az olan tam sayıya bolmemız yeterlı olur.*/

// let a = Math.floor; en yakın kucuge yuvarlar

//15
let sayı = Number(prompt('Lutfen bır sayı gırınız:'));
let sonuc=true;

for(let i=2; i<= Math.floor(sayı/2) ; i++){
    if(sayı%i==0){
        //Asal degıldır
        sonuc=false;
        break;
    }
}

if(sonuc){
    alert(sayı +' asaldır.');
}else{alert(sayı+' asal degıldır!');
}