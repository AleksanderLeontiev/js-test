// 1.Запросите у пользователя дату в формате
// ДД.ММ.ГГГГ. Напишите программу, выводящую день
// недели по введённой дате.
export function getWeekDay() {
	const days = [
		"Воскресенье",
		"Понедельник",
		"Вторник",
		"Среда",
		"Четверг",
		"Пятница",
		"Суббота",
	];
	const input = +prompt("DD.ММ.YYYY");
	const d = new Date(input);
	const n = d.getDay();
	return days[n];
}
// function getDateAgo(date, days) {
//     let dateAgo = new Date ();
//     dateAgo.setTime(date - 1000 * 60 * 60 * 24 * days);
//     return dateAgo.toDateString();
// }
// console.log(getDateAgo(2020))
// 2.Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего
// дня.
//
export function getMinutesToday() {
	const d = new Date();
	return d.getHours() * 60 + d.getMinutes();
}
getMinutesToday();
// // 3.*В двух переменных хранятся даты рождения двух
// // пользователей в формате ДД.ММ.ГГГГ. Написать
// // программу, которая определяет более молодого
// // пользователя.
export function young() {
	const d = new Date(2000, 0, 25);
	const d2 = d.getFullYear();
	const j = new Date(1990, 1, 25);
	const j2 = j.getFullYear();
	const p = new Date(2020, 11, 30);
	const p2 = p.getFullYear();
	const a = p2 - d2 < p2 - j2 ? `самый молодой:${d2}` : j2;
	return a;
}
