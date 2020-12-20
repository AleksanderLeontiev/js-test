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

export function getMinutesToday() {
	const d = new Date();
	return d.getHours() * 60 + d.getMinutes();
}
getMinutesToday();

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
