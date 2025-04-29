export const headingWithAnchor = `
		<>
			{{#ifEquals headingLevel "h1"}}
				<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" anchor={anchorValue}>
					{&#96;&#36;{headingLevel} with anchor&#96;}
				</h1>
			{{else ifEquals headingLevel "h2"}}
				<h2 className="mt-10 scroll-m-20 border-b text-3xl font-semibold tracking-tight transition-colors first:mt-0" anchor={anchorValue}>
					{&#96;&#36;{headingLevel} with anchor&#96;}
				</h2>
			{{else ifEquals headingLevel "h3"}}
				<h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight" anchor={anchorValue}>
					{&#96;&#36;{headingLevel} with anchor&#96;}
				</h3>
			{{else}}
				<h1 className="border-b-2" anchor={anchorValue}>
					{&#96;&#36;{headingLevel} with anchor&#96;}
				</h1>
			{{/ifEquals}}
		</>
		`;
