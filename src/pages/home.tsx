import { Hero } from '@/components/hero/hero';
import { TrustSection } from '@/components/sections/trust-section';
import { useHashScroll } from '@/hooks/use-hash-scroll';
import { MissionVision } from '@/components/sections/mission-vision';
import { StatsBanner } from '@/components/sections/stats-banner';
import { LoanProducts } from '@/components/sections/loan-products';
import { ProcessTimeline } from '@/components/sections/process-timeline';
import { GhanaSection } from '@/components/sections/ghana-section';
import { Gallery } from '@/components/sections/gallery';
import { ResponsibleLending } from '@/components/sections/responsible-lending';
import { WhyDara } from '@/components/sections/why-dara';
import { Testimonials } from '@/components/sections/testimonials';
import { FaqSection } from '@/components/sections/faq-section';
import { FinalCta } from '@/components/sections/final-cta';

export function Home() {
	useHashScroll();

	return (
		<>
			<Hero />
			<TrustSection />
			<MissionVision />
			<StatsBanner />
			<LoanProducts />
			<ProcessTimeline />
			<GhanaSection />
			{/* <Gallery /> */}
			<ResponsibleLending />
			<WhyDara />
			<Testimonials />
			<FaqSection />
			<FinalCta />
		</>
	);
}
