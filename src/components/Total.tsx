import React from 'react'

// Didn't use interface here just to show both implementations
const Total = ({
	courseParts,
}: {
	courseParts: { name: string; exerciseCount: number }[]
}) => {
	return (
		<div>
			<p>
				Number of exercises{' '}
				{courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
			</p>
		</div>
	)
}

export default Total