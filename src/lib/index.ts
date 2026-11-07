export interface Resume {
	name: string;
	birth: Date;
	contacts: { type: 'TG' | 'GH' | 'email'; link: string }[];
	education: Epoch[];
	jobs: Epoch[];
	pets: Project[];
}

export interface Place {
	full: string;
	short: string;
}

export interface Epoch {
	start: Date;
	end?: Date;
	status: string;
	place: Place;
	comment?: string;
	projects: Project[];
}

export interface Project {
	name: string;
	stack: Technology[];
	description: string;
	repo?: string;
	link?: string;
	images?: Image[];
}

export interface Image {
	url: string;
	description: string;
}

export class Technology {
	constructor(
		readonly name: string,
		readonly type:
			| 'язык'
			| 'база данных'
			| 'доменная область'
			| 'библиотека/фреймворк/API'
			| 'CI/CD'
			| 'игровой движок'
			| 'стек',
		readonly versions?: string
	) {}
	static Cybersec = new Technology('Информационная безопасность', 'доменная область');
	static Nets = new Technology('Компьютерные сети', 'доменная область');
	static CG = new Technology('Компьютерная графика', 'доменная область');
	static GameDev = new Technology('Gamedev', 'доменная область');

	static Go = new Technology('Go', 'язык', 'с 1.13');
	static Java = new Technology('Java', 'язык');
	static Kotlin = new Technology('Kotlin', 'язык');
	static Typescript = new Technology('Typescript', 'язык', '4-5');
	static Python3 = new Technology('Python', 'язык', '3');
	static GraphQL = new Technology('GraphQL', 'язык');

	static MongoDB = new Technology('MongoDB', 'база данных');
	static Clickhouse = new Technology('Clickhouse', 'база данных');
	static PostgreSQL = new Technology('PostgreSQL', 'база данных');
	static Kafka = new Technology('Kafka', 'база данных');

	static Spring = new Technology('Spring', 'библиотека/фреймворк/API');
	static React = new Technology('React+Redux', 'библиотека/фреймворк/API');
	static Webpack = new Technology('Webpack', 'библиотека/фреймворк/API');
	static Parcel = new Technology('Parcel', 'библиотека/фреймворк/API');
	static Svelte = new Technology('Svelte', 'библиотека/фреймворк/API');
	static SvelteKit = new Technology('SvelteKit', 'библиотека/фреймворк/API');
	static WebGL = new Technology('WebGL', 'библиотека/фреймворк/API', '2');
	static OpenAI = new Technology('OpenAI API', 'библиотека/фреймворк/API');
	static Cgo = new Technology('Cgo', 'библиотека/фреймворк/API');
	static FFMPEG = new Technology('ffmpeg', 'библиотека/фреймворк/API');
	static Ktor = new Technology('Ktor', 'библиотека/фреймворк/API');
	static MLAgents = new Technology('Unity ML Agents Toolkit', 'библиотека/фреймворк/API')

	static GitlabCI = new Technology('Gitlab CI', 'CI/CD');
	static GitHubCI = new Technology('GitHub Actions', 'CI/CD');
	static Docker = new Technology('Docker', 'CI/CD');
	static Kubernetes = new Technology('k8s', 'CI/CD');
	static Helm = new Technology('Helm', 'CI/CD');

	static Frontend = new Technology('Фронтенд', 'стек');
	static Backend = new Technology('Бэкенд', 'стек');

	static Phaser3 = new Technology('Phaser', 'игровой движок', '3.20.0');
	static Godot = new Technology('Godot', 'игровой движок', '4');
	static Unity = new Technology('Unity', 'игровой движок');
}
