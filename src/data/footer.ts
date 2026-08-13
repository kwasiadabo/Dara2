export interface FooterLink {
	label: string;
	href: string;
}

export interface FooterColumn {
	title: string;
	links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
	{
		title: 'Company',
		links: [
			{ label: 'About', href: '/#about' },
			{ label: 'Loan Products', href: '/#loans' },
			{ label: 'How It Works', href: '/#how-it-works' },
		],
	},
	{
		title: 'Loan Products',
		links: [
			{ label: 'Business Loans', href: '/#loans' },
			{ label: 'Working Capital', href: '/#loans' },
			{ label: 'Salary & Personal', href: '/#loans' },
			{ label: 'Group Loans', href: '/#loans' },
		],
	},
];

export const contactDetails = {
	address: 'Achimota, Accra – Ghana',
	email: 'info@daramicrocredit.com',
	phone: '0302 446 357 / 0558 542 830',
	phoneHref: 'tel:+233302446357',
	whatsapp: 'https://wa.me/233558542830',
	facebook: 'https://www.facebook.com/profile.php?id=61593399651210',
};

export const socialLinks = [
	{ label: 'Facebook', href: contactDetails.facebook },
	{ label: 'WhatsApp', href: contactDetails.whatsapp },
];
