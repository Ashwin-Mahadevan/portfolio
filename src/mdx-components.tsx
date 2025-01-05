import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,

		// TODO: Manually add styles instead of using tailwind prose.
		wrapper(props: { children: ReactNode }) {
			return <div className="prose prose-invert">{props.children}</div>;
		},
	};
}
