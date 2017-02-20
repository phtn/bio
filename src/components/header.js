import React, { Component } from 'react'
import mojs from 'mo-js'

class Header extends Component {
	showHeader(){
		let shape = new mojs.Shape({
		  shape:        'polygon',
		  points: 			 6,
		  scale:         { 0 : 3 },
		  fill: 				 'none',
		  stroke: 			 {'#fff': '#e85454'},
		  strokeWidth:   { 5: 0 },
		  strokeDasharray: '100%',
		  strokeDashoffset: { '-100%' : '100%' },
		  duration:      3000,
		  angle:        { 0: 270 },
		  easing:        'cubic.out',
		  repeat: 			40
		}).play()
	}
	render() {
		return(
			<div>{this.showHeader()}</div>
		)
	}
}
export default Header