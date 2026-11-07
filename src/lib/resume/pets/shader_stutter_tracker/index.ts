import { Technology, type Project } from '#lib';
import guiImage from './gui.png';
import configImage from './config.png';
import chartsImage from './charts.png';

export default {
	name: 'Shader Stutter Tracker — трекер компиляции шейдеров и прогрев кэша шейдеров для Compatibility пайплайна',
	stack: [Technology.GameDev, Technology.Godot],
	description: `Аддон состоящий из трёх частей:
* Инструменты отладки, отслеживающие новые узлы в сцене и компиляцию шейдеров.
* Предкомпилятор шейдеров.
* Сборщик триггеров компиляции шейдеров из сцен как в редакторе, так и в рантайме.

100+ загрузок в месяц.
	`,
	repo: 'https://github.com/RobolabGs2/shader-stutter-tracker',
	link: 'https://store.godotengine.org/asset/robolabgs2/shader-stutter-tracker/',
	images: [
		{
			url: guiImage,
			description: 'Интерфейс отладки.'
		},
		{
			url: configImage,
			description: 'Сборщик триггеров.'
		},
		{
			url: chartsImage,
			description: 'Графики компиляции.'
		},
	]
} satisfies Project;
