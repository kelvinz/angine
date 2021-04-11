let request, interval, now, then, elapsed
let stop, pause

const ng = {}
const ngFns = []

const animate = () => ngFns.forEach( fn => fn( ng ) )

const loop = () => {
	if ( !stop ) request = requestAnimationFrame( loop )
	now = Date.now()
	elapsed = now - then

	if ( elapsed > interval ) {
		then = now - ( elapsed % interval )
		if ( !pause ) animate()
	}
}

const play = fps => {
	interval = 1000 / fps
	then = Date.now()
	loop()
}

export const ngInit = ( obj, fn, fps = 60 ) => {
	ngStop()
	Object.assign( ng, obj )
	ngFns[ 0 ] = fn
	stop = false
	pause = false
	play( fps )
}

export const ngStop = () => {
	ngFns.length = 0
	if ( request ) cancelAnimationFrame( request )
}

export const ngPause = () => pause = true
export const ngPlay = () => pause = false
