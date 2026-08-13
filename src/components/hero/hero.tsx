import { motion } from 'framer-motion';
import {
	ArrowRight,
	Phone,
	BadgeCheck,
	Wallet,
	TrendingUp,
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Button } from '@/components/ui/button';
import { FloatingMetric } from '@/components/hero/floating-metric';
import { images } from '@/data/images';
import { easeOutExpo } from '@/lib/motion';

const heroReveal = {
	hidden: { opacity: 0, y: 22 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.75, ease: easeOutExpo, delay: 0.15 + i * 0.09 },
	}),
};

export function Hero() {
	return (
		<section className="relative overflow-hidden bg-bg-soft pt-16 pb-24 lg:pt-20 lg:pb-32">
			{/* Soft background shapes */}
			<div
				aria-hidden
				className="pointer-events-none absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-accent/25 blur-[120px]"
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute -right-40 top-40 h-[460px] w-[460px] rounded-full bg-primary-light/60 blur-[110px]"
			/>

			<Container className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
				{/* Left: copy */}
				<div className="max-w-xl">
					<motion.div
						custom={0}
						variants={heroReveal}
						initial="hidden"
						animate="visible"
					>
						<Eyebrow>Micro Credit — Achimota, Accra</Eyebrow>
					</motion.div>

					<motion.h1
						custom={1}
						variants={heroReveal}
						initial="hidden"
						animate="visible"
						className="mt-6 text-balance text-[38px] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-[46px] lg:text-[56px]"
					>
						Straightforward capital for{' '}
						<span className="text-primary">Accra's entrepreneurs.</span>
					</motion.h1>

					<motion.p
						custom={2}
						variants={heroReveal}
						initial="hidden"
						animate="visible"
						className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-soft lg:text-[18px]"
					>
						Dara Micro-Credit is financial service provider which is located at
						Achimota-Accra. We fund traders, business owners and salary workers
						with clear terms, fast decisions and no hidden cost. Your wealth,
						our wealth.
					</motion.p>

					<motion.div
						custom={3}
						variants={heroReveal}
						initial="hidden"
						animate="visible"
						className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
					>
						<Button
							size="lg"
							icon={<Phone className="h-4 w-4" strokeWidth={2.5} />}
							asChild
						>
							<a href="tel:+233302446357">Call 0302 446 357</a>
						</Button>
						<Button
							variant="outline"
							size="lg"
							icon={<ArrowRight className="h-4 w-4" />}
							asChild
						>
							<a href="#loans">Explore Our Solutions</a>
						</Button>
					</motion.div>

					<motion.div
						custom={4}
						variants={heroReveal}
						initial="hidden"
						animate="visible"
						className="mt-12 flex items-center gap-6 border-t border-border pt-7"
					>
						<div className="flex flex-col">
							<span className="text-2xl font-extrabold text-ink">10K+</span>
							<span className="text-[13px] text-ink-soft">
								Customers supported
							</span>
						</div>
						<div className="h-9 w-px bg-border" />
						<div className="flex flex-col">
							<span className="text-2xl font-extrabold text-ink">24–48h</span>
							<span className="text-[13px] text-ink-soft">Fast decisions</span>
						</div>
						<div className="h-9 w-px bg-border" />
						<div className="flex flex-col">
							<span className="text-2xl font-extrabold text-ink">98%</span>
							<span className="text-[13px] text-ink-soft">Satisfaction</span>
						</div>
					</motion.div>
				</div>

				{/* Right: image + floating cards */}
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.9, ease: easeOutExpo, delay: 0.2 }}
					className="relative mx-auto w-full max-w-[440px] lg:max-w-none"
				>
					{/* Double-bezel frame */}
					<div className="rounded-[2.25rem] bg-white/70 p-2 shadow-[var(--shadow-soft-xl)] ring-1 ring-black/[0.03]">
						<div className="relative overflow-hidden rounded-[1.9rem] bg-primary-darker">
							<img
								src={images.hero}
								alt="A Dara Micro Credit client at her business in Accra"
								className="aspect-[4/5] w-full object-cover"
								loading="eager"
								fetchPriority="high"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-primary-darker/40 via-transparent to-transparent" />
						</div>
					</div>

					<FloatingMetric
						icon={BadgeCheck}
						label="Application Status"
						value="Approved"
						tone="primary"
						className="-left-6 top-8 sm:-left-10"
						delay={0.6}
						floatDuration={5.5}
					/>
					<FloatingMetric
						icon={Wallet}
						label="Amount Disbursed"
						value="GHS 15,000"
						tone="accent"
						className="-right-4 top-[38%] sm:-right-10"
						delay={0.8}
						floatDuration={6}
					/>
					<FloatingMetric
						icon={TrendingUp}
						label="Repayment Plan"
						value="Flexible terms"
						className="-left-4 bottom-6 sm:-left-8"
						delay={1.0}
						floatDuration={5}
					/>
				</motion.div>
			</Container>
		</section>
	);
}
