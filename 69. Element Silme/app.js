//Element Silmek

const todoList = document.querySelector(".list-group");
const todos = document.querySelectorAll(".list-group-item"); // tüm todo ları getir
// const todo1 = document.querySelector(".list-group-item");  // ilk cocugu yakalama

console.log(todos);
 todos.remove();  // silme işlemini yapar.
// todos[1].remove();
// console.log(todos);

// todos[todos.length-1].remove();  // Todo nun sonundan sil.

// todo1.remove();  // secilen Todo 1 i silmek icn.

//----------------------------------------------
// todoList.removeChild(todos[todos.length-1]); //  İndex numarası yerine cocuk (Node) ismi ile cagırıp silinebilir.
// todoList.removeChild(todos[0]);  // silme işleminde yolu uzatmaktadır.