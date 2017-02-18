import React from 'react'
const styles = {
	navDiv: {
		height: '25px',
		paddingTop: '5px',
		textAlign: 'left',
	},
	termIcon: {
		color: '#e85454',
		fontSize: '16px',
		marginRight: '5px'
	},
	brand: {
		color: '#222',
		fontFamily: 'Questrial, sans-serif'
	}
}

const Nav = ({brand, pwd}) => {
	return (
		<div className="animated fadeInDown" style={styles.navDiv}>
			<span style={styles.termIcon} className="fa fa-terminal"></span>
			<span style={styles.brand}>{brand}</span>
		</div>
	)
}


export default Nav