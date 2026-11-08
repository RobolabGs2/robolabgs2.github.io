import { Technology, type Epoch, type Place, type Project } from '#lib';
import memaker from './memaker';

export const MMCS: Place = {
	full: 'Южный Федеральный Университет. Институт механики, математики и компьютерных наук им. И.И. Воровича',
	short: 'ИММиКН ЮФУ'
};

import oddvarPretty from './oddvar/pretty.png';
import oddvarSimple from './oddvar/simple.png';
const bachelorsProjects: Project[] = [
	{
		name: 'ВКР: Oddvar — 2D симулятор а-ля игровой движок',
		stack: [Technology.Frontend, Technology.Typescript, Technology.GitHubCI, Technology.Webpack, Technology.GameDev],
		description: 'Фреймворк для симуляций и набор симуляций, созданные в рамках ВКР с использованием Canvas API.',
		repo: 'https://github.com/RobolabGs2/oddvar',
		link: 'https://robolabgs2.github.io/oddvar/',
		images: [
			{
				url: oddvarPretty,
				description: 'Пример окружения.',
			},
			{
				url: oddvarSimple,
				description: 'Пример окружения.',
			},
		]
	}
];

import particlesFire from './labs/particles/fire.png';
import particlesBengal from './labs/particles/bengal.png';
import particlesFireworks from './labs/particles/fireworks.png';
import shadows from './labs/shadows.png';
import tetrisLvl6 from './labs/tetris/lvl6.png';
import tetrisControls from './labs/tetris/controls.png';
import tetrisGameOver from './labs/tetris/game_over.png';
import auroraCombat from './labs/aurora/combat.png';
import auroraMap1 from './labs/aurora/map1.png';
import auroraMap2 from './labs/aurora/map2.png';
const mastersProjects: Project[] = [
	memaker,
	{
		name: 'Система частиц на WebGL',
		stack: [Technology.CG, Technology.Typescript, Technology.WebGL, Technology.Parcel, Technology.GameDev, Technology.Frontend],
		description: 'Простая система частиц: фейрверки, огонь с дымом на голом WebGL.',
		repo: 'https://github.com/RobolabGs2/particles-lab',
		link: 'https://robolabgs2.github.io/particles-lab/',
		images: [
			{
				url: particlesFire,
				description: 'Пример частиц: огонь с дымом'
			},
			{
				url: particlesBengal,
				description: 'Пример частиц: бенгальский огонь'
			},
			{
				url: particlesFireworks,
				description: 'Пример частиц: фейерверк'
			}
		]
	},
	{
		name: 'Тени на WebGL',
		stack: [Technology.CG, Technology.Typescript, Technology.WebGL, Technology.Parcel, Technology.GameDev, Technology.Frontend],
		description: 'С нуля написанный рендер 3D сцены с базовым освещением и тенями.',
		repo: 'https://github.com/RobolabGs2/shadows-webgl2',
		link: 'https://robolabgs2.github.io/shadows-webgl2/',
		images: [
			{
				url: shadows,
				description: 'Пример сцены.'
			}
		]
	},
	{
		name: 'Тетрис',
		stack: [Technology.GameDev, Technology.Typescript, Technology.Parcel, Technology.Frontend],
		description: 'Тетрис с прогрессией и постепенным уменьшением освещения.',
		repo: 'https://github.com/mmcs-gd/tetris-RobolabGs2',
		link: 'https://mmcs-gd.github.io/tetris-RobolabGs2/',
		images: [
			{
				url: tetrisLvl6,
				description: 'Пример 6 уровня с затенением.'
			},
			{
				url: tetrisControls,
				description: 'Управление.'
			},
			{
				url: tetrisGameOver,
				description: 'Конец игры.'
			},
		]
	},
	{
		name: 'Прототип игры с процедурной генерацией карты',
		stack: [Technology.GameDev, Technology.Typescript, Technology.Phaser3, Technology.Parcel, Technology.Frontend],
		description:
			'Прототип игры с процедурной генерацией карты с использованием графов и клеточных автоматов',
		repo: 'https://github.com/RobolabGs2/aurora-housekeeper',
		link: 'http://robolabgs2.github.io/aurora-housekeeper/',
		images: [
			{
				url: auroraCombat,
				description: 'Пример боя.',
			},
			{
				url: auroraMap1,
				description: 'Пример сегенерированной карты.',
			},
			{
				url: auroraMap2,
				description: 'Пример сегенерированной карты.',
			},
		]
	}
];

export default [
	{
		place: MMCS,
		status: 'Бакалавриат ФИИТ',
		start: new Date('2017-09-01'),
		end: new Date('2021-07-01'),
		projects: bachelorsProjects
	},
	{
		place: MMCS,
		status: 'Магистратура ФИИТ "Разработка компьютерных игр и мобильных приложений"',
		start: new Date('2021-09-01'),
		end: new Date('2023-07-01'),
		comment: `Выбранный трек: разработка компьютерных игр.\nДиплом с отличием`,
		projects: mastersProjects
	},
	{
		place: MMCS,
		status: 'Аспирантура 2.3.5 "Математические проблемы разработки программного обеспечения"',
		start: new Date('2023-10-01'),
		projects: []
	}
] satisfies Epoch[];
