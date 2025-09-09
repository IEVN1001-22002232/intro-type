import { render } from 'preact'
import './index.css'
import { App } from './app.tsx'

import './temasTS/01-tipos-bas.ts'
import './temasTS/02-obj-interfaz-arre.ts'
import './temasTS/03-funciones.ts'
import './temasTS/04-desestructutracion-obj-arre.ts'
import './temasTS/05-desestructuracion-funciones.ts'

render(<App />, document.getElementById('app')!)
