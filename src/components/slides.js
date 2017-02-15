import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/'

const styles = {
	slidesDiv: {
		height: '200px',
		marginTop: 10
	},
	slides: {
		height: '200px',
		textAlign: 'center',
		lineHeight: '200px',
		fontSize: '94px'
	}
}

const settings = {
	arrows: false,
	dots: true,
	afterChange: ()=> console.log('slides'),
	speed: 500,
	autoplay: true
}

const Slides = () => {
	return (
		<div style={styles.slidesDiv}>

			<Slider {...settings}>
				<div className="" style={styles.slides}>ES6</div>
				<div className="two" style={styles.slides}>React</div>
				<div className="" style={styles.slides}>Redux</div>
			</Slider>

		</div>
	)
}
export default Slides