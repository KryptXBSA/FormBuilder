// TODO: add to main template

// const HeadingComponent = {
// 	H1: H1,
// 	H2: H2,
// 	H3: H3,
// 	H4: H4,
// 	H5: H5,
// 	H6: H6,
// }[headingLevel];
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
