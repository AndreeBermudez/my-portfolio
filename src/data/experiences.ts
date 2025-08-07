export interface Experience {
	title: string;
	company: string;
	current?: boolean;
	date: string;
	location: string;
	description: string;
	technologies?: string[];
	achievements?: string[];
}

export const experiences: Experience[] = [
	{
		title: 'Frontend Developer',
		company: 'Municipalidad Distrital de Nuevo Chimbote',
		current: true,
		date: '2025 - Present',
		location: 'Nuevo Chimbote, Peru',
		description:
			'Participated in the development of the new institutional web page, creating dynamic components in React with a connection to a REST backend to manage content such as banners, news, events, users, and roles.',
		technologies: [
			'React',
			'TanSatck',
			'TypeScript',
			'HTML',
			'TailwindCSS',
			'Git',
			'GitHub',
			'Java',
			'Spring Boot',
			'MySQL',
		],
		achievements: [
			'Developed dynamic components in React for the new institutional website.',
			'Applied the institutional visual identity (colors, typography, and structure) to maintain brand coherence.',
			'Integrated the frontend with a REST backend for content management.',
		],
	},
];
