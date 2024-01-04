var codes = {
  "6\n": "Польща",
  "38\n": "Україна",
  "1\n": "США"
};

var arr = Object.entries(codes).map(([key, value]) => [key.replace(/\n/g, ''), value]);

arr.forEach(([key, value]) => console.log(`${key} : ${value}`));