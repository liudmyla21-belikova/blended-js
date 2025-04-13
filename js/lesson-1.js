// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

// const number = prompt("Введіть число");
// if (Number(number) === 10) {
//   alert("Вірно");
// } else {
//   alert("Невірно");
// }

// console.log("number", number);

// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// function checkNumber() {
//   const min = Number(prompt("Введіть число від 0 до 59"));
//   let i;

//   if (min >= 0 && min <= 14) {
//     i = "першу чверть";
//   } else if (min >= 15 && min <= 29) {
//     i = "другу чверть";
//   } else if (min >= 30 && min <= 44) {
//     i = "третю чверть";
//   } else if (min >= 45 && min <= 59) {
//     i = "четверту чверть";
//   } else {
//     alert("Введіть число від 0 до 59");
//     return; // зупиняємо виконання функції
//   }

//   alert(`${min} входить в ${i}`);
// }

// checkNumber();

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = prompt("Введіть значення від 1 до 4");
// let result;

// switch (num) {
//   case "1":
//     result = "зима";
//     break;
//   case "2":
//     result = "весна";
//     break;
//   case "3":
//     result = "літо";
//     break;
//   case "4":
//     result = "осінь";
//     break;
//   default:
//     result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//     break;
// }
// console.log(result);
// alert(result);

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// function formatTimeFromMinutes(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const remainingMinutes = minutes % 60;

//   const formattedHours = String(hours).padStart(2, "0");
//   const formattedMinutes = String(remainingMinutes).padStart(2, "0");

//   return `${formattedHours}:${formattedMinutes}`;
// }

// const checkTime = prompt("Введіть кількість хвилин:");
// const result = formatTimeFromMinutes(Number(checkTime));

// console.log(result);
// alert(result);

// function checkMin() {
//   let min = Number(prompt("Введіть кількість хвилин"));
//   const hours = Math.floor(min / 60);
//   min %= 60;

//   console.log(
//     `${hours.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
//   );
// }

// checkMin();

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let i = max; i >= min; i--) {
//     console.log(i);
//     if (i % 2 === 0) {
//       sum += 1;
//     }
//   }
//   return sum;
// }

// console.log(getNumbers(3, 123));

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Not a number!";
//   }
//   return a > b ? b : a;
// }

// console.log(min(64, 46));
// console.log(min("lalala", 5));
