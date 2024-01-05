 const codes = {
  "+6": "Польща",
  "+38": "Україна",
  "+1": "США"
};

let arr = Object.entries(codes).map(([key, value]) => [key.replace(/\+/g, ''), value]);

arr.forEach(([key, value]) => console.log(`${key} : ${value}`));


//Такой метод тоже работает добавление проебела перед ключем но всеравно как то грустно то что у меня получается , 
// не понимю как не лезть в исходный обьект к ключам 
 const codes2 = {
  " 6": "Польща",
  " 38": "Україна",
  " 1": "США"
};

let arr2 = Object.entries(codes2).map(([key, value]) => [key.replace(" ", ''), value]);
arr2.forEach(([key, value]) => console.log(`${key} : ${value}`));



const codes3 = {
  "6": "Польща",
  "38": "Україна",
  "1": "США"
}

//Третий способ от людей якобы можно получить от сервера только массив ключей вместе с обьектом и тогда просто сделать нечто подобное
const arrKey = ["6","38","1"];

arrKey.forEach(key => console.log(`${key} : ${codes3[key]}`));