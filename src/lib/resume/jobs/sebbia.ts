import { Technology, type Epoch } from '#lib';

export default {
	place: {
		full: 'ООО "СЕББИА"',
		short: 'Sebbia'
	},
	status: 'Ведущий инженер-программист',
	start: new Date('2025-05-22'),
	end: new Date('2025-12-30'),
	comment:
		'Разрабатывал backend-компоненты на Go, Python и Kotlin, участвовал в поддержке и развитии production-систем. По необходимости занимался DevOps-задачами: настраивал деплой backend/frontend, исправлял CI/CD, помогал команде с релизами и конфигурацией окружений.',
	projects: [
		{
			name: 'Сервис для геомаркетологов с генеративным ИИ',
			description: `- Переработал функционал, требующий знаний компьютерной графики и обратной инженерии, ускорив его в 20 раз.
- Проанализировал работу с языковыми моделями, нашёл системные ошибки и предложил исправления.
- Внедрил метрики для контроля расходов токенов.
- Быстро устранил критическую проблему с уже разосланными некорректными URL в production.`,
			stack: [
				Technology.Backend,
				Technology.Nets,
				Technology.Go,
				Technology.Python3,
				Technology.OpenAI,
				Technology.PostgreSQL
			]
		},
		{
			name: 'Обработка видеопотока на микрокомпьютере',
			description: `- Провёл профилирование и нашёл узкие места в существующей реализации.
- Улучшил асинхронную обработку и производительность.
- Собрал кастомную версию ffmpeg с аппаратным ускорением под конкретную платформу.
- Ускорение с 0.1 FPS до 10 FPS.`,
			stack: [Technology.Go, Technology.Cgo, Technology.FFMPEG]
		},
		{
			name: 'Билетная система',
			description: `- Расширил три микросервиса из распределённого монолита и бизнес-логику под новый поддомен.
- Спроектировал API с учётом обратной совместимости.
- Реализовал интеграции с внешней системой контроля и управления доступами.
- Участвовал в настройке production-окружений и Helm-чартов, помог найти ошибку, замедляющую CI/CD в 2 раза.
- Обучил стажёра и помогал фронтенд-команде с подготовкой к деплою.`,
			stack: [
				Technology.Backend,
				Technology.Kotlin,
				Technology.Go,
				Technology.GraphQL,
				Technology.Ktor,
				Technology.PostgreSQL,
				Technology.Kubernetes,
				Technology.Helm
			]
		}
	]
} satisfies Epoch;
