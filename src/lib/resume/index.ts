import education from "./education";
import type { Resume } from "#lib";
import pets from "./pets";
import jobs from "./jobs";


export default {
	name: 'Иванченко Вячеслав Вадимович',
	birth: new Date('1999-10-17'),
	contacts: [
		{ type: 'TG', link: '@vivacheslav' },
		{ type: 'GH', link: 'RobolabGs2' },
		{ type: 'email', link: 'slavikelk@yandex.ru'},
	],
	education: education.toReversed(),
	jobs: jobs.toReversed(),
	pets: pets
} satisfies Resume;
