let interval, now, then, elapsed
let stop, pause

export const ng = {}

const ngFns = []
export const ngAdd = ( fn ) => ngFns.push( fn )

const animate = () => ngFns.forEach( fn => fn() )

const loop = () => {
	if ( !stop ) requestAnimationFrame( loop )
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

export const ngStart = ( fps = 60 ) => {
	stop = false
	pause = false
	play( fps )
}

export const ngStop = () => stop = true

export const ngPause = () => pause = true
export const ngPlay = () => pause = false
