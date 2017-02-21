import React, { Component } from 'react'

const styles = {
	pageTitleDiv: {
		textAlign: 'center',
		marginTop: '150px',
		/*border: '1px solid #ccc',*/

	},
	title_a: {
		fontFamily: 'Questrial, sans-serif',
		fontSize: '30px',
		letterSpacing: '2px',
		background: '-webkit-linear-gradient(left, #666 50%,#00bce4 70%,#666 100%)',
		WebkitBackgroundClip: 'text',
  	WebkitTextFillColor: 'transparent'
	},
	title_b: {
		fontFamily: 'Questrial, sans-serif',
		fontSize: '30px',
		letterSpacing: '2px',
		background: '-webkit-linear-gradient(left, #666 15%,#666 70%,#666 100%)',
		WebkitBackgroundClip: 'text',
  	WebkitTextFillColor: 'transparent'
	},
	title_c: {
		fontFamily: 'Inconsolata, monospace',
		fontSize: '30px',
		letterSpacing: '0px',
		background: '-webkit-linear-gradient(left, #666 15%,#666 70%,#666 100%)',
		WebkitBackgroundClip: 'text',
  	WebkitTextFillColor: 'transparent'
	}
}

class PageTitle extends Component {
	
	render(){
		return(
			<div style={styles.pageTitleDiv}>
				<span style={styles.title_c}>b</span>
				<span style={styles.title_c}>uild </span>
				<span style={styles.title_b}>Web </span>
				<span style={styles.title_a}>App</span>
				<span style={styles.title_a}>s</span>
				<br/>
				<span>Explore Cutting-edge Libraries</span>
				
			</div>
		)
	}
}
export default PageTitle