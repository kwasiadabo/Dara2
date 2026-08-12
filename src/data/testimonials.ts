export interface Testimonial {
	id: string;
	quote: string;
	name: string;
	role: string;
	location: string;
	rating: number;
}

/**
 * Placeholder testimonials — replace with verified customer testimonials
 * before launch.
 */
export const testimonials: Testimonial[] = [
	{
		id: 't1',
		quote:
			'The process was straightforward and the team explained every step clearly.',
		name: 'Ama Owusu Agyemang',
		role: 'Textile Trader',
		location: 'Mala Atta Market, Accra',
		rating: 5,
	},
	{
		id: 't2',
		quote:
			'Getting financing for my shop no longer felt complicated or intimidating.',
		name: 'Kwabena Asante Michael',
		role: 'Small Business Owner',
		location: 'Madina, Accra',
		rating: 5,
	},
	{
		id: 't3',
		quote:
			'Transparent terms and a support team that actually answers questions.',
		name: 'Efua Mensah Ewusi',
		role: 'Salaried Professional/Entrepreneur',
		location: 'Ashaiman, Greater Accra Region',
		rating: 5,
	},
];
