// Пользователь вводит текстовую строку. Определить с
// помощью регулярного выражения, является ли
// введённая строка:
// 1.Датой.
// 2.Адресом электронной почты.
// 3.*Номером телефона.


export function validateEmail(){
    const promptEmail = prompt("enter");
    let reg = /\S+@\S+\.\S+/;
    return  reg.test(`${promptEmail}`);

}


export function validatePhone(){
    const promptPhone = prompt();
    let reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return reg.test(`${promptPhone}`);
}



export function validateDate(){
const promptDate = prompt("Введите дату : дд / мм / гггг");
    let reg = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    return reg.test(`${promptDate}`);
}


