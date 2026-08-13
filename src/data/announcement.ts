import officeTeamMeeting from '@/assets/brand/office-team-meeting.jpg';

export interface AnnouncementModalAction {
	label: string;
	href: string;
}

export interface AnnouncementModalContent {
	/** Master switch — set false to turn the popup off without deleting content. */
	enabled: boolean;
	/** Bump this when the content changes to re-show it to visitors who dismissed an older one. */
	id: string;
	/** ISO datetime — popup stays hidden before this. */
	startAt: string;
	/** ISO datetime — popup stays hidden after this. */
	endAt: string;
	/** How often it reappears for a visitor who already saw it, regardless of whether they closed it. Default 2 (every other day). */
	repeatIntervalDays?: number;
	image?: {
		src: string;
		alt: string;
	};
	eyebrow?: string;
	header: string;
	content: string;
	footer?: {
		primaryAction?: AnnouncementModalAction;
		secondaryAction?: AnnouncementModalAction;
		note?: string;
	};
}

export const announcementModal: AnnouncementModalContent = {
	enabled: true,
	id: '2026-08-daraplus-launch',
	startAt: '2026-08-12T00:00:00+00:00',
	endAt: '2026-08-16T23:59:00+00:00',
	repeatIntervalDays: 2,
	image: {
		src: officeTeamMeeting,
		alt: 'Dara Micro Credit team at the Achimota office',
	},
	eyebrow: 'Announcement',
	header: 'Dara Plus Loan is now open for applications.',
	content:
		'A 3-4 month business loan with flexible collateral and monthly instalments — built for businesses ready to grow. Talk to our Achimota team to see if it fits.',
	footer: {
		primaryAction: { label: 'Learn more', href: '/#loans' },
		secondaryAction: { label: 'Talk to us', href: '/#contact' },
		note: 'Offer available at our Achimota branch. Terms apply.',
	},
};
