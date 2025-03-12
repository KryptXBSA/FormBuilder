// TODO: custom button group enum
export const button = `
          {#each {{enumName}} as item}
		  <Button variant={$formData["{{key}}"] === item.value ? "outline" : "default"}>{item.label}</Button>
		  {/each}
		`;
