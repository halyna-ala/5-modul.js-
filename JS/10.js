// Шаблонные строки 2.0
// Задание
// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. 
// Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка Вы выбрали 
// <имя товара>, цена за штуку <цена товара> кредитов, где <имя товара> и <цена товара> 
// это значения параметров name и price. Используй синтаксис шаблонных строк.

// Внимание
// Обрати внимание на то, что в коде нет вызовов функции makeMessage. С этого задания и 
// дальше мы сами будем вызывать твои функции и проверять то, как они работают. Результат 
// наших проверок ты увидишь в блоке Результаты под редактором кода.

// Тесты
// Объявлена функция makeMessage(name, price).
// Вызов makeMessage('Радар', 6150) возвращает 'Вы выбрали Радар, цена за штуку 6150 кредитов'.
// Вызов makeMessage('Сканер', 3500) возвращает 'Вы выбрали Сканер, цена за штуку 3500 кредитов'.
// Вызов makeMessage('Реактор', 8000) возвращает 'Вы выбрали Реактор, цена за штуку 8000 кредитов'.
// Вызов makeMessage('Двигатель', 4070) возвращает 'Вы выбрали Двигатель, цена за штуку 4070 
// кредитов'.


function makeMessage (name, price) {
    // Пиши код ниже этой строки
    
    const message =`Вы выбрали ${name}, цена за штуку ${price} кредитов`;
    console.log(message);
    // Пиши код выше этой строки
    return message;
};
makeMessage('Радар', 6150);
makeMessage('Сканер', 3500);
makeMessage('Реактор', 8000);
makeMessage('Двигатель', 4070);