// this.textContent= 'Enes'
// document.querySelectorAll('.card-title')[1].textContent='Todo Başlığını Değiştir...'

//clearButton.addEventListener("click",changeTitle)  

function changeTitle(){
    document.querySelectorAll('.card-title')[1].textContent="Todo Başlığını Değiştir...";
    //console.log("Başlık Değişti");
}


//addEventListener()
const clearButton = document.querySelector("#todoClearButton");

clearButton.addEventListener("click",function(){
    document.querySelectorAll('.card-title')[1].textContent="Todo Başlığını Değiştir...";
    //alert("Merhaba");
})

/* clearButton.addEventListener("click",changeTitle)
function changeTitle(e){
    console.log(e);   
    
    e.type yazdıgında clınk event i yaptın der.
    e.target yazdıgında clınk event in calıstıgı HTML elementi verir.
    e.target.textConten yazdıgında clınk event in calıstıgı HTML elementinin TextContentini verir. 
    console.log(e.target.className);          
}*/ 