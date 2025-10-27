"use client";

import { Chart, type AxisOptions } from "react-charts";

type Point = { x: number; y: number };

const data = [
	{ x: 1, y: 1 },
	{ x: 2, y: 2 },
	{ x: 3, y: 3 },
];

const primaryAxis = {
	getValue: (item) => item.x,
} satisfies AxisOptions<Point>;

const secondaryAxes = [
	{
		getValue: (item) => item.y,
	},
] satisfies Array<AxisOptions<Point>>;

export default function TestPage() {
	return (
		<Chart
			options={{
				data: [{ data }],
				primaryAxis,
				secondaryAxes,
			}}
		/>
	);
}
