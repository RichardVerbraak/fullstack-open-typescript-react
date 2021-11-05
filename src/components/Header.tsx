import react from 'react'

const Header = ({ courseName }: { courseName: string }) => {
	return (
		<div>
			<h1>{courseName}</h1>
		</div>
	)
}

export default Header
