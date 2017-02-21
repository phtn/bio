import React, { Component } from 'react'

const styles = {
	pageTitleDiv: {
		textAlign: 'center',
		height: '200px',
		border: '1px solid #fff'
	},
	title: {
		fontFamily: 'Questrial, sans-serif',
		fontSize: '35px',
		marginTop: '150px',
		letterSpacing: '2px',
		background: '-webkit-linear-gradient(left, #b5bdc8 0%,#828c95 36%,#28343b 100%)',
		WebkitBackgroundClip: 'text',
  	WebkitTextFillColor: 'transparent'
	}
}

class PageTitle extends Component {
	
	render(){
		return(
			<div style={styles.pageTitleDiv}>
				<header style={styles.title}>Build Web Apps</header>
				<span style={styles.using}>using</span>
			</div>
		)
	}
}
export default PageTitle