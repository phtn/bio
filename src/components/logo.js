import React, { Component } from 'react'
import mojs from 'mo-js'

class Logo extends Component {
	logo() {
		new mojs.Shape({
			shape: 'circle',
		  radius: 50,
		  top: '110px',
		  fill: 'none',
		  stroke: '#eee',
		  strokeWidth: 1,
		  strokeDasharray: '100%',
		  strokeDashoffset: '40%',
		  isShowStart:  true
		})
		new mojs.Shape({
			shape: 'polygon',
		  radius: 50,
		  top: '110px',
		  fill: 'none',
		  stroke: '#2dde98',
		  strokeWidth: 1,
		  strokeDasharray: '100%',
		  strokeDashoffset: '40%',
		  isShowStart:  true
		})
		new mojs.Shape({
			shape: 'polygon',
			points: '6',
		  radius: 50,
		  top: '110px',
		  fill: 'none',
		  stroke: '#fd5c63',
		  strokeWidth: 1,
		  angle: '200',
		  strokeDasharray: '100%',
		  strokeDashoffset: '40%',
		  isShowStart:  true
		})
		new mojs.Shape({
			shape: 'polygon',
			points: '4',
		  radius: 50,
		  top: '110px',
		  fill: 'none',
		  stroke: '#00bce4',
		  strokeWidth: 1,
		  angle: '90',
		  strokeDasharray: '100%',
		  strokeDashoffset: '40%',
		  isShowStart:  true
		})
	} 
	render(){
		return(
			<div>{this.logo()}</div>
		)
	}
}
export default Logo