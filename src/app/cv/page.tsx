export default function CVPage() {
	return (
		<div>
			{/* <h1 className="text-3xl font-bold leading-none">CV</h1> */}

			<EducationSection />
		</div>
	);
}

function EducationSection() {
	return <UCBerkeley />;
}

function UCBerkeley() {
	return (
		<div>
			<p className="text-xl font-bold">University of California, Berkeley</p>
			<p className="font-light">B.A., Applied Mathematics</p>
			<p className="font-light">B.A., Computer Science</p>
			<p className="font-light">Statistics and Machine Learning Concentration</p>

			<div className="my-8" />

			<Coursework />
		</div>
	);
}

function Coursework() {
	return (
		<div className="flex flex-col gap-16">
			{/* Core CS Courses */}
			<CourseworkItem
				id="CS 189"
				name="Machine Learning"
				details={["Foundational statistical theory for modern deep learning."]}
			/>

			<CourseworkItem id="CS 188" name="Artificial Intelligence" />

			<CourseworkItem
				id="CS 170"
				name="Algorithms and Intractability"
				details={[
					"Introduction to the theories of computational computability and complexity.",
					"Survey of efficient algorithm design, including sorting, graph search, dynamic programming, network flow, and linear programming.",
					"Design of approximation algorithms for NP-hard problems.",
				]}
			/>

			<CourseworkItem id="CS 126" name="Probability and Random Processes" />

			{/* Core Math Courses */}
			<CourseworkItem id="MATH 104" name="Real Analysis" />
			<CourseworkItem id="MATH 185" name="Complex Analysis" />
			<CourseworkItem id="MATH 110" name="Advanced Linear Algebra" />
			<CourseworkItem id="MATH 113" name="Abstract Algebra" />
			<CourseworkItem id="MATH 128A" name="Numerical Analysis" />
			<CourseworkItem id="MATH 103" name="Mathematical Economics" />
			<CourseworkItem id="STAT 155" name="Algorithmic Game Theory" />

			{/* Electives */}
			<CourseworkItem id="ECON 131" name="Public Sector Economics" />
			<CourseworkItem id="ECON 162" name="The Chinese Economy" />
			<CourseworkItem id="LEGAL 140" name="Property and Liberty" />
			<CourseworkItem id="NUTRITION 10" name="Introduction to Human Nutrition" />

			{/* Lower Division */}
			<CourseworkItem id="CS 61A" name="Structure and Interpretation of Computer Programs" />
			<CourseworkItem id="CS 61B" name="Data Structures" />
			<CourseworkItem id="CS 61C" name="Machine Architecture" />

			<CourseworkItem id="MATH 53" name="Multivariable Calculus" />
			<CourseworkItem id="MATH 54" name="Introduction to Linear Algebra" />
			<CourseworkItem id="MATH 55" name="Discrete Mathematics" />
		</div>
	);
}

function CourseworkItem(props: { id: string; name: string; details?: Array<string> }) {
	return (
		<div>
			<p className="text-lg">{props.name}</p>

			<ul>
				{props.details?.map((detail, index) => (
					<li key={index}>
						<p className="font-light">{detail}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
