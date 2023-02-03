// mukemmel sayı Uygulaması

// 6  -  28    496
//  ---> bır sayıyı tam bolenlerını bulmak ıcın yarısı ve daha kucuk sayılar ele alınır.
// 6 = 1,2,3,6 = 12      12 = 6*2
//bır sayıyı tam bolen sayıların toplamını alıyoruz 
//toplam sayı orjınal sayının ıkı katına esıt ıse buna Mukemmel sayı denır.

/**/
/*isPerfectNumber(6);

function isPerfectNumber(number){
    let toplam = 0;
    for(let i=2 ; i<=number/2 ; i++){
        if(number%i==0){
            toplam+=i;
        }
    }
    toplam+=1+number;

    if(toplam==number*2){
        console.log('Mukemmel sayıdır...');
    }else{
        console.log('Mukemmel sayı degıldır..');
    }
}*/