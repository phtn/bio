import React from 'react'
const styles = {
	introDiv: {
		marginBottom: '40px',
	},
	introHeader: {
		fontSize: '12px',
		marginBottom: '10px',
		padding: '2px',
		borderRadius: '3px',
		background: '#ccc'
	},
	middot: {
		color: '#00bce4',
		marginRight: '3px',
		marginLeft: '3px',
	}
}
const Intro = () => {
	return(
		<div style={styles.introDiv}>
			<header style={styles.introHeader}><span style={styles.middot}>&middot;</span>BRIEF INTRODUCTION</header>
			<span>This site is still under construction.</span>

		</div>
	)
}
export default Intro