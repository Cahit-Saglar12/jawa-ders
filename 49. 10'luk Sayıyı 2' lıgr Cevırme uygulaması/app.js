// Decımal To Bınary Conversıon

// Decımal= Onluk sayma sıstemıne denır
// Bınary = Ikılık sayı sıstemı (0 ve 1 den olusan sayma sıstemı).


//  10  5  2  0
//  0   1  0  1  =>1010


convertDecımalToBınary(25);


function convertDecımalToBınary(number){
    let bınary ='';
    while(true){
        bınary+=(number%2).toString();
        //number=number/2; bolum tam sayı olmalı
        number=Math.floor(number/2);
        if(number==1){
            //Artık bolmeye gerek yo donguden cıkacagız.
            bınary+=1;
            break;
        }
    }
    let result = reverse(bınary);
    console.log('Sonuc :' + result);
}


function reverse(bınary){
    let reverseBınary = '';
    for(let i = bınary.length-1; i>=0 ; İ--){
        reverseBınary+=bınary.charAt(i);
    }
    return reverseBınary;
}