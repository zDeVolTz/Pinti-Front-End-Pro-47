 codes = {
  "+6": "Польща",
  "+38": "Україна",
  "+1": "США"
};

let arr = Object.entries(codes).map(([key, value]) => [key.replace(/\+/g, ''), value]);

arr.forEach(([key, value]) => console.log(`${key} : ${value}`));


//Такой метод тоже работает добавление проебела перед ключем но всеравно как то грустно то что у меня получается , 
// не понимю как не лезть в исходный обьект к ключам 
codes2 = {
  " 6": "Польща",
  " 38": "Україна",
  " 1": "США"
};

let arr2 = Object.entries(codes2).map(([key, value]) => [key.replace(" ", ''), value]);

arr2.forEach(([key, value]) => console.log(`${key} : ${value}`));
