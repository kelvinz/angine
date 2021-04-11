import './app.css'
import { ng, ngAdd, ngStart, ngPause, ngPlay, ngStop } from './angine'

ng.counter = 0

ngAdd( () => {
	ng.counter++
	console.log( ng.counter )
} )

document.querySelector( '#start' ).addEventListener( 'click', () => ngStart() )
document.querySelector( '#pause' ).addEventListener( 'click', () => ngPause() )
document.querySelector( '#play' ).addEventListener( 'click', () => ngPlay() )
document.querySelector( '#stop' ).addEventListener( 'click', () => ngStop() )
