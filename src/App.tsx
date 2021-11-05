import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

// interface CoursePartOne {
// 	name: 'Fundamentals'
// 	exerciseCount: number
// 	description: string
// }

// interface CoursePartTwo {
// 	name: 'Using props to pass data'
// 	exerciseCount: number
// 	groupProjectCount: number
// }

// interface CoursePartThree {
// 	name: 'Deeper type usage'
// 	exerciseCount: number
// 	description: string
// 	exerciseSubmissionLink: string
// }

interface CoursePartBase {
	name: string
	exerciseCount: number
}

interface CoursePartOne extends CoursePartBase {
	name: 'Fundamentals'
	description: string
}

interface CoursePartTwo extends CoursePartBase {
	name: 'Using props to pass data'
	groupProjectCount: number
}

interface CoursePartThree extends CoursePartBase {
	name: 'Deeper type usage'
	description: string
	exerciseSubmissionLink: string
}

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree

const App = () => {
	const courseName = 'Half Stack application development'

	const courseParts = [
		{
			name: 'Fundamentals',
			exerciseCount: 10,
			description: 'This is an awesome course part',
		},
		{
			name: 'Using props to pass data',
			exerciseCount: 7,
			groupProjectCount: 3,
		},
		{
			name: 'Deeper type usage',
			exerciseCount: 14,
			description: 'Confusing description',
			exerciseSubmissionLink: 'https://fake-exercise-submit.made-up-url.dev',
		},
	]

	return (
		<div>
			<Header courseName={courseName} />
			<Content courseParts={courseParts} />
			<Total courseParts={courseParts} />
		</div>
	)
}

export default App
