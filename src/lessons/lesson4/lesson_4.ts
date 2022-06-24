console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


//task js2

setTimeout(() => console.log(1), 0);
console.log(2);
(() => console.log(3))();
Promise.resolve(console.log(4));

//task js2

new Promise((resolve, reject) => { console.log(1) });
new Promise((resolve, reject) => {
    setTimeout(() => console.log(2), 0);
});
Promise.resolve(setTimeout(() => console.log(3), 0));
console.log(4);
Promise.reject(() => console.log(5));

//task js2

async function sleep(ms: number) {
    return new Promise((res, rej) => {
      setTimeout(() => {
      console.log(ms);
      res("");
      }, ms * 100);
    });
  }
  
  async function show() {
      await sleep(3);
      await sleep(2);
      await sleep(1);
  }
  show();

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const promise01 = new Promise((res, rej) => {
  console.log("Promise is created");
  res("");
});

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const promise2 = new Promise((res, rej) => {
  res("Promise Data");
});

promise2.then(console.log);

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const promise3 = new Promise((res, rej) => {
  rej("Promise Error");
});

promise3.then(console.log);


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const promise4 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise Data");
  }, 3000);
});

promise4.then(console.log);

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const promise6 = new Promise<string>((res, rej) => {
  setTimeout(() => {
    res("My name is");
  }, 1000);
});

const onSucces6 = (text: string) => {
  return text + " " + "Alex"
}
const print = (text: string) => {
  console.log(text);
}

promise6.then(onSucces6).then(print);

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

type NameType = {
  name: string
}
type AgeType = {
  age: number
}
type CityType = {
  city: string
}

async function nameUser() {
  return new Promise<NameType>((res, rej) => {
    res({name: "Ann"});
  });
}

async function ageUser() {
  return new Promise<AgeType >((res, rej) => {
    res({age: 22});
  });
}

async function cityUser() {
  return new Promise<CityType>((res, rej) => {
    res({city: "Moscow"});
  });
}

async function userInfo() {
  let {name} = await nameUser();
  let {age} = await ageUser();
  let {city} = await cityUser();
  console.log(`name: ${name}, age: ${age}, city: ${city}`);
}

userInfo();


// just a plug
export default ()=>{};