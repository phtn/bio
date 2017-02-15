import React from 'react'

const styles = {
	jumboDiv: {
		marginTop: 10,
		/*border: '1px solid #e85454',*/
		minHeight: '200px',
		backgroundColor: 'gray',
		borderRadius: '2px'
	},
	cardTitle: {
		height: '40px',
		backgroundColor: '#222',
		lineHeight: '40px',
		paddingLeft: 15
	},
	titleIcon: {
		color: 'gray',
		marginRight: 15
	}
}

const Jumbo = () => {
	return (
		<div className="card-1 animated fadeInRight" style={styles.jumboDiv}>
		<div style={styles.cardTitle}>
		<i className="fa fa-book" style={styles.titleIcon}></i>
		Redux</div>
		</div>
	)
}
export default Jumbo