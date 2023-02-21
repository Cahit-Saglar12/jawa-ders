//  Diziler (Array) Giriş


//  [] icin ctrl alt 8 ile ulasabilirsiniz.
// Diziler 0 dan basşayarak ilerler. 
// ArrayIndexOutOFBoundException

//let sayilar = [1,2,3,4,5,,7,8,9];

// console.log( sayilar[4]); //5. indexteki veriyı cagırmak icin.

// Atama islemini ise

// sayılar[10]="Mehmet"; // bu islem bizim icin 9 rakamı yerıne Mehmet yazılmasını saglar.
 
// sayılar[sayılar.length-1]="Mehmet"; //Burada ise dizi uzunlugunun bir eksigi dedigimizde
                                    // dizinin en sonundaki İndexi degistirmis oluyoruz.

// let isimler= ["Enes","Kübra", "Bilal", "Yusuf"];

//isimler[2] ="Yakup"; // Burada 2 indexteki degeri "Yakup ile degistirmis oluyoruz"

// console.log(isimler[5]);

let kurs = "Midern Web Geliştirme Kursu"
let index = kurs.indexOf("i");
console.log(index); // consolda 1 çıktısı alınır