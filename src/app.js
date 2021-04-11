import './app.css'
import { ngInit, ngPause, ngPlay, ngStop } from './angine'

const initNg = () => {
	ngInit( {
		timer: 0,
		counter: 0,
	}, ( state ) => {
		state.counter++
		if ( state.counter >= 60 ) {
			state.timer++
			state.counter = 0
			console.log( state.timer )
		}
	} )
}

document.querySelector( '#start' ).addEventListener( 'click', () => initNg() )
document.querySelector( '#pause' ).addEventListener( 'click', () => ngPause() )
document.querySelector( '#play' ).addEventListener( 'click', () => ngPlay() )
document.querySelector( '#stop' ).addEventListener( 'click', () => ngStop() )
