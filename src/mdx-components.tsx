import Link from "next/link";
import type { ReactNode, ComponentProps } from "react";
import type { MDXComponents } from "mdx/types";


const components = {
	h1(props: ComponentProps<"h1">) {
		return (
			<h1 className="text-balance tracking-tighter">{props.children}</h1>
		);
	},

	h2(props: ComponentProps<"h2">) {
		return <h2 className="text-balance tracking-tight">{props.children}</h2>;
	},

	a(props: ComponentProps<"a">) {
		const href = props.href ?? "#";

		return (
			<Link href={href} className="whitespace-nowrap">
				{props.children}
			</Link>
		);
	},

	// TODO: Manually add styles instead of using tailwind prose.
	wrapper(props: { children: ReactNode }) {
		return <div className="prose">{props.children}</div>;
	},
} as const satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
	return components;
}
