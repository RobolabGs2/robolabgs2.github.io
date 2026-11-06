import education from "./education";
import sva from "./jobs/sva";
import mmcs from "./jobs/mmcs";
import type { Epoch, Resume } from "#lib";
import sebbia from "./jobs/sebbia";

const jobs: Epoch[] = [sva, mmcs, sebbia];

export default {
	name: 'Иванченко Вячеслав Вадимович',
	birth: new Date('1999-10-17'),
	contacts: [
		{ type: 'TG', link: '@vivacheslav' },
		{ type: 'GH', link: 'RobolabGs2' }
	],
	education: education.toReversed(),
	jobs: jobs.toReversed(),
	pets: []
} satisfies Resume;
