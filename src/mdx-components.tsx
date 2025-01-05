import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	console.log(`Components: ${components}`);
	return {
		...components,
		wrapper(props: { children: ReactNode }) {
			return <div className="prose prose-invert">{props.children}</div>;
		},
	};
}
