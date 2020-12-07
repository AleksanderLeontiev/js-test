// Создайте объект user, содержащий поле name со
// // значением ‘John’.
const user = {
    name: "John",
};
// 1.Запросить у пользователя ввод числа. Записать
// введенное значение в поле age объекта user.
export function agePrompt() {
    const age = prompt("Enter your age :");
    console.log(`${age}`)
}

// 2.Создать копию объекта user с именем admin.
// Добавить новому объекту поле role со значением
// ‘admin’.
export function roleName() {
    const inputFirstName = prompt("Enter your name :");
    user.role = inputFirstName;
    console.log(`${user.role}`);
}
// *Записать все значения полей объекта admin в
// отдельные переменные. Имена переменных
// должны совпадать с названиями полей.

export function createNewUser() {
    const admin = Object.assign({}, user, {role: "admin"}, {age: 124});
   // user.name = "ALex";
//console.log(user, admin);
    let { role, age, years = null} = admin;
    console.log(role,age,years);
}
//console.log(createNewUser());