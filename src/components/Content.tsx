import React from 'react'
import { CoursePart } from '../App'
import Part from './Part'

const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
	return (
		<div>
			<h1>Parts</h1>
			{courseParts.map((part, index) => {
				return <Part key={index} part={part} />
			})}
		</div>
	)
}

export default Content
