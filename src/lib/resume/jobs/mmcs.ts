import type { Project } from '#lib';
import { Technology } from '#lib';
import type { Epoch } from '#lib';
import { MMCS } from '../education';
// botctl
import configImage from './botctl/config.png';
import reportImage from './botctl/report.png';
import reportImageWithGame from './botctl/report_with_moves.png';
import runImage from './botctl/run.png';
// tester
import testerRun from './tester/run.png';
import testerReport from './tester/report.png';

import mlLab1 from './ml-labs/manipulator_demo_512.gif';
import mlLab2 from './ml-labs/agent_button.gif';
import mlLab3 from './ml-labs/env_demo.png';
import mlLab4 from './ml-labs/env_demo (1).png';

const teacherProjects: Project[] = [
	{
		name: 'botctl',
		stack: [Technology.Go, Technology.GitHubCI, Technology.CLI],
		description:
			'CLI утилита для проведения соревнований между ботами в рамках курса CS253. Интеллектуальные системы. Вызывает конкурентно бинари студентов и выдаёт таблицу с результатами соревнований и их логами.',
		repo: 'https://github.com/RobolabGs2/botctl',
		images: [
			{
				url: runImage,
				description: 'Пример запуска команды tournament.'
			},
			{
				url: configImage,
				description: 'Пример конфигурации.'
			},
			{
				url: reportImage,
				description: 'Пример отчёта.'
			},
			{
				url: reportImageWithGame,
				description: 'Пример отчёта с ходами.'
			}
		]
	},
	{
		name: 'tester',
		stack: [Technology.Go, Technology.GitHubCI, Technology.CLI],
		description: 'CLI утилита для тестирования заданий с Codingame с отрисовкой в svg.',
		repo: 'https://github.com/RobolabGs2/tester',
		images: [
			{
				url: testerRun,
				description: 'Примеры запуска.'
			},
			{
				url: testerReport,
				description: 'Пример отчёта.'
			}
		]
	},
	{
		name: 'Набор лабораторных работ с Unity ML-Agents Toolkit',
		stack: [Technology.GameDev, Technology.Unity, Technology.MLAgents],
		description: `Три лабораторных работы на работу с фреймворком Unity ML-Agents Toolkit:
* Обучение манипулятора: [AI_RL_Lab_01](https://github.com/RobolabGs2/AI_RL_Lab_01)
* Обучение агента с сенсорами: [AI_RL_Lab_02](https://github.com/RobolabGs2/AI_RL_Lab_02)
* Self-playing: [AI_RL_Lab_03](https://github.com/RobolabGs2/AI_RL_Lab_03)`,
		images: [
			{
				url: mlLab1,
				description: "Первая лабораторная."
			},
			{
				url: mlLab2,
				description: "Вторая лабораторная."
			},
			{
				url: mlLab3,
				description: "Вторая лабораторная."
			},
			{
				url: mlLab4,
				description: "Третья лабораторная."
			}

		]
	}
];

export default {
	place: MMCS,
	status: 'Преподаватель',
	start: new Date('2021-09-01'),
	end: new Date('2026-09-01'),
	comment: `Вел практические занятия, создавал и улучшал лабораторные работы для курсов:
- Алгоритмы и структуры данных, ФИИТ 2 курс.
- Интеллектуальные системы, ФИИТ 4 курс.

Читал лекции и вёл практические занятия, составил структуру курса, лекции и лабораторные работы для курса Искусственный интеллект, 2 года магистратуры "Разработка компьютерных игр и мобильных приложений". Данный курс имел обзорную структуру. Первую итерацию это были рекомендательные системы (классический + нейросетевой подходы) + глубокое обучение с подкреплением в играх, во вторую добавили компьютерное зрение и убрали классическое машинное обучение, в третьей итерации полностью переключил курс на LLM.

Руководил курсовыми и выпускными работами: 5 бакалавров и 1 магистр успешно защитились.

Летние курсы:
- SummerGameDev 2022 — основы разработки игр на Unity.
- GameWave 2024 — основы разработки игр на Godot 4.`,
	projects: teacherProjects
} satisfies Epoch;
