import React, { Component } from 'react'
import mojs from 'mo-js'

class Header extends Component {
	showHeader(){
		new mojs.Shape({
		  shape:        'polygon',
		  points: 			 6,
		  scale:         { 0 : .2 },
		  top: 					 '22px',
		  left: 				 '85px',
		  fill: 				 'none',
		  stroke: 			 {'#fff': '#e85454', easing: 'cubic.out'},
		  strokeWidth:   { 5: 0 },
		  strokeDasharray: '100%',
		  strokeDashoffset: { '-100%' : '100%' },
		  duration:      3000,
		  angle:        { 0: 270 },
		  easing:        'cubic.out',
		  repeat: 			20
		}).play()

		new mojs.Shape({
		  shape:        'polygon',
		  points: 			 3,
		  scale:         { 0 : .2 },
		  top: 					 '22px',
		  left: 				 '85px',
		  fill: 				 'none',
		  stroke: 			 {'#00a4e4': '#49a942'},
		  strokeWidth:   { 5: 0 },
		  strokeDasharray: '100%',
		  strokeDashoffset: { '-100%' : '100%' },
		  duration:      3000,
		  angle:        { 0: 450 },
		  easing:        'cubic.out',
		  repeat: 			20
		}).play()

		new mojs.Shape({
		  shape:        'circle',
		  scale:         { 0 : .2 },
		  top: 					 '22px',
		  left: 				 '85px',
		  fill: 				 'none',
		  stroke: 			 {'gray': '#fff'},
		  strokeWidth:   { 5: 0 },
		  strokeDasharray: '100%',
		  strokeDashoffset: { '-100%' : '100%' },
		  duration:      3000,
		  angle:        { 0: 360 },
		  easing:        'cubic.out',
		  repeat: 			20
		}).play()
	}
	render() {
		return(
			<div>{this.showHeader()}</div>
		)
	}
}
export default Header