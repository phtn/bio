import React, { Component } from 'react'

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
		textDecorationStyle: 'none',
		color: '#666'
	},
	launch: {
		fontSize: '20px'
	},
	launchIcon: {
		color: '#00bce4',
		marginTop: '10px',
	}
}

class GetStarted extends Component {
	render(){
		return(
			<div style={styles.getStartedDiv}>
				{/*<Link to='/admin' activeStyle={styles.gsBtn}><a style={styles.gsBtn}>{this.props.label}</a></Link>*/}
				{/*<a style={styles.gsBtn} onClick={()=>console.log('fired')}><Link to='/main'activeStyle={{textDecorationStyle: 'none !important'}}>{this.props.label}</Link></a>*/}
				<span style={styles.launch}>{`Let's Get Started!`}</span>
				<br/>
				<span style={styles.launchIcon} className="fa fa-2x fa-chevron-circle-down"></span>
			</div>
		)
	}
}
export default GetStarted