'use strict';

function randomNumber (min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const phraseTextElement = document.querySelector('.card__text');
const phraseAuthorElement = document.querySelector('.card__author');
let phraseNumber = randomNumber(1, 10);
let testNumbetRepeat = 0;
showPhrase()
function showPhrase () {
	if (phraseNumber === 1) {
		if (testNumbetRepeat === 1) {
			phraseNumber = randomNumber(1, 10)
			showPhrase()
		} else {
			const phrase = {
				text: 'Жить и сгорать у всех в обычае, Но жизнь тогда лишь обессмертишь, Когда ей к свету и величию Своею жертвой путь прочертишь.',
				author: 'Борис Пастернак',
			}
			phraseTextElement.innerHTML = phrase['text']
			phraseAuthorElement.innerHTML = phrase['author']
			testNumbetRepeat = 1;
		}
	} else if (phraseNumber === 2) {
		if (testNumbetRepeat === 2) {
			phraseNumber = randomNumber(1, 10)
			showPhrase()
		} else {
			const phrase = {
				text: 'Очень малой степени надежды достаточно, чтобы вызвать к жизни любовь. Через два-три дня надежда может исчезнуть; тем не менее любовь уже родилась.',
				author: 'Фредерик Стендаль',
			}
			phraseTextElement.innerHTML = phrase['text']
			phraseAuthorElement.innerHTML = phrase['author']
			testNumbetRepeat = 2;
		}
	} else if (phraseNumber === 3) {
		if (testNumbetRepeat === 3) {
			phraseNumber = randomNumber(1, 10)
			showPhrase()
		} else {
			const phrase = {
				text: 'Волей-неволей человек должен признать, что жизнь его не ограничивается его личностью от рождения и до смерти и что цель, сознаваемая им, есть цель достижимая и что в стремлении к ней — в сознании большей и большей своей греховности и в большем и большем осуществлении всей истины в своей жизни и в жизни мира и состоит и состояло и всегда будет состоять дело его жизни, неотделимой от жизни всего мира.',
				author: 'Лев Толстой',
			}
			phraseTextElement.innerHTML = phrase['text']
			phraseAuthorElement.innerHTML = phrase['author']
			testNumbetRepeat = 3;
		}
	} else if (phraseNumber === 4) {
		if (testNumbetRepeat === 4) {
			phraseNumber = randomNumber(1, 10)
			showPhrase()
		} else {
			const phrase = {
				text: 'Жизнь всегда сопровождается усилиями, лишениями и тяжелым трудом, ведь она не сад с красивыми цветами.',
				author: 'Иван Александрович Гончаров',
			}
			phraseTextElement.innerHTML = phrase['text']
			phraseAuthorElement.innerHTML = phrase['author']
			testNumbetRepeat = 4;
		}
	} else if (phraseNumber === 5) {
		if (testNumbetRepeat === 5) {
			phraseNumber = randomNumber(1, 10)
			showPhrase()
		} else {
			const phrase = {
				text: 'Всё, что происходит однажды, может никогда больше не повториться. Но всё, что происходит дважды, несомненно, произойдёт и в третий раз.',
				author: 'Пауло Коэльо',
			}
			phraseTextElement.innerHTML = phrase['text']
			phraseAuthorElement.innerHTML = phrase['author']
			testNumbetRepeat = 5;
		}
	} else if (phraseNumber === 6) {
		if (testNumbetRepeat === 6) {
			phraseNumber = randomNumber(1, 10)
			showPhrase()
		} else {
			const phrase = {
				text: 'Можно лежать на мосту и смотреть, как течет вода. Или бегать, или бродить по болоту в красных сапожках, или же свернуться клубочком и слушать, как дождь стучит по крыше. Быть счастливой очень легко.',
				author: 'Туве Янссон',
			}
			phraseTextElement.innerHTML = phrase['text']
			phraseAuthorElement.innerHTML = phrase['author']
			testNumbetRepeat = 6;
		}
	} else if (phraseNumber === 7) {
		if (testNumbetRepeat === 7) {
			phraseNumber = randomNumber(1, 10)
			showPhrase()
		} else {
			const phrase = {
				text: 'Душа рождается старой и постепенно молодеет. Это комедийная сторона жизни. Тело же рождается молодым и постепенно стареет. А это сторона трагедийная.',
				author: 'Оскар Уайльд',
			}
			phraseTextElement.innerHTML = phrase['text']
			phraseAuthorElement.innerHTML = phrase['author']
			testNumbetRepeat = 7;
		}
	} else if (phraseNumber === 8) {
		if (testNumbetRepeat === 8) {
			phraseNumber = randomNumber(1, 10)
			showPhrase()
		} else {
			const phrase = {
				text: 'Мужчина ни разу не получивший раны от любви к женщине — это половина мужчины.',
				author: 'Джек Лондон',
			}
			phraseTextElement.innerHTML = phrase['text']
			phraseAuthorElement.innerHTML = phrase['author']
			testNumbetRepeat = 8;
		}
	} else if (phraseNumber === 9) {
		if (testNumbetRepeat === 9) {
			phraseNumber = randomNumber(1, 10)
			showPhrase()
		} else {
			const phrase = {
				text: 'Человек, который видит жизнь в истинном свете, а истолковывает ее романтически, обречен на отчаяние.',
				author: 'Джордж Бернард Шоу',
			}
			phraseTextElement.innerHTML = phrase['text']
			phraseAuthorElement.innerHTML = phrase['author']
			testNumbetRepeat = 9;
		}
	} else if (phraseNumber === 10) {
		if (testNumbetRepeat === 10) {
			phraseNumber = randomNumber(1, 10)
			showPhrase()
		} else {
			const phrase = {
				text: 'Завет писателям: не нужно выдумывать интриги и сюжеты. Пользуйтесь сюжетами, которые предоставляет сама жизнь.',
				author: 'Фёдор Михайлович Достоевский',
			}
			phraseTextElement.innerHTML = phrase['text']
			phraseAuthorElement.innerHTML = phrase['author']
			testNumbetRepeat = 10;
		}
	}
}

