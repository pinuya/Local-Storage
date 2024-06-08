localStorage.setItem("string", "value");
localStorage.setItem("object", JSON.stringify({ key: "value" }));

console.log(localStorage.getItem("string"));

// quando um objeto e armazenado no LocalStorage precisa ser string, e para remover precisa ser um parse
const parsedValue = JSON.parse(localStorage.getItem("object"));
console.log(parsedValue);

console.log(localStorage.getItem("object"));
