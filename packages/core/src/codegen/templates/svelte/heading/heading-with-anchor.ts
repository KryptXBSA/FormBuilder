export const headingWithAnchor = `
		{{#ifEquals headingLevel "h1"}}
			<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {anchor}>
				{{label}}
			</h1>
		{{else ifEquals headingLevel "h2"}}
			<h2 class="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0" {anchor}>
				{{label}}
			</h2>
		{{else ifEquals headingLevel "h3"}}
			<h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight" {anchor}>
				{{label}}
			</h3>
		{{else}}
			<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {anchor}>
				{{label}}
			</h1>
		{{/ifEquals}}
`;
