import React from 'react'
import Slider from 'react-slick'

const styles = {
	sliderDiv: {
		marginTop: '5px',
		height: '50px',
		textAlign: 'center',
		/*border: '1px solid #eee'*/
	},
	headerSlides: {
		color: '#0288d1',
		fontFamily: 'Questrial, sans-serif',
		fontSize: '24px',
		lineHeight: '50px'
	}
}
const settings = {
	arrows: true,
	autoplay: true,
	speed: 1000,
	autoplaySpeed: 1700,
	fade: false,
	swipeToSlide: true,
	vertical: true
}

const Slides = () => {
	return(
		<div style={styles.sliderDiv}>
			<Slider {...settings}>
				<div style={styles.headerSlides}>React</div>
				<div style={styles.headerSlides}>Redux</div>
				<div style={styles.headerSlides}>MobX</div>
				<div style={styles.headerSlides}>mojs</div>
			</Slider>
		</div>
	)
}
export default Slides