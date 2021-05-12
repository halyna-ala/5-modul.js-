// Проверка спама
// Задание
// Функция checkForSpam(message) принимает строку (параметр message), проверяет 

// её на содержание запрещенных слов spam и sale, и возвращает результат проверки. 
// Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// Если в строке нет запрещенных слов, функция возвращает буль false.

// Тесты
// Объявлена функция checkForSpam(message).
// Вызов функции checkForSpam('Latest technology news') возвращает false.
// Вызов функции checkForSpam('JavaScript weekly newsletter')возвращает false.
// Вызов функции checkForSpam('Get best sale offers now!') возвращает true.
// Вызов функции checkForSpam('Amazing SalE, only tonight!') возвращает true.
// Вызов функции checkForSpam('Trust me, this is not a spam message') возвращает true.
// Вызов функции checkForSpam('Get rid of sPaM emails. Our book in on sale!') возвращает true.
// Вызов функции checkForSpam('[SPAM] How to earn fast money?') возвращает true.

// 1.// const regulars = message.toLowerCase();
// result = regulars.includes('spam') || regulars.includes('sale');



// 2.// result = regulars.includes('spam') || regulars.includes('sale');


// 3.// message = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//     result = message;



if (message.toLowerCase().includes('spam', 'sale')) {
    result = message;
} else {
result = message;
}




// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//   if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
//     result = true || false;
// } else if (message.toLowerCase()){
// result = true || false;
// } else {
// result = true || false;}

// //!!! if (message.toLowerCase().includes('spam')) {
// //   result = true || false;
// // } else if (message.toLowerCase().includes('sale')){
// // result = true || false;
// // } else {
// // result = true || false;}
//   // Пиши код выше этой строки
//   return result;
// }


function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  if (message.toLowerCase().includes('spam')) {
    return true;
} else if (message.toLowerCase().includes('sale')){
return true;
} else {
return false;}
  // Пиши код выше этой строки
  return result;
}



// (internet)const checkForSpam = function (str) { let arrStr = str.split(' ');

//  for (let i = 0; i < arrStr.length; i += 1) { let word = arrStr[i].toLowerCase;
//  if (arrStr[i].toLowerCase === 'spam' || arrStr[i].toLowerCase === 'sale') {

//   return true;

// }
// return false;
// }
