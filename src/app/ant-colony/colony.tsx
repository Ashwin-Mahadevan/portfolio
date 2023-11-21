"use client";

import { useState } from "react";

type Coordinates = [number, number];

import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "react-use-gestuer";

const Node = () => {
	const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));

	const bind = useDrag(
		({ movement: [mx, my] }) => {
			set({ x: mx, y: my });
		},
		{
			bounds: { left: 0, right: 300, top: 0, bottom: 300 }, // Adjust as needed
			rubberband: true,
		},
	);

	return (
		<animated.div
			{...bind()}
			style={{
				x,
				y,
				width: 60,
				height: 60,
				backgroundColor: "blue",
				borderRadius: "50%",
				position: "absolute",
				touchAction: "none",
			}}
		/>
	);
};

export const Map = function Map() {
	const [nodes, setNodes] = useState<Coordinates[]>([
		[0, 0],
		[100, 100],
	]);

	const [transitions] = useTransition(nodes, () => ({
		update: ([x, y]) => ({ x, y }),
	}));

	return (
		<div className="relative h-96 w-full max-w-xl rounded-lg border-2 border-amber-950 bg-amber-900">
			{transitions(({ x, y }) => {
				console.log(x, y);

				return <animated.span className="rounded-full bg-black" />;
			})}
		</div>
	);
};
