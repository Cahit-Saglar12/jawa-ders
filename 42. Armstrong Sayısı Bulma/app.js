// 153 - 370 407 sayısı Armstrong

/// Sayının tüm rakamlarının toplamı sayının kendisini veriyorsa o sayıya Armstrong sayısı denır.
//// bir  örnek ıle uygulayalım 1 5 3 sayısı 1*1*1 + 5*5*5 + 3*3*3
/////                           0 1 2           1  +  125  +  27  = 153



let sayi = prompt('Sayı giriniz.');
let toplam =0

for(let i= 0; i<sayi.length; i++){
    let rakam = sayi.charAt(i)
    toplam+=rakam*rakam*rakam;
}
if(Number(sayi)==toplam){
    alert('Armstrong sayısıdır :)');
}else{
    alert('Armstron sayısı degıldır');
}