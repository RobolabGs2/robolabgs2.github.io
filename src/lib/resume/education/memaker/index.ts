import { Technology, type Project } from '#lib';
import screenshotImage from './screen.png';
import help01Image from './01.png';
import help02Image from './02.png';
import help03Image from './03.png';
import help04Image from './04.png';
import help05Image from './05.png';
import help06Image from './06.png';
import help07Image from './07.png';

export default {
	name: 'ВКР: Мемейкер — онлайн-редактор мемов',
	stack: [
		Technology.Frontend,
		Technology.CG,
		Technology.Typescript,
		Technology.WebGL,
		Technology.SvelteKit,
		Technology.GitHubCI
	],
	description: 'Редактор мемов на основе WebGL и Svelte. Основной целью является удобное размещение текстовых блоков на изображении с автоматическим расчётом размера текста. Поддерживает различные материалы и эффекты.',
	repo: 'https://github.com/RobolabGs2/memaker',
	link: 'https://robolabgs2.github.io/memaker/',
	images: [
		{
			url: screenshotImage,
			description: 'Скриншот приложения.'
		},
		{
			url: help01Image,
			description: 'Документация по основным кнопкам.'
		},
		{
			url: help02Image,
			description: 'Документация по пресетам.'
		},
		{
			url: help03Image,
			description: 'Документация по настройкам текста.'
		},
		{
			url: help04Image,
			description: 'Документация по контейнерам.'
		},
		{
			url: help05Image,
			description: 'Документация по позиционированию блоков.'
		},
		{
			url: help06Image,
			description: 'Документация по эффектам.',
		},
		{
			url: help07Image,
			description: 'Документация по хоткеям.',
		}
	]
} satisfies Project;
