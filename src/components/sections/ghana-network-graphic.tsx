import { motion } from 'framer-motion';

const nodes = [
	// { cx: 168, cy: 92, label: "Tamale" },
	// { cx: 108, cy: 168, label: "Kumasi" },
	{ cx: 66, cy: 196, label: 'Accra' },
	{ cx: 214, cy: 232, label: 'Ashiaman' },
];

export function GhanaNetworkGraphic() {
	return (
		<div className="relative mx-auto aspect-square w-full max-w-[380px]">
			<svg
				viewBox="0 0 280 300"
				fill="none"
				className="h-full w-full"
				role="img"
				aria-label="Stylized map of Ghana with connected financial service points"
			>
				{/* Simplified Ghana silhouette */}
				<path
					d="M120 18c22-4 44 2 58 18 10 12 12 28 22 38 14 14 24 20 26 40 2 22-8 34-6 54 2 22 14 32 8 52-6 20-26 28-46 30-18 2-30-8-48-6-20 2-34 16-52 10-18-6-24-26-28-46-4-22 6-38 2-58-4-20-20-30-18-52 2-20 16-32 28-46C78 38 96 22 120 18Z"
					className="fill-primary-light/70 stroke-primary/25"
					strokeWidth="1.5"
				/>

				{/* Connection lines */}
				<g
					className="stroke-primary/35"
					strokeWidth="1.25"
					strokeDasharray="3 4"
				>
					<line
						x1={nodes[0].cx}
						y1={nodes[0].cy}
						x2={nodes[1].cx}
						y2={nodes[1].cy}
					/>
				</g>

				{nodes.map((n, i) => (
					<g key={n.label}>
						<motion.circle
							cx={n.cx}
							cy={n.cy}
							r={14}
							className="fill-primary/10"
							animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
							transition={{
								duration: 3,
								repeat: Infinity,
								delay: i * 0.4,
								ease: 'easeInOut',
							}}
							style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
						/>
						<circle
							cx={n.cx}
							cy={n.cy}
							r={n.label === 'Accra' ? 7 : 5}
							className={
								n.label === 'Accra' ? 'fill-primary' : 'fill-primary-dark'
							}
						/>
						<circle
							cx={n.cx}
							cy={n.cy}
							r={n.label === 'Accra' ? 7 : 5}
							className="fill-white/40"
						/>
					</g>
				))}
			</svg>

			{nodes.map((n) => (
				<span
					key={n.label}
					style={{
						left: `${(n.cx / 280) * 100}%`,
						top: `${(n.cy / 300) * 100}%`,
					}}
					className="absolute -translate-x-1/2 translate-y-3 whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold text-ink-soft shadow-[var(--shadow-soft-sm)] ring-1 ring-border"
				>
					{n.label}
				</span>
			))}
		</div>
	);
}
