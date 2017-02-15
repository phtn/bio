import React from 'react'
const styles = {
	navDiv: {
		height: '25px',
		paddingTop: '5px',
		textAlign: 'left',
		borderBottom: '1px solid #222',
	}
}

const Nav = ({brand, pwd}) => {
	return (
		<div className="animated fadeInDown" style={styles.navDiv}>
			<span className="red-label">>_&nbsp;</span>
			<span className="yell-label">{brand}</span>
			<span className="red-label">&nbsp;\</span>
			<span className="yell-label animated fadeInRight">&nbsp;{pwd}</span>
		</div>
	)
}

Nav.propTypes = {
	brand: React.PropTypes.string.isRequired
}
export default Nav