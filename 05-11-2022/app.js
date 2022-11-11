// let age = '';
// const gender = 'МУЖ' // жен

// age = +age

// if (!isNaN(+age)) {
//     if (age > 18) {
//         console.log('Вам больше 18 лет');
//     } else if (age < 18){
//         console.log('Вам меньше 18 лет');
//     } else if (age === 18){
//         console.log('Вам 18 лет!');
//     } else {
//         console.log('Укажите Ваш возраст!');
//     }
    
// } else {
//     console.log('Введите корректные данные!')
// }

// if (gender.toLocaleLowerCase() === "муж") {
//     console.log('Вам налево!');
// }

// if (gender.toLocaleLowerCase()=== "жен") {
//     console.log('Вам направо!');
// }

// const isAdmin = true;

// console.log("Добро пожаловать: ${ isAdmin ? "Admin" : "User"}");

// const typeUser = ''; // user, guest, bot

// switch (typeUser) {
//     case 'admin' :
//         console.log('You are admin');
//         break;
//     case 'user' :
//         console.log('You are user');
//         break;
//     case 'guest' :
//         console.log('You are guest');
//         break;
//     case 'bot' :
//         console.log('You are bot!');
//         break;
//     default:
//         console.log('type of user undefined');
//         break;               
// }

// вывести на экран числа от 1 до 10 через запятую
let i = 0;
const lastNumber = 10;
let message = '';

while (++i <= lastNumber) {
    
    message += `${i}${i !== lastNumber ? ', ': ''} `;
}
console.log(message);
