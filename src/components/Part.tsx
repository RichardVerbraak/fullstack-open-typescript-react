import React from 'react'
import { CoursePart } from '../App'

const assertNever = (value: never): never => {
	throw new Error(`Unhandled value: ${JSON.stringify(value)}`)
}

const Part = ({ part }: { part: CoursePart }) => {
	switch (part.name) {
		case 'Fundamentals':
			break

		case 'Using props to pass data':
			break

		case 'Deeper type usage': {
			console.log(part)
			break
		}

		default:
			return assertNever(part)
	}
}

export default Part
