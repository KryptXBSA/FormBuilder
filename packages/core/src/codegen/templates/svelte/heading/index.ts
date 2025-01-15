// TODO: svelte custom heading component 
export const heading = `
		<>
			{useAnchor ? (
				<HeadingComponent className="border-b-2"
					anchor={anchorValue}
				>{&#96;&#36;{headingLevel} with anchor&#96;}</HeadingComponent>
			) : (
				<HeadingComponent className="border-b-2">{&#96;&#36;{headingLevel} without anchor&#96;}</HeadingComponent>
			)}
		</>
		`;
