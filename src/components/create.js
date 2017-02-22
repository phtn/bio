import React, { Component } from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css'

const styles = {
	createDiv: {
		background: '#eee',
		border: '1px solid #ccc',
		height: '310px',
		fontSize: '12px',
		borderRadius: '0px 8px 8px 8px',
	},
	panelTitle: {
		background: '#ccc',
		padding: 5,
		color: '#333',
		position: 'absolute',
		marginTop: -24,
		borderRadius: '4px 4px 0 0',
		marginLeft: -1
	},
	codeDiv: {

		margin: '5px',
		width: '100%',
		border: 'none',
		borderLeft: '12px solid #ffc168',
		paddingLeft: '10px',
		paddingTop: '10px',
		height: '220px',
	},
	codeStyle: {
		fontFamily: 'Questrial, sans-serif',
		fontSize: '12px'
	},
	textArea: {
		backgroundColor: '#eee',
		width: '80%',
		border: 'none',
		borderBottom: '1px solid #ccc',
		height: '220px',
		color: '#629aa9',
	},
	copyBtn: {
		background: 'none',
		backgroundColor: 'none',
		border: 'none',
		marginTop: '15px',
		color: '#999'
	},
	copyLabel: {
		fontSize: '8px',
	}
}

const htmlTemplate = `<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>App Title</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="bundle.js" charset="utf-8"></script>
  </body>
</html>`

class CreatePanel extends Component {

	getText(){
		let copyTextarea = document.querySelector('#html-template-text')
		copyTextarea.select()
		document.execCommand('copy')
		NotificationManager.success('copied!', 'STATUS', 1500)
	}
	notifyCopy(){
		return null
	} 

	render(){
		return(
			<div style={styles.createDiv}>
				<span style={styles.panelTitle}>index.html</span>
				<div style={styles.codeDiv}>
					<textarea style={styles.textArea} rows='20' cols='5' defaultValue={htmlTemplate} id="html-template-text">
					</textarea><br/>
					<button style={styles.copyBtn} onClick={this.getText}>
						<div>
						<span className='fa fa-2x fa-clone'></span><br/>
						<span style={styles.copyLabel}>COPY</span>
						<NotificationContainer/>
						</div>
					</button>	
				</div>
				
			</div>
		)
	}
}
export default CreatePanel