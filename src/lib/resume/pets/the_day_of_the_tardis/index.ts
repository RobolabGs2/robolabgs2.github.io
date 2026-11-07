import { Technology, type Project } from '#lib';
import particlesImage from './particles.png';
import outsideImage from './outside.png';
import inside1Image from './inside1.png';
import inside2Image from './inside2.png';
import inside3Image from './inside3.png';
export default {
	name: 'День ТАРДИС — игра на геймджем от Inside the TARDIS',
	stack: [Technology.GameDev, Technology.Godot],
	description: `Экшен-головоломка от первого лица. С помощью порталов и бега между прошлым и настоящим нужно ликвидировать противников их же выстрелами.
* Типичное время первого прохождения: 1 час, время спидрана: 2 минуты.
* Реализовал большую часть кодовой базы: контроллер игрока, ИИ противников, систему диалогов, систему уровней.
* После геймджема оптимизировал загрузку шейдеров (выделил в отдельный аддон), внедрил поддержку геймпада.`,
	link: 'https://kettle-studio.itch.io/the-day-of-the-tardis',
	repo: 'https://github.com/kettle-game-studio/the-day-of-the-TARDIS',
	images: [
		{
			url: particlesImage,
			description: 'Убийство противника.'
		},
		{
			url: outsideImage,
			description: 'Больше внутри, чем снаружи.'
		},
		{
			url: inside1Image,
			description: 'Геймплей.'
		},
		{
			url: inside2Image,
			description: 'Противник.'
		},
		{
			url: inside3Image,
			description: 'Два противника.'
		}
	]
} satisfies Project;
