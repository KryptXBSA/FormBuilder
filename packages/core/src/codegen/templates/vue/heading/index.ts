export const heading = `
		{{#ifEquals headingLevel "H1"}}
			<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
			{{label}}
			</h1>
		{{else ifEquals headingLevel "H2"}}
			<h2 class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
			{{label}}
			</h2>
		{{else ifEquals headingLevel "H3"}}
			<h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
			{{label}}
			</h3>
		{{else}}
			<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
			{{label}}
			</h1>
		{{/ifEquals}}
`; 