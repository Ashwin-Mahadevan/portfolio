import type { MDXComponents } from "mdx/types";
import type { ReactNode, ComponentProps } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,

		h1(props: ComponentProps<"h1">) {
			console.log(props);
			return <h1 className="tracking-tight">{props.children}</h1>;
		},

		h2(props: ComponentProps<"h2">) {
			return <h2 className="tracking-tight">{props.children}</h2>;
		},

		// TODO: Manually add styles instead of using tailwind prose.
		wrapper(props: { children: ReactNode }) {
			return <div className="prose xl:max-w-[100ch]">{props.children}</div>;
		},
	};
}
