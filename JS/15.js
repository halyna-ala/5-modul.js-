class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > Car.MAX_PRICE) {
    return;
    }
    if(newPrice <= Car.MAX_PRICE) {
    this.#price = newPrice;}
   
  }
  // Пиши код выше этой строки
}

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000



// Статические свойства
// Задание
// Выполни рефакторинг класса Car. Добавь публичное статическое свойство
// MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// Добавь сеттеру price проверку передаваемого значения параметра newPrice. 
// Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или 
// равно, то перезаписывает цену автомобиля.

// Тесты
// Объявлен класс Car.
// У класса Car есть статическое свойство MAX_PRICE.
// Значение статического свойства MAX_PRICE это число 50000.
// У экземпляра нет свойства MAX_PRICE.
// В классе Car объявлен геттер price.
// В классе Car объявлен сеттер price.
// У экземпляра класса Car вызов сеттера price, со значением аргумента меньше 
// чем значение MAX_PRICE, изменяет свойство #price.
// У экземпляра класса Car вызов сеттера price, со значением аргумента больше
//  чем значение MAX_PRICE, не изменяет свойство #price.
