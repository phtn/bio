import React, { Component } from 'react'
import { Link } from 'react-router'

const styles = {
	getStartedDiv: {
		marginTop: '15px',
		textAlign: 'center',
		height: '100px',
		
	},
	gsBtn: {
		border: '1px solid #ccc',
		borderRadius: '4px',
		padding: '10px',
		width: '200px',
		backgroundColor: '#fff',
		fontFamily: 'Questrial, sans-serif',
		fontSize: '24px',
		textDecoration: 'none !important',
		color: '#666'
	}
}

class GetStarted extends Component {
	render(){
		return(
			<div style={styles.getStartedDiv}>
				<Link to='/admin' activeStyle={styles.gsBtn}><a style={styles.gsBtn}>{this.props.label}</a></Link>
			</div>
		)
	}
}
export default GetStarted