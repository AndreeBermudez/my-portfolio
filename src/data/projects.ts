const projects = [
	{
		title: 'Municipal Content Management System',
		description:
			'Web portal for the municipality with a role-based admin panel. Enables efficient content management with a modern and accessible interface for citizens.',
		image: 'src/assets/municipalidad.png',
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Git & GitHub'],
		github: '#',
		live: '#',
		featured: true,
	},
	{
		title: 'Business License Management System',
		description: 'Administrative platform for issuing and managing commercial business licenses.',
		image: 'src/assets/licencias.png',
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Git & GitHub'],
		github: '#',
		live: '#',
		featured: true,
	},
	{
		title: 'CoffeeShop Blog',
		description:
			'Minimalist blog built with Astro and WordPress Headless. Features posts, categories, and a comment system with responsive design.',
		image: 'src/assets/blog.png',
		technologies: ['Astro', 'WordPress Headless', 'PHP', 'TypeScript', 'Zod'],
		github: '#',
		live: '#',
		featured: true,
	},
	{
		title: 'Pio Riko Restaurant System',
		description: 'Management system for a restaurant with modules for waiters, cooks, and cashiers.',
		image: 'src/assets/pioriko.png',
		technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Spring Boot', 'Git & GitHub'],
		github: '#',
		live: '#',
		featured: true,
	},
	{
		title: 'Vía Costa Management System',
		description:
			'Desktop application for a transportation company. Includes ticket sales, administrative control, and identity validation via the RENIEC API.',
		image: 'src/assets/viacosta.png',
		technologies: ['Spring Boot', 'JavaFX', 'RENIEC API', 'SceneBuilder'],
		github: '#',
		live: '#',
		featured: true,
	},
	{
		title: 'Hackathon Project',
		description:
			'Solution developed during a national hackathon by Expedition. Winner of first place in the innovation category.',
		image: 'src/assets/hackaton.png',
		technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Git & GitHub'],
		github: '#',
		live: '#',
		featured: true,
	},
];

// const proyectos = [
//   {
//     title: 'Sistema de Gestión de Contenido Municipal',
//     description:
//       'Portal web para la municipalidad con un panel de administración basado en roles. Permite gestionar contenido de manera eficiente con una interfaz moderna y accesible para los ciudadanos.',
//     image: Municipalidad.src,
//     technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Git y GitHub'],
//     github: '#',
//     live: '#',
//     featured: true,
//   },
//   {
//     title: 'Sistema de Licencias de Establecimientos',
//     description:
//       'Plataforma administrativa para la emisión y gestión de licencias de funcionamiento de locales comerciales.',
//     image: Licencias.src,
//     technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Git y GitHub'],
//     github: '#',
//     live: '#',
//     featured: true,
//   },
//   {
//     title: 'Blog CoffeeShop',
//     description:
//       'Blog de estilo minimalista desarrollado con Astro y WordPress Headless. Incluye sistema de publicaciones, categorías y comentarios con diseño responsivo.',
//     image: Blog.src,
//     technologies: ['Astro', 'WordPress Headless', 'PHP', 'TypeScript', 'Zod'],
//     github: '#',
//     live: '#',
//     featured: true,
//   },
//   {
//     title: 'Sistema Pollería Pio Riko',
//     description:
//       'Sistema de gestión para restaurante que integra módulos para meseros, cocineros y cajeros.',
//     image: Polleria.src,
//     technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Spring Boot', 'Git y GitHub'],
//     github: '#',
//     live: '#',
//     featured: true,
//   },
//   {
//     title: 'Sistema de Gestión Vía Costa',
//     description:
//       'Aplicación de escritorio para empresa de transporte. Incluye venta de pasajes, control administrativo y validación de identidad con la API de RENIEC.',
//     image: Bus.src,
//     technologies: ['Spring Boot', 'JavaFX', 'API RENIEC', 'SceneBuilder'],
//     github: '#',
//     live: '#',
//     featured: true,
//   },
//   {
//     title: 'Proyecto Hackathon',
//     description:
//       'Solución desarrollada durante una hackathon nacional organizada por Expedition. Ganador del primer lugar en la categoría de innovación.',
//     image: Hackaton.src,
//     technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Spring Boot', 'Git y GitHub'],
//     github: '#',
//     live: '#',
//     featured: true,
//   },
// ];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
